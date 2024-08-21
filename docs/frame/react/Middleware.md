---
sidebar:
title: middleware
date: 2023-09-14
tags:
- react
- middleware
---
# middleware

## Middleware是什么?

一个框架的middleware，就是指这个框架允许我们在某个流程的执行中间插入我们自定义的一段代码。

Redux的middleware特性：

* 关于执行时机。middleware的代码执行时机是由框架确定的，我们只能定义代码，但无法改变代码运行的时机。比如express的middleware是在一个请求到达和服务端的响应产生之间调用。而Redux的middleware是在dispatch一个action，和action到达reducer之间调用。
* middleware允许链式调用。意思是我们可以注册多个middleware，框架会按照顺序依次调用我们的middleware。
* 如果我们注册了middleware，那么我们在之后每次dispatch的时候都会把所有middleware都走一遍。


## 如何使用？

demo

```js
import { compose, createStore, applyMiddleware } from 'redux';

const logger = middlewareAPI => next => action => {
    console.log('start dispatch: ', action)
    let result = next(action)
    console.log('next state: ', store.getState())
    return result
}
const errorHandler = middlewareAPI => next => action => {
    try {
        return next(action)
    } catch (err) {
        // handle error
    }
}


// 假如我们要注册两个middleware: logger 和 errorHandler
const enhancer = applyMiddleware(logger, errorHandler);

const store = createStore(reducers, enhancer);

```

代码的执行顺序是：首先执行logger，然后遇到next(action)的代码，接着执行errorHandler，最后执行原始的store.dispatch。

1. 执行createStore，由于我们传递了enhancer参数，会返回带有中间件的store（替换dispatch函数)。
2. 我们在代码中调用store.dispatch，这时拿到的dispatch函数是被修改过的，串联了middleware的。所以会按照第一步中所描述的过程，依次执行所有middleware，最后执行原始的store.dispatch函数。

## 原理

```js
// export default function applyMiddleware(...middlewares) {
//     // applyMiddleware返回另一个函数，也就是`enhancer`。
//     // `enhancer`接受原来的createStore函数为参数.
//     return function enhancer(createStore) {
//         // enhancer的返回值是另一个函数，其实就是`新的createStore`
//         return function enhancedCreateStore(...args) {
//             // 调用老的createStore，来获得store。
//             const store = createStore(...args)
//             // 定义新的dispatch函数，后边会被修改
//             let dispatch = () => {
//                 throw new Error('Dispatching while constructing your middleware is not allowed.Other middleware would not be applied to this dispatch.')
//             }
//             // 暴露个每个middleware的API。
//             const middlewareAPI = {
//                 getState: store.getState,
//                 dispatch: (...args) => dispatch(...args)
//             }
//             // 把所有传入的middlewares转为一个数组。
//             const chain = middlewares.map(function(middleware) {
//                 return middleware(middlewareAPI)
//             })
//             // 新的dispatch函数，其实就是把所有middleware的调用链加入dispatch的执行过程中。
//             dispatch = compose(...chain)(store.dispatch)
//             // 新的createStore的返回值，其实唯一变化的就是dispatch字段。
//             return {
//                 ...store,
//                 dispatch,
//             }
//         }
//     }
// }

export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    // 让中间件函数传入 midApi 执行一遍
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    // 组合函数
    dispatch = compose(...middlewareChain)(store.dispatch);
    return {
      ...store,
      // 加强版的dispatch
      dispatch
    };
  };
}

// compose
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));

    // return funcs.reduce(function reducer(a, b) {
    //     return function (...args) {
    //         return a(b(...args))
    //     }
    // })
}

```

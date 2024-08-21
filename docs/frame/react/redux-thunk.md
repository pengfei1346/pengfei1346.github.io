---
sidebar:
title: redux-thunk
date: 2023-09-14
tags:
- react
- redux-thunk
---
# redux-thunk

redux-thunk主要的功能就是可以让我们dispatch一个函数，而不只是普通的 Object

让 dispatch 支持函数

## 用法

```js
// 注册
import thunkMiddleware from 'redux-thunk'
const store = createStore(reducer, applyMiddleware(thunkMiddleware))


// 使用
// 用于发起登录请求，并处理请求结果
// 接受参数用户名，并返回一个函数(参数为dispatch)
const login = (userName) => (dispatch) => {
    dispatch({ type: 'loginStart' })
    request.post('/api/login', { data: userName }, () => {
        dispatch({ type: 'loginSuccess', payload: userName })
    })
}
store.dispatch(login('Lucy'))
```

## redux-thunk 源码

```js

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```




它的核心代码其实只有两行，就是判断每个经过它的action：如果是function类型，就调用这个function（并传入 dispatch 和 getState 及 extraArgument 为参数），而不是任由让它到达 reducer，因为 reducer 是个纯函数，Redux 规定到达 reducer 的 action 必须是一个 plain object 类型。


























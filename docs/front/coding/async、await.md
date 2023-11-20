---
sidebar:
group:
title: 手写async、await
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# 手写async、await

## 手写async、await

https://juejin.cn/post/6844904102053281806

```js
function generatorToAsync(generatorFn) {
  // 返回的是一个新的函数
  return function() {
    // 先调用generator函数
    // 对应 var gen = testG()
    const gen = generatorFn.apply(this, arguments);

    // 返回一个Promise, 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值
    return new Promise((resolve, reject) => {
      // 内部定义一个step函数 用来一步步next
      function step(key, arg) {
        let res;

        // 这个方法需要包裹在try catch中
        // 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
        try {
          res = gen[key](arg); // 这里有可能会执行返回reject状态的Promise
        } catch (error) {
          return reject(error); // 报错的话会走catch，直接reject
        }

        // gen.next() 得到的结果是一个 { value, done } 的结构
        const { value, done } = res;
        if (done) {
          // 如果done为true，说明走完了，进行resolve(value)
          return resolve(value);
        } else {
          // 如果done为false，说明没走完，还得继续走

          // value有可能是：常量\Promise；
          // Promise有可能是成功或者失败
          return Promise.resolve(value).then(
            val => step("next", val),
            err => step("throw", err)
          );
        }
      }

      step("next"); // 第一次执行
    });
  };
}

// 测试generatorToAsync

// 1秒后打印data1 再过一秒打印data2 最后打印success
const getData = () =>
  new Promise(resolve => setTimeout(() => resolve("data"), 1000));
var test = generatorToAsync(function* testG() {
  // await被编译成了yield
  const data = yield getData();
  console.log("data1: ", data);
  const data2 = yield getData();
  console.log("data2: ", data2);
  return "success";
});

test().then(res => console.log(res));

```

最简实现

```js
function asyncToGenerator(generatorFunc) {
  // 返回的是一个新的函数
  return function() {
  
    // 先调用generator函数 生成迭代器
    // 对应 var gen = testG()
    const gen = generatorFunc.apply(this, arguments)

    // 返回一个promise 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值的
    // var test = asyncToGenerator(testG)
    // test().then(res => console.log(res))
    return new Promise((resolve, reject) => {
    
      // 内部定义一个step函数 用来一步一步的跨过yield的阻碍
      // key有next和throw两种取值，分别对应了gen的next和throw方法
      // arg参数则是用来把promise resolve出来的值交给下一个yield
      function step(key, arg) {
        let generatorResult
        
        // 这个方法需要包裹在try catch中
        // 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }

        // gen.next() 得到的结果是一个 { value, done } 的结构
        const { value, done } = generatorResult

        if (done) {
          // 如果已经完成了 就直接resolve这个promise
          // 这个done是在最后一次调用next后才会为true
          // 以本文的例子来说 此时的结果是 { done: true, value: 'success' }
          // 这个value也就是generator函数最后的返回值
          return resolve(value)
        } else {
          // 除了最后结束的时候外，每次调用gen.next()
          // 其实是返回 { value: Promise, done: false } 的结构，
          // 这里要注意的是Promise.resolve可以接受一个promise为参数
          // 并且这个promise参数被resolve的时候，这个then才会被调用
          return Promise.resolve(
            // 这个value对应的是yield后面的promise
            value
          ).then(
            // value这个promise被resove的时候，就会执行next
            // 并且只要done不是true的时候 就会递归的往下解开promise
            // 对应gen.next().value.then(value => {
            //    gen.next(value).value.then(value2 => {
            //       gen.next() 
            //
            //      // 此时done为true了 整个promise被resolve了 
            //      // 最外部的test().then(res => console.log(res))的then就开始执行了
            //    })
            // })
            function onResolve(val) {
              step("next", val)
            },
            // 如果promise被reject了 就再次进入step函数
            // 不同的是，这次的try catch中调用的是gen.throw(err)
            // 那么自然就被catch到 然后把promise给reject掉啦
            function onReject(err) {
              step("throw", err)
            },
          )
        }
      }
      step("next")
    })
  }
}

```

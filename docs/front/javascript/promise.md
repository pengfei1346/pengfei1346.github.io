---
sidebar:
group:
title: promise
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# promise

## promise

链式调用

1）promise的回调只能被捕获一次

2）在then函数加上return，后面的then函数才能继续捕获到

链式调用示例
```js
// 只有第一个then函数能捕获到结果，第二个then打印undefined
let pro = new Promise((resolve, reject) => resolve(1));
pro.then(res => {
    console.log(res);
  })
  .then(res => {
    console.log(res);
  });

```

**手写promise**

```js
class Promise {
  constructor(fn) {
    // resolve时的回调函数列表
    this.resolveTask = [];
    // reject时的回调函数列表
    this.rejectTask = [];
    // state记录当前状态,共有pending、fulfilled、rejected 3种状态
    this.state = "pending";
    let resolve = value => {
      // state状态只能改变一次，resolve和reject只会触发一种
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.data = value;
      // 模拟异步，保证resolveTask事件先注册成功，要考虑在Promise里面写同步代码的情况
      setTimeout(() => {
        this.resolveTask.forEach(cb => cb(value));
      });
    };
    let reject = err => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.error = err;
      // 保证rejectTask事件注册成功
      setTimeout(() => {
        this.rejectTask.forEach(cb => cb(err));
      });
    };

    // 关键代码，执行fn函数
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(resolveCallback, rejectCallback) {
    // 解决链式调用的情况，继续返回Promise
    return new Promise((resolve, reject) => {
      // 将then传入的回调函数，注册到resolveTask中
      this.resolveTask.push(() => {
        // 重点：判断resolveCallback事件的返回值
        // 假如用户注册的resolveCallback事件又返回一个Promise，将resolve和reject传进去，这样就实现控制了链式调用的顺序
        const res = resolveCallback(this.data);
        if (res instanceof Promise) {
          res.then(resolve, reject);
        } else {
          // 假如返回值为普通值，resolve传递出去
          resolve(res);
        }
      });

      this.rejectTask.push(() => {
        // 同理：判断rejectCallback事件的返回值
        // 假如返回值为普通值，reject传递出去
        const res = rejectCallback(this.error);
        if (res instanceof Promise) {
          res.then(resolve, reject);
        } else {
          reject(res);
        }
      });
    });
  }
}

// 测试
// 打印结果：依次打印1、2
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
}).then(
    res => {
      console.log(res);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(2);
        }, 1000);
      });
    }
  ).then(data => {
      console.log(data);
    });

```

**手写race、all**

race：返回promises列表中第一个执行完的结果   
all：返回promises列表中全部执行完的结果

```js
class Promise {
  // race静态方法，返回promises列表中第一个执行完的结果
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        // Promise.resolve包一下，防止promises[i]不是Promise类型
        Promise.resolve(promises[i])
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  }

  // all静态方法， 返回promises列表中全部执行完的结果
  static all(promises) {
    let result = [];
    let index = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i])
          .then(res => {
            // 输出结果的顺序和promises的顺序一致
            result[i] = res; 
            index++;
            if (index === promises.length) {
              resolve(result);
            }
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  }
}

```

**手写retry**

retry的作用，当接口请求失败后，每间隔几秒，再重发几次

```js
/* 
* @param {function} fn - 方法名
* @param {number} delay - 延迟的时间
* @param {number} times - 重发的次数
*/
function retry(fn, delay, times) {
  return new Promise((resolve, reject) => {
    function func() {
      Promise.resolve(fn()).then(res => {
          resolve(res);
        })
        .catch(err => {
          // 接口失败后，判断剩余次数不为0时，继续重发
          if (times !== 0) {
            setTimeout(func, delay);
            times--;
          } else {
            reject(err);
          }
        });
    }
    func();
  });
}

```

### async、await

作用：用同步方式，执行异步操作

1. async函数是generator（生成器函数）的语法糖
2. async函数返回的是一个Promise对象，有无值看有无return值
3. await关键字只能放在async函数内部，await关键字的作用 就是获取Promise中返回的resolve或者reject的值
4. async、await要结合try/catch使用，防止意外的错误

### generator

1. generator函数跟普通函数在写法上的区别就是，多了一个星号*
2. 只有在generator函数中才能使用yield，相当于generator函数执行的中途暂停点
3. generator函数是不会自动执行的，每一次调用它的next方法，会停留在下一个yield的位置

```js
// async、await示例
const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000));
async function test() {
  const data = await getData();
  console.log("data: ", data);
  const data2 = await getData();
  console.log("data2: ", data2);
  return "success";
}
test().then(res => console.log(res))

// generator改写
function* testG() {
    // await被编译成了yield
    const data = yield getData();
    console.log("data: ", data);
    const data2 = yield getData();
    console.log("data2: ", data2);
    return "success";
}

```


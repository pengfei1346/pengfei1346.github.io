---
isTimeLine: true
title: promise
date: 2021-11-21
tags:
- 异步
---
# promise


```js
function MyPromise(fn) {
  this.cbs = [];

  const resolve = (value) => {
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  }

  fn(resolve);
}

MyPromise.prototype.then = function (onResolved) {
  return new MyPromise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof MyPromise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

```



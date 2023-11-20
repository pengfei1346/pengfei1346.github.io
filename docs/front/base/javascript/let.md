---
isTimeLine: true
title: let 实现原理
date: 2021-11-21
tags:
- js基础
---
# let 实现原理

## var与let的经典案例

```js
// 案例1
// i是var声明的，在全局范围内都有效，全局只有一个变量i，输出的是最后一轮的i值，也就是 10

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[0]();  // 10

```

```js
// 案例2
// 用let声明i，for循环体内部是一个单独的块级作用域，相互独立，不会相互覆盖
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[0](); // 0

```

## 使用js模拟实现let

```js
// 用var实现案例2的效果
var a = [];

var _loop = function _loop(i) {
  a[i] = function() {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}
a[0](); // 0

```










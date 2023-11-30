---
sidebar:
group:
title: var、let、const的区别?
isTimeLine: true
date: 11-10-2023
---
# var、let、const的区别?

## var、let、const的区别?

1. var定义的变量，没有块的概念，可以跨块访问, 可以变量提升
2. let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明
3. const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改，无变量提升，不可以重复声明
4. 暂时性死区，

- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量

**暂时性死区**

var不存在暂时性死区，

let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

当程序的控制流程在新的作用域（module function 或 block 作用域）进行实例化时，在此作用域中用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，所以是不能被访问的，如果访问就会抛出错误。因此，在这运行流程进入作用域创建变量，到变量可以被访问之间的这一段时间，就称之为暂时死区。

```js
// var 
console.log(a); // undefined
var a = 10

// let 
console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 10

// const 
console.log(c); // Uncaught ReferenceError: Cannot access 'b' before initialization
const c = 10

```

**暂时性死区原因**：

ES6新增的let、const关键字声明的变量会产生块级作用域，如果变量在当前作用域中被创建之前被创建出来，由于此时还未完成语法绑定，如果我们访问或使用该变量，就会产生暂时性死区的问题，由此我们可以得知，从变量的创建到语法绑定之间这一段空间，我们就可以理解为‘暂时性死区’


## 经典案例

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

### let 实现原理

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

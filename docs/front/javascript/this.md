---
isTimeLine: true
title: this
date: 2021-11-21
tags:

- js基础

---

# this

## this

**this的5种绑定方式**

1. 默认绑定(非严格模式下this指向全局对象，严格模式下函数内的this指向undefined)
2. 隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo内的this指向obj)
3. 显示绑定(通过call或者apply方法直接指定this的绑定对象, 如foo.call(obj))
4. new构造函数绑定，this指向新生成的对象
5. 箭头函数，this指向的是定义该函数时，外层环境中的this，箭头函数的this在定义时就决定了，不能改变

### 题目1

```js
//  注意：开启了严格模式，只是使得函数内的this指向undefined，它并不会改变全局中this的指向。因此this1中打印的是undefined，而this2还是window对象。
"use strict";
var a = 10; // var定义的a变量挂载到window对象上
function foo() {
    console.log('this1', this)  // undefined
    console.log(window.a)  // 10
    console.log(this.a)  //  报错，Uncaught TypeError: Cannot read properties of undefined (reading 'a')
}

console.log('this2', this)  // window
foo();

```

### 题目2

```js
// 如果把 var 改成了 let 或 const，变量是不会被绑定到window上的，所以此时会打印出三个undefined
let a = 10
const b = 20

function foo() {
    console.log(this.a)  // undefined
    console.log(this.b)  // undefined
}

foo();
console.log(window.a) // undefined  

```

### 题目3

```js
//foo()函数内的this指向的是window，因为是window调用的foo，打印出的this.a是window下的a
var a = 1

function foo() {
    var a = 2
    console.log(this)  // window
    console.log(this.a) // 1
}

foo()

```

### 题目4

```js
//对于setTimeout中的函数，这里存在隐式绑定的this丢失，也就是当我们将函数作为参数传递时,会被隐式赋值，回调函数丢失this绑定，因此这时候setTimeout中函数内的this是指向window
var obj2 = {
    a: 2,
    foo1: function () {
        console.log(this.a) // 2
    },
    foo2: function () {
        setTimeout(function () {
            console.log(this) // window
            console.log(this.a) // 3
        }, 0)
    }
}
var a = 3

obj2.foo1()
obj2.foo2()

```

### 题目5 - 经典

```js
//  对于obj.foo1()函数的调用，它的外层作用域是window，对象obj当然不属于作用域了(作用域只有全局作用域、函数作用域、块级作用域)，所以会打印出window
//  obj.foo2()()，首先会执行obj.foo2()，这不是个箭头函数，所以它里面的this是调用它的obj对象，因此第二个打印为obj，而返回的匿名函数是一个箭头函数，它的this由外层作用域决定，那也就是它的this会和foo2函数里的this一样，第三个打印也是obj

function fn() {
    console.log('隐式绑定', this.a)
}

const obj = {
    a: 1,
    fn
}

obj.fn = fn;
obj.fn();
```

### 题目6 - 经典

```js
 const foo = {
    bar: 10,
    fn: function () {
        console.log(this.bar);
        console.log(this);
    }
}

// 取出
let fn1 = foo.fn;
fn1();
```

### 题目7 - 经典

```js
const o1 = {
    text: 'o1',
    fn: function () {
        // 直接使用上下文 - 传统分活
        console.log('o1fn_this', this);
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: function () {
        // 呼叫领导执行 - 部门协作
        return o1.fn();
    }
}

const o3 = {
    text: 'o3',
    fn: function () {
        // 直接内部构造 - 公共人
        let fn = o1.fn;
        return fn();
    }
}

console.log('o1fn', o1.fn());
console.log('o2fn', o2.fn());
console.log('o3fn', o3.fn());
```




















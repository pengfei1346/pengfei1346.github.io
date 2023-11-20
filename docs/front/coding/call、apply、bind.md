---
sidebar:
group:
title: call、apply、bind
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---

# call、apply、bind 异同？

* [call、apply、bind 异同](/front/base/javascript/call、apply、bind 异同.md)

## call

```js

Function.prototype.myCall = function (context) {
    // context为undefined或null时，则this默认指向全局window， 兜底
    if (context === undefined || context === null) {
        context = window;
    }

    // 利用Symbol创建一个唯一的key值，防止新增加的属性与obj中的属性名重复
    // 关键步骤，在 context 上调用方法，触发 this 绑定为 context，使用 Symbol 防止原有属性的覆盖
    let fn = Symbol();

    //*** this指向调用call的函数 *** 
    context[fn] = this;

    // 获取形参数组
    // es5 可通过 for 遍历 arguments 得到参数数组
    const args = [...arguments].slice(1)

    // 隐式绑定this 并参数传入，如执行obj.foo(), foo内的this指向obj
    let res = context[fn](...args);

    // 执行完以后，删除新增加的属性
    delete context[fn];
    return res;
}

// 不考虑边界情况的简单写法
Function.prototype.myCall = function (thisArg, ...argArray) {
    thisArg = thisArg || window
    thisArg.fn = this
    let res = thisArg.fn(...argArray)
    delete thisArg.fn
    return res
}
```

测试

```js

const me = {name: 'Jack'}

function say() {
    console.log(`My name is ${this.name || 'default'}`);
}

say.myCall(me)
```

## apply

```js
// apply与call相似，只有第二个参数是一个数组，
Function.prototype.myApply = function (context, args) {

    // context 兜底
    if (context === undefined || context === null) {
        context = window;
    }

    let fn = Symbol();
    context[fn] = this;

    let res = context[fn](...args);

    delete context[fn];

    return res;
}

// 简单写法
Function.prototype.myApply = function (thisArg, argArray = []) {
    thisArg = thisArg || window
    thisArg.fn = this
    let res
    if (argArray.length === 0) {
        res = thisArg.fn()
    } else {
        res = thisArg.fn(...argArray)
    }
    delete thisArg.fn
    return res
}
```

测试

```js

const me = {name: 'Jack'}

function say() {
    console.log(`My name is ${this.name || 'default'}`);
}

say.myApply(me)
```

## bind

```js
Function.prototype.Bind = function (context, ...args) {
    if (context === undefined || context === null) {
        context = window;
    }
    let fn = this;
    let f = Symbol();
    const result = function (...args1) {
        if (this instanceof fn) {
            // result如果作为构造函数被调用，this指向的是new出来的对象
            // this instanceof fn，判断new出来的对象是否为fn的实例
            this[f] = fn;
            let res = this[f](...args, ...args1);
            delete this[f];
            return res;
        } else {
            // bind返回的函数作为普通函数被调用时
            context[f] = fn;
            let res = context[f](...args, ...args1);
            delete context[f];
            return res;
        }
    };
    // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
    // 实现继承的方式: 使用Object.create
    result.prototype = Object.create(fn.prototype);
    return result;
};

// 简单写法
Function.prototype.mybind = function (thisArg) {
    const that = this
    const args = [...arguments].slice(1)
    return function F() {
        const bindArgs = args.concat(...arguments)
        if (this instanceof F) {
            return new that(...bindArgs)
        }
        return that.apply(thisArg,bindArgs)
    }
}
```







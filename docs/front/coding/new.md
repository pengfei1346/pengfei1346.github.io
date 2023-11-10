---
sidebar:
group:
title: new
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# 简介

## 代码

```js
function _new(constructor, ...args) {
        // 构造函数类型合法判断
        if(typeof constructor !== 'function') {
            throw new Error('constructor must be a function');
        }
        // 新建空对象实例
        let obj = new Object();
        
        // 将构造函数的原型绑定到新创的对象实例上
        obj.__proto__ = Object.create(constructor.prototype);
        
        // 调用构造函数并判断返回值
        let res = constructor.apply(obj,  args);
        
        let isObject = typeof res === 'object' && res !== null;
        let isFunction = typeof res === 'function';
        
        // 如果有返回值且返回值是对象类型，那么就将它作为返回值，否则就返回之前新建的对象
        return isObject || isFunction ? res : obj;
    }
```

```js
//简介版
function _new (obj,...arg) {
    // 基于obj的原型创建一个新的对象
    const newObj = Object.create(obj.prototype);
    
    // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
    const result = obj.apply(newObj, arg);
    
    // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
    return result instanceof Object ? result : newObj
}
```

## 总结


- 创建一个空对象 var obj = {}
- 修改obj.__proto__=Dog.prototype
- 改this指向并且把参数传递过去,call和apply都可以
- 根据规范，返回 null 和 undefined 不处理，依然返回obj

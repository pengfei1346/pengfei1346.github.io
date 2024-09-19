---
sidebar:
group:
title: 字节js面试题
---
# 字节js面试题

## 面试题：如何让 var [a, b] = {a: 1, b: 2} 解构赋值成功？

### 浏览器打印

> 这个错误是个类型错误，并且是对象有问题，因为对象是一个不具备迭代器属性的数据结构

```js
var [a, b] = {a: 1, b: 2}
// TypeError: {(intermediate value)(intermediate value)} is not iterable
```

### 解法

给对象原型上增加一个迭代器方法，返回对象结构。

```js
Object.prototype[Symbol.iterator] = function(){
    // 使用 Object.values(this) 方法获取对象的所有值，并返回这些值的迭代器对象
    return Object.values(this)[Symbol.iterator]()
}

```


## 来源

https://juejin.cn/post/7346512120639340607?utm_source=gold_browser_extension


















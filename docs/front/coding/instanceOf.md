---
sidebar:
group:
title: isInstanceOf
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---

# isInstanceOf

## 代码

不多bb，直接上代码

```js
 function isInstanceOf(instance, klass) {
    let proto = instance.__proto__
    let prototype = klass.prototype
    while (true) {
        if (proto === null) return false
        if (proto === prototype) return true
        proto = proto.__proto__
    }
}

// 测试
class Parent {
}

class Child extends Parent {
}

const child = new Child()
console.log(isInstanceOf(child, Parent), isInstanceOf(child, Child), isInstanceOf(child, Array));

```

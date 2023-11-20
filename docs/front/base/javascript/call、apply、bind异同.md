---
isTimeLine: true
title: call、apply、bind异同
date: 2021-11-21
tags:
- js基础
---
# call、apply、bind异同

## 相同点

1. 三者都可以显式绑定函数的this指向
2. 三者第一个参数都是this要指向的对象，若该参数为undefined或null，this则默认指向全局window

```js
let obj = {
    a: 1,
    b: 2,
    test() {
        console.log(this.a + this.b)
    }
}

obj.test()  // 3
obj.test.apply({ a: 2, b: 2 })  // 4
obj.test.call({ a: 3, b: 3 }) // 6
obj.test.bind({ a: 4, b: 4 })() // 8
```


## 不同点

1. 传参不同：apply是数组、call是参数列表，而bind可以分为多次传入，实现参数的合并
2. call、apply是立即执行，bind是返回绑定this之后的函数，如果这个新的函数作为构造函数被调用，那么this不再指向传入给bind的第一个参数，而是指向新生成的对象

```js
function test(a, b) {
    console.log(this, a + b)
}

test.call('call', 1, 2) // [String: 'call'] 3
test.apply('apply', [2, 4]) // [String: 'apply'] 6
test.bind('bind', 3, 6)() // [String: 'bind'] 9
```


## 手写call apply bind

















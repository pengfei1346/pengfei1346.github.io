---
sidebar:
group:
title: js中精度损失问题.md
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# js中精度损失问题.md

## js中精度损失是什么？

js中精度损失问题： 0.1 + 0.2 === 0.3 => false

## js中精度损失原因

精度损失原因: 

js采用双精度存储，1位用来表示符号位 11位用来表示指数 52位表示尾数，
存储时模仿十进制进行四舍五入了，但是二进制只有 0 和 1 两个，于是变为 0 舍 1 入，
由于存储位数限制因此存在“舍去”，精度丢失就发生了。



## js中精度损失解决

### 1、js：

* 1、把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数），这种方式依然存在问题，转换后的整数依然不能超过2的53次方。
* 2、toFixed，舍弃掉尾数。

 ```js
// toFixed 修复
function toFixed(num, s) {
 var times = Math.pow(10, s)
 var des = num * times + 0.5
 des = parseInt(des, 10) / times
 return des + ''
}
```

### 2、bigint解决：


创建方式：
```js
console.log(9007199254740995n);    // → 9007199254740995n
console.log(9007199254740995);     // → 9007199254740996

BigInt("9007199254740995");    // → 9007199254740995n
```


不能使用严格相等运算符将BigInt与常规数字进行比较，因为它们的类型不同：
```js
console.log(10n === 10);    // → false

console.log(typeof 10n);    // → bigint
console.log(typeof 10);     // → number
```

可以使用等号运算符，它在处理操作数之前执行隐式类型转换
```js
console.log(10n == 10);    // → true
```
不能使用Number和BigInt操作数的混合执行算术运算，需要通过显式转换其中的一种类型。 此外，出于兼容性原因，不允许在BigInt上使用一元加号（+）运算符。










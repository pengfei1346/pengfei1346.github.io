---
sidebar:
group:
title: 断言
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---

# base

类型声明、转换

* 编译时作用

类型断言有两种形式。

* 1、“尖括号”语法

```ts
  let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

* 2、as语法

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

* 3、非空判断

```ts
type ClassTime = () => number;
const start = (ClassTime:ClassTime|undefined) => {
  let num = ClassTime!() // 具体类型待确定，但不是非空
}
```










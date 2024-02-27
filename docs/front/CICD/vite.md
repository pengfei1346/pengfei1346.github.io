---
isTimeLine: true
title: vite
date: 2023-11-21
tags:
- vite
- todo
---

# vite


## vite 原理 解析

> **-- todo 不够深入，待补充**

当浏览器识别 type="module" 引入js文件的时候，内部的 import 就会发起一个网络请求，尝试去获取这个文件。

通过拦截路由 / 和 .js 结尾的请求。然后通过 node 去加载对应的 .js 文件.

* 普通代码，完全按需加载
* 三方库： 通过 es-module-lexer 将文件解析成 ast，拿到 import 地址
  * 第三方库：在node_moudules中查找（vite 中通过在第三方库中添加前缀 /@modules/）
* .vue文件：通过 @vue/compiler-dom把html解析成render
* .css：通过 document.createElement('style') 注入









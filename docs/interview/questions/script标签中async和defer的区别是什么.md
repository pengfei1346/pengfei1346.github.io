---
sidebar:
group:
title: script标签中async和defer的区别?
isTimeLine: true
date: 11-10-2023
tags:
- 算法
- 面试
categories:
sticky: 1
---
# script标签中async和defer的区别是什么

## script标签中async和defer的区别

如果没有async和defer标签，浏览器会立即加载并执行相应的脚本。读取到就开始加载和执行，会阻塞后续文档的加载。

### 相同点

async和defer属性都是 异步加载外部的js脚本文件，不会阻塞页面的解析。

### 不同点

**执行顺序**：

多个async属性的标签，不保证加载顺序，谁先加载完成谁先执行。
多个defer属性的标签，保证加载顺序

**脚本是否并行执行**：

async属性，表示 后续文档的加载和执行 和 js脚本的加载和执行是并行进行的。
defer属性，表示 后续文档的加载 和 js脚本的加载 是并行进行的，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。































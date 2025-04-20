---
isTimeLine: true
title: 沙箱
date: 2021-11-21
tags:
- js基础
---
# MutationObserver

## MutationObserver

MutationObserver 是 HTML5 引入的一种用于监听 DOM 树变化的接口

> Mutation Observer 有以下特点：
>
> 1, 它等待所有脚本任务完成后，才会运行（即异步触发方式）。
> 
> 2, 它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。
> 
> 3, 它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。









## 应用场景

* 监听 DOM 树变化
* 监听属性变化
* 监听子节点变化

## 工作原理

MutationObserver 通过异步方式监测 DOM 变化，这意味着当 DOM 变化发生时，MutationObserver 不会立即执行回调函数，而是将这些变化存入一个队列中，并在本轮 JavaScript 执行完之后，才批量处理这些变化

## 示例

MutationObserver 是一个构造函数，通过 new 关键字创建一个实例，然后调用 observe 方法来监听 DOM 树变化。
observe 方法接收两个参数：

* target：要监听的 DOM 节点
* options：监听的选项，包括以下属性：
  * attributes：当元素的属性变化时触发回调（默认为 false）。
  * childList：当目标节点的子节点被添加或删除时触发回调（默认为 false）。
  * subtree：当设置为 true 时，监视目标节点及其所有后代节点的变化（默认为 false）。 
  * characterData：当节点的文本内容变化时触发回调（默认为 false）。
  * attributeOldValue：当属性变化时，记录变化前的属性值（默认为 false）。
  * characterDataOldValue：当文本节点变化时，记录变化前的文本内容（默认为 false ）。
  * attributeFilter：一个属性名称的数组，指定监听的属性变化（如果不设置，则监听所有属性）。


```js
// 创建一个 MutationObserver 实例，传入一个回调函数。
// 使用 observe 方法开始监听目标节点及其相关的变化。
// 当不再需要监听时，使用 disconnect 方法停止观察
const observer = new MutationObserver(callback);
observer.observe(targetNode, options);
```

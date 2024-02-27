---
sidebar:
title: complier
date: 2022-09-14
tags:
- vue2
---
# complier


## complier

用于解析模版，生成渲染模版的render，render的作用就是生成 vnode


分三个过程

* parse：接收temaplate原始模版，按照模版的节点和数据 -》生成 ast
* optimize：遍历每一个 ast 节点，标记静态节点，-》 为了页面更新时 通过 diff 算法减少vnode 的对比次数，提高性能
* generate：将 生成 的 ast 组装成render字符串，然后将render字符串通过new Function的方式转换成渲染函数。




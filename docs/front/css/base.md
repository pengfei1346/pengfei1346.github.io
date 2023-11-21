---
isTimeLine: true
title: 基础
date: 2021-11-21
sidebar: 
tags:
- css
---
# 基础


## link style @import及三者的区别

### 区别

**加载顺序的差别**

1. 当一个页面被加载的时候，link引用的CSS会同时被加载
2. 而@import引用的CSS会等到页面全部被下载完再被加载

有时候浏览用@import加载CSS的页面时，可能会出现闪烁的情况

**加载内容的区别**

1. @import只能导入样式文件
2. link不仅可以引入样式，还可以引入js文件
3. style标签，它是定义在当前页面的样式

### CSS3 硬件加速

CSS3 硬件加速又叫做 GPU 加速，是利用 GPU 进行渲染，减少 CPU 操作的一种优化方案，可以提升网页的性能

**开启GPU硬件加速的属性有：**

1. transform不为none
2. opacity
3. filter
4. will-change

**硬件加速的弊端**

GPU处理过多的内容会导致内存问题；
不在动画结束的时候关闭硬件加速，会出现字体模糊



### css方面如何减少回流、重绘

1. 可以使用GPU硬件加速
2. 动画可以使用绝对定位或fixed，让其脱离文档流，修改动画不造成主界面的影响
3. 使用 visibility 替换 display: none（前者只会引起重绘，后者则会引发回流）
4. 避免使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局


### 移动端实现1px

css3的transform scale进行缩放实现

### BFC - 块级格式化上下文

**BFC解决哪些问题**

1. 清除浮动，解决父元素高度塌陷
2. 外边距重叠

**创建BFC的4种方式**

1. float属性不为none
2. position为absolute或fixed
3. display为inline-block、table-cell、table-caption、flex、inline-flex
4. overflow不为visible

最常用是overflow为hidden，这种方式的副作用最小，其他三种方式的副作用较大















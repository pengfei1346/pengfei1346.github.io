---
isTimeLine: true
title: rem+vw布局
date: 2021-11-21
sidebar: 
tags:
- css
---
# rem+vw布局

## rem布局

> 等比缩放，rem作用于根元素字体大小
> 
> 需要加视口

缺点:

字体并不合适使用rem, 字体的大小和字体宽度，并不成线性关系，会出现随着屏幕的变大，字体变的越来越大，所以需要结合媒体查询来调整字体大小

html的font-size为75px 即 1rem=75px
```scss
html {font-size: 75px}
div {width: 1rem} //  = div {width: 75px}
```

js设置html的font-size
```js
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
```



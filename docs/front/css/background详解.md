---
isTimeLine: true
title: css-background
date: 2021-11-21
tags:
- css
---

# background


## 系列属性

背景系列属性，共包含9种属性，除了background-blend-mode属性以外，其他8种属性全都支持通过background属性进行简写。

* background-color：设置元素的背景颜色，默认值：transparent。
* background-image：设置元素的背景图像，默认值：none。
* background-size：设置元素背景图像的大小，默认值：auto。
* background-position：设置元素背景图像的位置，默认值：0% 0%。
* background-repeat：设置背景图像是否重复，以及如何重复，默认值：repeat。
* background-clip：设置元素背景的渲染区域，默认值：border-box。
* background-origin：设置元素背景的定位区域（背景区），默认值：border-box。
* background-attachment：设置元素的背景图像是否随页面滚动或固定，默认值：scroll。
* background-blend-mode（不支持简写）：设置元素背景层的混合模式，默认值：normal。

```css

/* 代码太长 可读性较差 */
/* 依次设置：bg-color bg-image bg-repeat bg-position/bg-size bg-origin bg-clip bg-attachment  */
 background: #ccc url(./image/img.png) no-repeat 0 0 / 100% 100% border-box border-box fixed;

/* 长度适中 可读性较好 */
/* 依次设置：bg-color bg-image bg-repeat bg-position bg-attachment */
background: #ccc url(./image/img.png) no-repeat 0 0 fixed;
background-size: 100% 100%;
background-origin: padding-box;
background-clip: border-box;
```



https://blog.csdn.net/weixin_45092437/article/details/129429472













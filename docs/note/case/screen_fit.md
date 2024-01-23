---
sidebar:
title: 可视化大屏适配方案
isTimeLine: true
date: 2024-01-14
tags:
---

# 可视化大屏适配方案


## 三大常用方式

* vw/vh方案

概述：按照设计稿的尺寸，将px按比例计算转为vw和vh

优点：可以动态计算图表的宽高，字体等，灵活性较高，当屏幕比例跟 ui 稿不一致时，不会出现两边留白情况

缺点：每个图表都需要单独做字体、间距、位移的适配，比较麻烦



* scale方案

概述：也是目前效果最好的一个方案

优点：代码量少，适配简单 、一次处理后不需要在各个图表中再去单独适配.

缺点：留白，有事件热区偏移

* rem + vw vh方案

概述：这名字一听就麻烦，具体方法为获得 rem 的基准值 ，动态的计算html根元素的font-size ，图表中通过 vw vh 动态计算字体、间距、位移等

优点：布局的自适应代码量少，适配简单

缺点：留白，有时图表需要单独适配字体


## 插件


### 大屏适配方案(v-scale-screen)

使用的 scale方案 封装。若大屏比例和设计稿比例不同会留白。

```text
// 安装
npm i v-scale-screen -D

// main.js中注册
import VScaleScreen from 'v-scale-screen';

Vue.component('v-scale-screen', {
  name: 'v-scale-screen',
  ...VScaleScreen
});

Vue.use(VScaleScreen, {
  designWidth: 750, // 设计稿宽度
  designHeight: 1334, // 设计稿高度
});

// 使用
<v-scale-screen :size="size" :boxStyle="{background:'null'}" >
  ...
</v-scale-screen>   
```

### 大屏适配方案(autofit.js)

....











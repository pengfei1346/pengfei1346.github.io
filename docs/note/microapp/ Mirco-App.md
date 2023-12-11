---
sidebar:
title: Micro App
step: 6
isTimeLine: true
date: 2022-09-14
---

# Micro App

## Micro App

Micro App 是京东出的一款基于 Web Component 原生组件进行渲染的微前端框架，不同于目前流行的开源框架，它从组件化的思维实现微前端，旨在降低上手难度、提升工作效率。

官方demo：Micro App
正式版本0.8版本， 1.0版本还是beta阶段，但是维护者在issue比较活跃

* 0.x版本 vite支持不是很好，使用的时候需要关闭沙箱
* 1.x版本 支持vite，需要采用iframe沙箱模式，这点和wujie的方案一样了，都是webComponent + iframe



## 京东 micro-app
micro-app是京东零售推出的一款微前端框架。该框架以类WebComponent的方式进行渲染，采用了组件化的思维来实现微前端，目的在于降低上手难度并提升开发效率。
### 原理
micro-app借鉴了WebComponent的思想，它通过CustomElement结合自定义的Shadow DOM，将微前端封装成一个类WebComponent组件，从而实现微前端的组件化渲染。
### 优点

简单易用：micro-app的使用方式类似于iframe，上手简单。
侵入性低：对原有代码的影响微乎其微。
功能丰富：micro-app提供了js沙箱、样式隔离、元素隔离、预加载、数据通信、静态资源补全等丰富的功能。隔离机制类似于qiankun，例如，样式隔离基于scoped css，js沙箱机制基于Proxy。
零依赖：micro-app不依赖于任何第三方库。

### 缺点

静态资源补全问题：静态资源补全是基于父应用的，而非子应用。这需要开发者自己手动解决。
接入成本：虽然接入成本相比qiankun有所降低，但路由依旧存在依赖。
路由状态保持问题：在多应用激活后，无法保持各子应用的路由状态，刷新后全部丢失。
隔离问题：css沙箱使用scoped css思想，但无法绝对隔离，例如可能存在样式名冲突。js沙箱在做全局变量查找缓存时，虽然性能有所优化，但仍存在隔离问题。
Vite运行支持：虽然支持vite运行，但必须使用plugin改造子应用，且js代码无法进行沙箱隔离。
浏览器兼容性：对于不支持webcomponent的浏览器，micro-app没有进行降级处理。












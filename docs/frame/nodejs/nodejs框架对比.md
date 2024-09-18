---
sidebar:
title: nodejs框架对比
---
# nodejs框架对比

## 框架

* express
* koa
* egg
* midway
* nest
* ...

## express

Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。

## koa

koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。


koa是一个拥有**洋葱模型**中间件的http处理库，一个请求，经过一系列的中间件，最后生成响应。Koa的大致实现原理：context上下文的保存和传递，中间件的管理和next方法的实现。




## Egg
阿里团队基于Koa 来做的。Egg 奉行『约定优于配置』，按照一套统一的约定进行应用开发。

对于开发者来说，Egg因为是国产，所以文档比较好理解，也比较齐全。但是Egg JS有一个问题。一个是依赖注入的问题，导致所有的代码文件是按照功能来归类的，比如所有的控制器代码都会放置在同一个目录下，所有的服务代码也全部放置在 service 目录下，在模块众多的情况下，开发时需要来回切换分散在不同目录下的文件，给开发带来了不便。另一个是对TS的支持天生残缺（egg-ts-helpers），各种第三方库的支持也不受控制。

为了解决这些问题，阿里新出了Midway框架。

## Midway

Midway 是Egg 的新一代版本。

midwayjs一个面向未来的云端一体 Node.js 框架。

Midway 是一个适用于构建 Serverless 服务，传统应用、微服务，小程序后端的 Node.js 框架。

Midway 对于依赖采用了自动扫描的机制，连手动注册依赖的一步都可以省去。

Midway 内部使用了自动扫描的机制，在应用初始化之前，会扫描所有的文件，包含装饰器的文件会 自动绑定 到容器。

同时使用TypeScript开发。但是也有人说midway是为了ts 而 ts。

## Nest
Nest.js 背后是国外的 Trilon 团队。Nest js 是基于Express开发的， Koa.js 是 Express.js 原班人马用新理念重新创作的框架，相信是有一定的先进性的，而 Express.js 因为产生历史早，而有更好的生态基础，周边的插件、中间件什么的可能更丰富。

Nest属于前端ts大趋势下深度使用注解特性并提供各种增强开发体验的框架，它提供了一套完整的解决方案，包含了认证、数据库、路由、http状态码、安全、配置、请求等开箱即用的技术。

内置并完全支持 TypeScript（但仍然允许开发人员使用纯 JavaScript 编写代码）。

Nest js 采用命令行工具生成相应的文件，比较provider, module, controller, filter等等，所以无需手动添加相应的文件。

Nest js 毕竟是国外的框架，他的生态会比Midway的生态更好，这也是我为什么选择Nest js的原因。


























---
isTimeLine: true
title: vite
date: 2023-11-21
tags:
- vite
---
# vite


## vite 特点

> 基于 esbuild 实现的极速开发体验

* 冷启动/冷服务 =》 开发状态不出包
* 热更新 =》 更新源文件视图的直接更新
* 按需更新，不刷新所有节点，只更新改动部分
* 预编译：npm 包这类基本不会变化的模块，使用 Esbuild 在 「预构建」 阶段先打包整理好，减少 http 请求数
* 按需编译：用户代码这一类频繁变动的模块，直到被使用时才会执行编译操作
* 客户端强缓存：请求过的模块会被以 http 头 max-age=31536000,immutable 设置为强缓存，如果模块发生变化则用附加的版本 query 使其失效
* 产物优化：相比于 Webpack ，Vite 直接锚定高版本浏览器，不需要在 build 产物中插入过多运行时与模板代码
* 内置更好的分包实现：不需要用户干预，默认启用一系列智能分包规则，尽可能减少模块的重复打包
* 更好的静态资源处理：Vite 尽量避免直接处理静态资源，而是选择遵循 ESM 方式提供服务，例如引入图片 import img from 'xxx.png' 语句，执行后 img 变量只是一个路径字符串。
* 原生支持ts

**vite 预设的开发环境**

* css 预处理器
* html 预处理器
* HMR 支持
* 异步加载
* 默认分包
* 默认 chunk hash 重命名

## 原理对比
1、webpack - 编译支撑开发

src => 打包生成bundle => 启动dev-server => 建立开发环境

HMR把改动的模块以及相关依赖全部编译


2、vite - 路由挟持 + 实时编译

> 前置知识：当浏览器识别 type="module" 引入js文件的时候，内部的 import 就会发起一个网络请求，尝试去获取这个文件。

**原理：** 通过拦截路由 / 和 .js 结尾的请求。然后通过 node 去加载对应的 .js 文件.

启动dev-server => 直接请求所需模块的路由，并直接实时编译（利用新一代浏览器支持esm的能力）

HMR只需要让浏览器重新请求该模块

=> 利用浏览器缓存机制（源码模块协商缓存、依赖模块强缓存)

### 具体请求类型
* 普通代码，完全按需加载
* 三方库： 通过 es-module-lexer 将文件解析成 ast，拿到 import 地址
  * 第三方库：在node_moudules中查找（vite 中通过在第三方库中添加前缀 /@modules/）
* .vue文件：通过 @vue/compiler-dom把html解析成render
* .css：通过 document.createElement('style') 注入


### 开发环境 vs 正式环境 => 运行时 vs 编译打包

dev：
1、依赖预构建 cjs/UMD => ESM 
=> 面试： vite如何提高预构建效率？
2、依赖缓存到node_modules/.vite
=> 如何更新缓存？ --force
3、vite监听三个文件 - package.json / locakfile / vite.config.js => 三者之一发生变化 => 重新预构建
4、通过路由直接访问esm模块，通过浏览器缓存解析依赖进行强缓存优化

prod：
1、依赖与rollup进行打包
2、整体同webpack


### 原理展现
1. ESM为静态定义，编译时加载 => 生成只读引用
2. 路由根据脚本进入，查找只读引用去模块内取值 => 运行时编译代码（结合浏览器缓存机制）
3. 单vue文件进一步拆分
4. 热更新 => 独立服务 websocket去推送热更新的提醒


## esbuild
Esbuild 是一个非常新的模块打包工具，它提供了与 Webpack、Rollup、Parcel 等工具「相似」的资源打包能力，却有着高的离谱的性能优势。


### esbuild为什么快?

1. 语言优势：使用的是 go 语言，性能上具有优势。JavaScript 是解释型语言，而 go 是编译型语言。在打包场景上，差距就比较明显了。JavaScript 运行时还在解释代码的时候，Esbuild 已经在解析用户代码；JavaScript 运行时解释完代码刚准备启动的时候，Esbuild 可能已经打包完毕，退出进程了！
2. 多线程优势：Go 天生能多线程运行，而 JavaScript 本身是单线程语言，在引入 webworker 后才能在浏览器、node 中实现多线程操作。而且 Go 语言多个线程间能共享相同的内存空间，但 js 每个线程都有自己独立的内存栈，通讯会比较麻烦。所以 go 有更高效的内存使用率，意味着更高的运行性能。
3. 不类似于 webpack，esbuild 仅支持部分功能集合。
```text
  支持 js、ts、jsx、css、json、文本、图片等资源
  * 增量更新
  * Sourcemap
  * 开发服务器支持
  * 代码压缩
  * Code split
  * Tree shaking
  * 插件支持、

  并且明确声明未来也不会支持下列功能

  * Elm, Svelte, Vue, Angular 等代码文件格式
  * Ts 类型检查
  * AST 相关操作 API
  * Hot Module Replace（HMR）
  * Module Federation
```
4. 抛弃了一些功能外，它内部还定制了些功能

   * 重写 ts 转译工具，完全抛弃 ts 类型检查，只做代码转换
   * 大多数打包工具把词法分析、语法分析、符号声明等步骤拆解为多个高内聚低耦合的处理单元，各个模块职责分明，可读性、可维护性较高。而 Esbuild 则坚持性能第一原则，不惜采用反直觉的设计模式，将多个处理算法混合在一起降低编译过程数据流转所带来的性能损耗
   * 一致的数据结构，以及衍生出的高效缓存策略
   
   这种深度定制一方面降低了设计成本，能够保持编译链条的架构一致性；一方面能够贯彻性能第一的原则，确保每个环节以及环节之间交互性能的最优。虽然伴随着功能、可读性、可维护性层面的的牺牲，但在编译性能方面几乎做到了极致。

**总结：** 

esbuild 作为打包工具缺乏灵活性，并不能适用于各种复杂的应用场景，不能替代 webpack，不适合直接用在生产环境，但它从底层出发追求极致的性能这一点是很可取的，需要在它的基础上二次封装，兼顾工程化和性能，而 vite 正是巧妙的利用了这一点。



## 参考资料

[Vite的基本介绍以及优劣势（一文读懂vite）](https://blog.csdn.net/weixin_61029090/article/details/130679114)





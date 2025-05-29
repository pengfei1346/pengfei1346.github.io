import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"面经收集","description":"","frontmatter":{"sidebar":null,"group":null,"title":"面经收集","isTimeLine":true,"date":"2024-01-24T00:00:00.000Z"},"headers":[],"relativePath":"interview/questions/面经收集.md","filePath":"interview/questions/面经收集.md","lastUpdated":1714026863000}');
const _sfc_main = { name: "interview/questions/面经收集.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="面经收集" tabindex="-1">面经收集 <a class="header-anchor" href="#面经收集" aria-label="Permalink to &quot;面经收集&quot;">​</a></h1><ol><li>天学网</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 一面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">介绍一下你在上家公司的主要工作</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">介绍一个你之前过往工作中最满意的一个项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">你在这个项目中做的性能优化的事情有哪些？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">webworker中为什么能提升js执行的性能？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">你是怎么使用webworker的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">浏览器内存你在实战中处理过吗？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">浏览器的垃圾回收机制是什么样的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">你在做微前端的时候，为什么选择qiankun</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">qiankun的原理了解哪些</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">你在使用qiankun的时候，有没有发现这个框架的不足之处</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">使用ts的时候，有没有什么心得</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">ts注解用过没有？是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">webpack熟悉吗？webpack打包流程是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">你在公司制定前端规范的时候，都有哪些内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">场景题：答案评分，根据给定的答案和作答打分，如何设计？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 二面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">问了一下工作经历</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">说一个自己的满意的项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">业务场景：负责的项目，用户反馈体验不友好，该如何优化</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 一面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">介绍一下你在上家公司的主要工作</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">介绍一个你之前过往工作中最满意的一个项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">你在这个项目中做的性能优化的事情有哪些？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">webworker中为什么能提升js执行的性能？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">你是怎么使用webworker的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">浏览器内存你在实战中处理过吗？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">浏览器的垃圾回收机制是什么样的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">你在做微前端的时候，为什么选择qiankun</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">qiankun的原理了解哪些</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">你在使用qiankun的时候，有没有发现这个框架的不足之处</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">使用ts的时候，有没有什么心得</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">ts注解用过没有？是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">webpack熟悉吗？webpack打包流程是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">你在公司制定前端规范的时候，都有哪些内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">场景题：答案评分，根据给定的答案和作答打分，如何设计？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 二面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">问了一下工作经历</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">说一个自己的满意的项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">业务场景：负责的项目，用户反馈体验不友好，该如何优化</span></span></code></pre></div><ol start="2"><li>小黑盒</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">中位数</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">孩子发糖果</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">无重叠区间</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">中位数</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">孩子发糖果</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">无重叠区间</span></span></code></pre></div><ol start="3"><li>bitget</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">//一面问题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">小程序跟H5的区别是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">react和vue的语法是是如何在小程序中运行的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">uni-app是如何打包成各个平台能运行的代码的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">vue3中做了哪些优化？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">vue2和vue3的响应式有什么区别？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">vue中的watchEffect是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">nextjs中运行时机制什么样？你们自己封装的还是？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">interface和type的区别是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">vite、webpack、roolup的区别是什么？你怎么选择</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">promise有哪些方法？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">coding题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">手写Promise.all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 二面问题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">工作经历</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">为什么一直在教育行业</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">前端监控如何设计</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">讲一个你过往项目中遇到的问题，如何解决的</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">//一面问题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">小程序跟H5的区别是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">react和vue的语法是是如何在小程序中运行的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">uni-app是如何打包成各个平台能运行的代码的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">vue3中做了哪些优化？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">vue2和vue3的响应式有什么区别？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">vue中的watchEffect是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">nextjs中运行时机制什么样？你们自己封装的还是？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">interface和type的区别是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">vite、webpack、roolup的区别是什么？你怎么选择</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">promise有哪些方法？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">coding题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">手写Promise.all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 二面问题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">工作经历</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">为什么一直在教育行业</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">前端监控如何设计</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">讲一个你过往项目中遇到的问题，如何解决的</span></span></code></pre></div><p>燃数科技</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">低代码如何设计的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">react路由原理</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">react生命周期</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">什么是回调地狱，如何解决</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">jwt和session有什么区别</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">js文件相互引用有什么问题？如何解决</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">一个很大的json文件，前端读取如何优化</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">低代码如何设计的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">react路由原理</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">react生命周期</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">什么是回调地狱，如何解决</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">jwt和session有什么区别</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">js文件相互引用有什么问题？如何解决</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">一个很大的json文件，前端读取如何优化</span></span></code></pre></div><p>58同城</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">coding</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    三数之和</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    连续正整数之和</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">最新了解的一些前端新技术</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    vite为什么比webpack快</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    vite的预构建是如何做的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    tree-shaking是如何做的，commonjs能用吗</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">微前端了解过哪些框架，如何选型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">qiankun的js沙箱和css沙箱原理是啥</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">讲讲你做的低代码平台</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    你觉得这个低代码平台跟别的比有什么优势或者有什么亮点吗？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    实时预览功能是如何做的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    有没有版本回退功能？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">讲一个你做的比较拿手的项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    SDK</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    脚手架</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    难点是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    技术亮点是什么？</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">自我介绍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">coding</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    三数之和</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    连续正整数之和</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">最新了解的一些前端新技术</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    vite为什么比webpack快</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    vite的预构建是如何做的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    tree-shaking是如何做的，commonjs能用吗</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">微前端了解过哪些框架，如何选型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">qiankun的js沙箱和css沙箱原理是啥</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">讲讲你做的低代码平台</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    你觉得这个低代码平台跟别的比有什么优势或者有什么亮点吗？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    实时预览功能是如何做的？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    有没有版本回退功能？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">讲一个你做的比较拿手的项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    SDK</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    脚手架</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    难点是什么？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    技术亮点是什么？</span></span></code></pre></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">webassembly</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">websocket消息质量了解过吗，012段消息是什么</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">qiankun的css隔离和js隔离如何实现的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">proxySandbox和legacySandbox那个更好，为什么</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">legacySandbox会存在变量污染吗</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">legacysanbox是完全隔离吗，怎么实现完全隔离，在IE浏览器下怎么实现</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">树摇原理，编译阶段怎么确定代码是否引用，怎么确定要不要删除的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">怎么解决远程沟通效率低的问题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">怎么培养高潜，针对高能低愿的怎么管理</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">怎么建设梯度团队</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">简单描述下阿里低代码引擎的架构设计</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">低代码项目，怎么做到的低代码路由插件和业务路由适配</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">为什么用web worker</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">new String(&#39;123&#39;)和String(&#39;123&#39;)有什么区别，new String(&#39;123&#39;)==String(&#39;123&#39;)吗，typeof判断这两个是什么</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">webassembly</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">websocket消息质量了解过吗，012段消息是什么</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">qiankun的css隔离和js隔离如何实现的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">proxySandbox和legacySandbox那个更好，为什么</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">legacySandbox会存在变量污染吗</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">legacysanbox是完全隔离吗，怎么实现完全隔离，在IE浏览器下怎么实现</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">树摇原理，编译阶段怎么确定代码是否引用，怎么确定要不要删除的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">怎么解决远程沟通效率低的问题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">怎么培养高潜，针对高能低愿的怎么管理</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">怎么建设梯度团队</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">简单描述下阿里低代码引擎的架构设计</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">低代码项目，怎么做到的低代码路由插件和业务路由适配</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">为什么用web worker</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">new String(&#39;123&#39;)和String(&#39;123&#39;)有什么区别，new String(&#39;123&#39;)==String(&#39;123&#39;)吗，typeof判断这两个是什么</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/questions/面经收集.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

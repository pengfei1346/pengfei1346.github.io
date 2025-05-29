import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"vite","description":"","frontmatter":{"isTimeLine":true,"title":"vite","date":"2023-11-21T00:00:00.000Z","tags":["vite"]},"headers":[],"relativePath":"front/CICD/vite.md","filePath":"front/CICD/vite.md","lastUpdated":1713944232000}');
const _sfc_main = { name: "front/CICD/vite.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;vite&quot;">​</a></h1><h2 id="vite-特点" tabindex="-1">vite 特点 <a class="header-anchor" href="#vite-特点" aria-label="Permalink to &quot;vite 特点&quot;">​</a></h2><blockquote><p>基于 esbuild 实现的极速开发体验</p></blockquote><ul><li>冷启动/冷服务 =》 开发状态不出包</li><li>热更新 =》 更新源文件视图的直接更新</li><li>按需更新，不刷新所有节点，只更新改动部分</li><li>预编译：npm 包这类基本不会变化的模块，使用 Esbuild 在 「预构建」 阶段先打包整理好，减少 http 请求数</li><li>按需编译：用户代码这一类频繁变动的模块，直到被使用时才会执行编译操作</li><li>客户端强缓存：请求过的模块会被以 http 头 max-age=31536000,immutable 设置为强缓存，如果模块发生变化则用附加的版本 query 使其失效</li><li>产物优化：相比于 Webpack ，Vite 直接锚定高版本浏览器，不需要在 build 产物中插入过多运行时与模板代码</li><li>内置更好的分包实现：不需要用户干预，默认启用一系列智能分包规则，尽可能减少模块的重复打包</li><li>更好的静态资源处理：Vite 尽量避免直接处理静态资源，而是选择遵循 ESM 方式提供服务，例如引入图片 import img from &#39;xxx.png&#39; 语句，执行后 img 变量只是一个路径字符串。</li><li>原生支持ts</li></ul><p><strong>vite 预设的开发环境</strong></p><ul><li>css 预处理器</li><li>html 预处理器</li><li>HMR 支持</li><li>异步加载</li><li>默认分包</li><li>默认 chunk hash 重命名</li></ul><h2 id="原理对比" tabindex="-1">原理对比 <a class="header-anchor" href="#原理对比" aria-label="Permalink to &quot;原理对比&quot;">​</a></h2><p>1、webpack - 编译支撑开发</p><p>src =&gt; 打包生成bundle =&gt; 启动dev-server =&gt; 建立开发环境</p><p>HMR把改动的模块以及相关依赖全部编译</p><p>2、vite - 路由挟持 + 实时编译</p><blockquote><p>前置知识：当浏览器识别 type=&quot;module&quot; 引入js文件的时候，内部的 import 就会发起一个网络请求，尝试去获取这个文件。</p></blockquote><p><strong>原理：</strong> 通过拦截路由 / 和 .js 结尾的请求。然后通过 node 去加载对应的 .js 文件.</p><p>启动dev-server =&gt; 直接请求所需模块的路由，并直接实时编译（利用新一代浏览器支持esm的能力）</p><p>HMR只需要让浏览器重新请求该模块</p><p>=&gt; 利用浏览器缓存机制（源码模块协商缓存、依赖模块强缓存)</p><h3 id="具体请求类型" tabindex="-1">具体请求类型 <a class="header-anchor" href="#具体请求类型" aria-label="Permalink to &quot;具体请求类型&quot;">​</a></h3><ul><li>普通代码，完全按需加载</li><li>三方库： 通过 es-module-lexer 将文件解析成 ast，拿到 import 地址 <ul><li>第三方库：在node_moudules中查找（vite 中通过在第三方库中添加前缀 /@modules/）</li></ul></li><li>.vue文件：通过 @vue/compiler-dom把html解析成render</li><li>.css：通过 document.createElement(&#39;style&#39;) 注入</li></ul><h3 id="开发环境-vs-正式环境-运行时-vs-编译打包" tabindex="-1">开发环境 vs 正式环境 =&gt; 运行时 vs 编译打包 <a class="header-anchor" href="#开发环境-vs-正式环境-运行时-vs-编译打包" aria-label="Permalink to &quot;开发环境 vs 正式环境 =&gt; 运行时 vs 编译打包&quot;">​</a></h3><p>dev： 1、依赖预构建 cjs/UMD =&gt; ESM =&gt; 面试： vite如何提高预构建效率？ 2、依赖缓存到node_modules/.vite =&gt; 如何更新缓存？ --force 3、vite监听三个文件 - package.json / locakfile / vite.config.js =&gt; 三者之一发生变化 =&gt; 重新预构建 4、通过路由直接访问esm模块，通过浏览器缓存解析依赖进行强缓存优化</p><p>prod： 1、依赖与rollup进行打包 2、整体同webpack</p><h3 id="原理展现" tabindex="-1">原理展现 <a class="header-anchor" href="#原理展现" aria-label="Permalink to &quot;原理展现&quot;">​</a></h3><ol><li>ESM为静态定义，编译时加载 =&gt; 生成只读引用</li><li>路由根据脚本进入，查找只读引用去模块内取值 =&gt; 运行时编译代码（结合浏览器缓存机制）</li><li>单vue文件进一步拆分</li><li>热更新 =&gt; 独立服务 websocket去推送热更新的提醒</li></ol><h2 id="esbuild" tabindex="-1">esbuild <a class="header-anchor" href="#esbuild" aria-label="Permalink to &quot;esbuild&quot;">​</a></h2><p>Esbuild 是一个非常新的模块打包工具，它提供了与 Webpack、Rollup、Parcel 等工具「相似」的资源打包能力，却有着高的离谱的性能优势。</p><h3 id="esbuild为什么快" tabindex="-1">esbuild为什么快? <a class="header-anchor" href="#esbuild为什么快" aria-label="Permalink to &quot;esbuild为什么快?&quot;">​</a></h3><ol><li>语言优势：使用的是 go 语言，性能上具有优势。JavaScript 是解释型语言，而 go 是编译型语言。在打包场景上，差距就比较明显了。JavaScript 运行时还在解释代码的时候，Esbuild 已经在解析用户代码；JavaScript 运行时解释完代码刚准备启动的时候，Esbuild 可能已经打包完毕，退出进程了！</li><li>多线程优势：Go 天生能多线程运行，而 JavaScript 本身是单线程语言，在引入 webworker 后才能在浏览器、node 中实现多线程操作。而且 Go 语言多个线程间能共享相同的内存空间，但 js 每个线程都有自己独立的内存栈，通讯会比较麻烦。所以 go 有更高效的内存使用率，意味着更高的运行性能。</li><li>不类似于 webpack，esbuild 仅支持部分功能集合。</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  支持 js、ts、jsx、css、json、文本、图片等资源</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * 增量更新</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * Sourcemap</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * 开发服务器支持</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * 代码压缩</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * Code split</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * Tree shaking</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * 插件支持、</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  并且明确声明未来也不会支持下列功能</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * Elm, Svelte, Vue, Angular 等代码文件格式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * Ts 类型检查</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * AST 相关操作 API</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * Hot Module Replace（HMR）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  * Module Federation</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  支持 js、ts、jsx、css、json、文本、图片等资源</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * 增量更新</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * Sourcemap</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * 开发服务器支持</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * 代码压缩</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * Code split</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * Tree shaking</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * 插件支持、</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  并且明确声明未来也不会支持下列功能</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * Elm, Svelte, Vue, Angular 等代码文件格式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * Ts 类型检查</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * AST 相关操作 API</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * Hot Module Replace（HMR）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  * Module Federation</span></span></code></pre></div><ol start="4"><li><p>抛弃了一些功能外，它内部还定制了些功能</p><ul><li>重写 ts 转译工具，完全抛弃 ts 类型检查，只做代码转换</li><li>大多数打包工具把词法分析、语法分析、符号声明等步骤拆解为多个高内聚低耦合的处理单元，各个模块职责分明，可读性、可维护性较高。而 Esbuild 则坚持性能第一原则，不惜采用反直觉的设计模式，将多个处理算法混合在一起降低编译过程数据流转所带来的性能损耗</li><li>一致的数据结构，以及衍生出的高效缓存策略</li></ul><p>这种深度定制一方面降低了设计成本，能够保持编译链条的架构一致性；一方面能够贯彻性能第一的原则，确保每个环节以及环节之间交互性能的最优。虽然伴随着功能、可读性、可维护性层面的的牺牲，但在编译性能方面几乎做到了极致。</p></li></ol><p><strong>总结：</strong></p><p>esbuild 作为打包工具缺乏灵活性，并不能适用于各种复杂的应用场景，不能替代 webpack，不适合直接用在生产环境，但它从底层出发追求极致的性能这一点是很可取的，需要在它的基础上二次封装，兼顾工程化和性能，而 vite 正是巧妙的利用了这一点。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://blog.csdn.net/weixin_61029090/article/details/130679114" target="_blank" rel="noreferrer">Vite的基本介绍以及优劣势（一文读懂vite）</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/CICD/vite.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vite as default
};

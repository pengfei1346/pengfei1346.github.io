import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"作用域","description":"","frontmatter":{"isTimeLine":true,"title":"作用域","date":"2021-11-21T00:00:00.000Z","tags":["js基础"]},"headers":[],"relativePath":"front/javascript/作用域.md","filePath":"front/javascript/作用域.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/javascript/作用域.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h1><h2 id="什么是作用域" tabindex="-1">什么是作用域？ <a class="header-anchor" href="#什么是作用域" aria-label="Permalink to &quot;什么是作用域？&quot;">​</a></h2><blockquote><p>作用域最大的用处就是<strong>隔离变量</strong>，不同作用域下同名变量不会有冲突</p></blockquote><ul><li>作用域指程序源代码中定义变量的区域</li><li>规定了如何查找变量,确定当前执行代码对变量的访问权限</li><li>js使用词法作用域(静态作用域):<strong>函数的作用域在函数定义的时候就决定了</strong></li></ul><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> value </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">foo</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(value);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">bar</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> value </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">2</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">foo</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">bar</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">var</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> value </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">foo</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(value);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">bar</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">var</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> value </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">2</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">foo</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">bar</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">();</span></span></code></pre></div><h2 id="作用域类型" tabindex="-1">作用域类型 <a class="header-anchor" href="#作用域类型" aria-label="Permalink to &quot;作用域类型&quot;">​</a></h2><p>全局作用域、函数作用域、ES6中新增了块级作用域</p><p><strong>函数作用域</strong></p><p>是指声明在函数内部的变量，函数的作用域在函数定义的时候就决定了(静态作用域):</p><p><strong>块作用域</strong></p><ol><li>块作用域由{ }包括，if和for语句里面的{ }也属于块作用域</li><li>在块级作用域中，可通过let和const声明变量，该变量在指定块的作用域外无法被访问</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/javascript/作用域.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___ as default
};

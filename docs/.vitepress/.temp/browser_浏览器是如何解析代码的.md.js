import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img.41122e1f.png";
const __pageData = JSON.parse('{"title":"浏览器是如何解析代码的","description":"","frontmatter":{"sidebar":null,"group":null,"title":"浏览器是如何解析代码的","date":"2023-11-14T00:00:00.000Z","isTimeLine":true,"tags":["浏览器"]},"headers":[],"relativePath":"browser/浏览器是如何解析代码的.md","filePath":"browser/浏览器是如何解析代码的.md","lastUpdated":1708417368000}');
const _sfc_main = { name: "browser/浏览器是如何解析代码的.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器是如何解析代码的" tabindex="-1">浏览器是如何解析代码的 <a class="header-anchor" href="#浏览器是如何解析代码的" aria-label="Permalink to &quot;浏览器是如何解析代码的&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="img_6.png"></p><p><strong>解析HTML</strong></p><p>HTML是逐行解析的，浏览器的渲染引擎会将HTML文档解析并转换成DOM节点。</p><ul><li>将HTML解析成许多Tokens</li><li>将Tokens解析成object</li><li>将object组合成一个DOM树</li></ul><p><strong>解析CSS</strong></p><p>浏览器会从右往左解析CSS选择器</p><p>我们知道DOM树与CSSOM树合并成render树，实际上是将CSSOM附着到DOM树上，因此需要根据选择器提供的信息对DOM树进行遍历。</p><p>demo</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">.nav .title span {color:blue}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">​</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;div class=&#39;nav&#39;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &lt;div class=&#39;title&#39;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;span&gt;南玖&lt;/span&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &lt;div class=&quot;sub_title&quot;&gt;前端&lt;/header&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">从右至左的匹配：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">先找到所有的最右节点 span，对于每一个 span，向上寻找节点 div.title</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">由 h3再向上寻找 div.nav 的节点</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">最后找到根元素 html 则结束这个分支的遍历。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">.nav .title span {color:blue}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">​</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;div class=&#39;nav&#39;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &lt;div class=&#39;title&#39;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;span&gt;南玖&lt;/span&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &lt;div class=&quot;sub_title&quot;&gt;前端&lt;/header&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">从右至左的匹配：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">先找到所有的最右节点 span，对于每一个 span，向上寻找节点 div.title</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">由 h3再向上寻找 div.nav 的节点</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">最后找到根元素 html 则结束这个分支的遍历。</span></span></code></pre></div><p><strong>解析JS</strong></p><p>在浏览器中有一个js解析器的工具，专门用来解析我们的js代码。</p><p>当浏览器遇到js代码时，立马召唤“js解析器”出来工作。</p><p>解析器会找到js当中的所有变量、函数、参数等等，并且把变量赋值为未定义(undefined)。</p><p>把函数取出来成为一个函数块，然后存放到仓库当中。这件事情做完了之后才开始逐行解析代码（由上向下，由左向右），然后再去和仓库进行匹配。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/浏览器是如何解析代码的.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___________ as default
};

import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img_3.a5d1e358.png";
const _imports_1 = "/assets/img_4.f79a0b37.png";
const __pageData = JSON.parse('{"title":"路由基础-history","description":"","frontmatter":{"title":"路由基础-history","date":"2023-11-14T00:00:00.000Z","tags":["浏览器","todo"]},"headers":[],"relativePath":"browser/history.md","filePath":"browser/history.md","lastUpdated":1703746466000}');
const _sfc_main = { name: "browser/history.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="路由基础-history" tabindex="-1">路由基础-history <a class="header-anchor" href="#路由基础-history" aria-label="Permalink to &quot;路由基础-history&quot;">​</a></h1><h1 id="网页url组成部分" tabindex="-1">网页url组成部分 <a class="header-anchor" href="#网页url组成部分" aria-label="Permalink to &quot;网页url组成部分&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="img_3.png"></p><h1 id="history-新增-api" tabindex="-1">history 新增 api <a class="header-anchor" href="#history-新增-api" aria-label="Permalink to &quot;history 新增 api&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_1)} alt="img_4.png"></p><h2 id="history-详解" tabindex="-1">history 详解 <a class="header-anchor" href="#history-详解" aria-label="Permalink to &quot;history 详解&quot;">​</a></h2><p>todo</p><p><a href="https://blog.csdn.net/caseywei/article/details/122252366" target="_blank" rel="noreferrer">https://blog.csdn.net/caseywei/article/details/122252366</a></p><h2 id="与hash的区别" tabindex="-1">与hash的区别 <a class="header-anchor" href="#与hash的区别" aria-label="Permalink to &quot;与hash的区别&quot;">​</a></h2><p>我们用一个例子来演示， hash 与 history 在浏览器下刷新时的区别。具体如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 正常页面浏览</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">https://github.com/xxx 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">https://github.com/xxx/yyy 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">https://github.com/xxx/yyy/zzz 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">//改造H5 history模式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">https://github.com/xxx 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">https://github.com/xxx/yyy 前端跳转，不刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">https://github.com/xxx/yyy/zzz 前端跳转，不刷新页面</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 正常页面浏览</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">https://github.com/xxx 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">https://github.com/xxx/yyy 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">https://github.com/xxx/yyy/zzz 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">//改造H5 history模式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">https://github.com/xxx 刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">https://github.com/xxx/yyy 前端跳转，不刷新页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">https://github.com/xxx/yyy/zzz 前端跳转，不刷新页面</span></span></code></pre></div><h2 id="history的特点" tabindex="-1">history的特点 <a class="header-anchor" href="#history的特点" aria-label="Permalink to &quot;history的特点&quot;">​</a></h2><p>对于 history 来说，主要有以下特点：</p><ul><li>新的 url 可以是与当前 url 同源的任意 url ，也可以是与当前 url 一样的地址，但是这样会导致的一个问题是，会把重复的这一次操作记录到栈当中。</li><li>通过 history.state ，添加任意类型的数据到记录中。</li><li>可以额外设置 title 属性，以便后续使用。</li><li>通过 pushState 、 replaceState 来实现无刷新跳转的功能。</li></ul><h2 id="存在问题" tabindex="-1">存在问题 <a class="header-anchor" href="#存在问题" aria-label="Permalink to &quot;存在问题&quot;">​</a></h2><p>对于 history 来说，确实解决了不少 hash 存在的问题，但是也带来了新的问题。具体如下：</p><p>使用 history 模式时，在对当前的页面进行刷新时，此时浏览器会重新发起请求。如果 nginx 没有匹配得到当前的 url ，就会出现 404 的页面。 而对于 hash 模式来说， 它虽然看着是改变了 url ，但不会被包括在 http 请求中。所以，它算是被用来指导浏览器的动作，并不影响服务器端。因此，改变 hash 并没有真正地改变 url ，所以页面路径还是之前的路径， nginx 也就不会拦截。 因此，在使用 history 模式时，需要通过服务端来允许地址可访问，如果没有设置，就很容易导致出现 404 的局面。</p><h2 id="两者选择" tabindex="-1">两者选择 <a class="header-anchor" href="#两者选择" aria-label="Permalink to &quot;两者选择&quot;">​</a></h2><p>下面我们再来介绍下在实际的项目中，如何对这两者进行选择。具体如下：</p><ul><li>to B 的系统推荐用 hash ，相对简单且容易使用，且因为 hash 对 url 规范不敏感；</li><li>to C 的系统，可以考虑选择 H5 history ，但是需要服务端支持；</li><li>能先用简单的，就别用复杂的，要考虑成本和收益。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/history.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const history = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  history as default
};

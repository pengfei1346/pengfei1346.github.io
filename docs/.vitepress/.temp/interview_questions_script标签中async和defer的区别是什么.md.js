import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"script标签中async和defer的区别?","description":"","frontmatter":{"sidebar":null,"group":null,"title":"script标签中async和defer的区别?","isTimeLine":true,"date":"11-10-2023","tags":["算法","面试"]},"headers":[],"relativePath":"interview/questions/script标签中async和defer的区别是什么.md","filePath":"interview/questions/script标签中async和defer的区别是什么.md","lastUpdated":1708417368000}');
const _sfc_main = { name: "interview/questions/script标签中async和defer的区别是什么.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="script标签中async和defer的区别是什么" tabindex="-1">script标签中async和defer的区别是什么 <a class="header-anchor" href="#script标签中async和defer的区别是什么" aria-label="Permalink to &quot;script标签中async和defer的区别是什么&quot;">​</a></h1><h2 id="script标签中async和defer的区别" tabindex="-1">script标签中async和defer的区别 <a class="header-anchor" href="#script标签中async和defer的区别" aria-label="Permalink to &quot;script标签中async和defer的区别&quot;">​</a></h2><p>如果没有async和defer标签，浏览器会立即加载并执行相应的脚本。读取到就开始加载和执行，会阻塞后续文档的加载。</p><h3 id="相同点" tabindex="-1">相同点 <a class="header-anchor" href="#相同点" aria-label="Permalink to &quot;相同点&quot;">​</a></h3><p>async和defer属性都是 异步加载外部的js脚本文件，不会阻塞页面的解析。</p><h3 id="不同点" tabindex="-1">不同点 <a class="header-anchor" href="#不同点" aria-label="Permalink to &quot;不同点&quot;">​</a></h3><p><strong>执行顺序</strong>：</p><ul><li>Async是在外部JS加载完成后，浏览器空闲时，Load事件触发前执行</li><li>多个async属性的标签，不保证加载顺序，谁先加载完成谁先执行。</li><li>多个defer属性的标签，保证加载顺序</li></ul><p><strong>脚本是否并行执行</strong>：</p><ul><li>defer是在JS加载完成后，整个文档解析完成后，触发 DOMContentLoaded 事件前执行</li><li>async属性，表示 后续文档的加载和执行 和 js脚本的加载和执行是并行进行的。</li><li>defer属性，表示 后续文档的加载 和 js脚本的加载 是并行进行的，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/questions/script标签中async和defer的区别是什么.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const script___async_defer______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  script___async_defer______ as default
};

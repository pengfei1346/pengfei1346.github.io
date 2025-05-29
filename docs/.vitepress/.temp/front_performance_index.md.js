import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img.07ef9d0a.png";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"}},"headers":[],"relativePath":"front/performance/index.md","filePath":"front/performance/index.md","lastUpdated":1708996912000}');
const _sfc_main = { name: "front/performance/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>此部分记载学习与业务开发中所遇问题及解法和了解到的一些语言特性</p><p><a href="https://juejin.cn/post/7146973901166215176#heading-1" target="_blank" rel="noreferrer">https://juejin.cn/post/7146973901166215176#heading-1</a></p><p><a href="https://juejin.cn/post/7026536651899797541" target="_blank" rel="noreferrer">https://juejin.cn/post/7026536651899797541</a></p><p><img${ssrRenderAttr("src", _imports_0)} alt="img.png"></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./性能指标.html">性能指标</a></li><li><a href="./优化手段.html">优化手段</a></li><li><a href="./性能上报方式.html">性能上报方式</a></li></ul><h2 id="学习资料" tabindex="-1">学习资料 <a class="header-anchor" href="#学习资料" aria-label="Permalink to &quot;学习资料&quot;">​</a></h2><p><a href="https://juejin.cn/post/6952560222472765448" target="_blank" rel="noreferrer">从url输入到页面展现全过程-谈前端性能优化</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/performance/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

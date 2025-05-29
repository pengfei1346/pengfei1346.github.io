import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"}},"headers":[],"relativePath":"front/混合开发/index.md","filePath":"front/混合开发/index.md","lastUpdated":1701154753000}');
const _sfc_main = { name: "front/混合开发/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>此部分记载学习与业务开发中所遇问题及解法和了解到的一些语言特性</p><p><a href="https://juejin.cn/post/7146973901166215176#heading-1" target="_blank" rel="noreferrer">https://juejin.cn/post/7146973901166215176#heading-1</a></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./hybird混合开发.html">hybird混合开发</a></li><li><a href="./JSBridge.html">JSBridge</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/混合开发/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"front/css/index.md","filePath":"front/css/index.md","lastUpdated":1727069550000}');
const _sfc_main = { name: "front/css/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>css整理</p><h2 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;css&quot;">​</a></h2><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./BEM规范.html">BEM规范</a></li><li><a href="./base.html">基础</a></li><li><a href="./rem+vw布局.html">rem+vw 布局</a></li><li><a href="./粘性布局.html">sticky 粘性布局</a></li><li><a href="./动画.html">animation 动画</a></li><li><a href="./媒体查询.html">媒体查询常见设备断点</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/css/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

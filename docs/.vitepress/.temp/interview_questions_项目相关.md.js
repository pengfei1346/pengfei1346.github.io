import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"项目相关","description":"","frontmatter":{"sidebar":null,"group":null,"title":"项目相关","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"interview/questions/项目相关.md","filePath":"interview/questions/项目相关.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "interview/questions/项目相关.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目相关" tabindex="-1">项目相关 <a class="header-anchor" href="#项目相关" aria-label="Permalink to &quot;项目相关&quot;">​</a></h1><h2 id="组件库" tabindex="-1">组件库 <a class="header-anchor" href="#组件库" aria-label="Permalink to &quot;组件库&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/questions/项目相关.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

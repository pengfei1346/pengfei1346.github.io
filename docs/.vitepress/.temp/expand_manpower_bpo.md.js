import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"bpo","description":"","frontmatter":{"isTimeLine":true,"title":"bpo"},"headers":[],"relativePath":"expand/manpower/bpo.md","filePath":"expand/manpower/bpo.md","lastUpdated":1712127631000}');
const _sfc_main = { name: "expand/manpower/bpo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bpo" tabindex="-1">bpo <a class="header-anchor" href="#bpo" aria-label="Permalink to &quot;bpo&quot;">​</a></h1><h2 id="bpo-1" tabindex="-1">bpo <a class="header-anchor" href="#bpo-1" aria-label="Permalink to &quot;bpo&quot;">​</a></h2><p>企业将一些重复性的非核心或核心业务流程外包给供应商，以降低成本，同时提高服务质量</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("expand/manpower/bpo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bpo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bpo as default
};

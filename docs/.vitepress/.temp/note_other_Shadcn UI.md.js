import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Shadcn UI","description":"","frontmatter":{"sidebar":null,"title":"Shadcn UI","isTimeLine":true,"date":"2025-02-18T00:00:00.000Z"},"headers":[],"relativePath":"note/other/Shadcn UI.md","filePath":"note/other/Shadcn UI.md","lastUpdated":1739870990000}');
const _sfc_main = { name: "note/other/Shadcn UI.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="shadcn-ui" tabindex="-1">Shadcn UI <a class="header-anchor" href="#shadcn-ui" aria-label="Permalink to &quot;Shadcn UI&quot;">​</a></h1><h2 id="shadcn-ui-1" tabindex="-1">Shadcn UI <a class="header-anchor" href="#shadcn-ui-1" aria-label="Permalink to &quot;Shadcn UI&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/other/Shadcn UI.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Shadcn_UI = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Shadcn_UI as default
};

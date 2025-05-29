import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"H5踩坑记录","description":"","frontmatter":{"sidebar":null,"title":"H5踩坑记录"},"headers":[],"relativePath":"note/other/H5踩坑记录.md","filePath":"note/other/H5踩坑记录.md","lastUpdated":1726627788000}');
const _sfc_main = { name: "note/other/H5踩坑记录.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="h5踩坑记录" tabindex="-1">H5踩坑记录 <a class="header-anchor" href="#h5踩坑记录" aria-label="Permalink to &quot;H5踩坑记录&quot;">​</a></h1><p><a href="https://juejin.cn/post/7372396174249459750?utm_source=gold_browser_extension" target="_blank" rel="noreferrer">H5踩坑记录</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/other/H5踩坑记录.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const H5____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  H5____ as default
};

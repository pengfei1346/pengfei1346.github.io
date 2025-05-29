import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"记录一下项目中一些关键的点和一些细节实现","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"internet/index.md","filePath":"internet/index.md","lastUpdated":1701229258000}');
const _sfc_main = { name: "internet/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="记录一下项目中一些关键的点和一些细节实现" tabindex="-1">记录一下项目中一些关键的点和一些细节实现 <a class="header-anchor" href="#记录一下项目中一些关键的点和一些细节实现" aria-label="Permalink to &quot;记录一下项目中一些关键的点和一些细节实现&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./http.html">http</a></li><li><a href="./XSS攻击.html">XSS攻击</a></li><li><a href="./CSRF攻击.html">CSRF攻击</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("internet/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

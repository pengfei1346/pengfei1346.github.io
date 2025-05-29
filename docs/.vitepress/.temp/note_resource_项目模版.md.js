import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"项目模版","description":"","frontmatter":{"sidebar":null,"title":"项目模版","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/resource/项目模版.md","filePath":"note/resource/项目模版.md","lastUpdated":1715656447000}');
const _sfc_main = { name: "note/resource/项目模版.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目模版" tabindex="-1">项目模版 <a class="header-anchor" href="#项目模版" aria-label="Permalink to &quot;项目模版&quot;">​</a></h1><h2 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h2><h3 id="后台管理-element-plus" tabindex="-1">后台管理 - element plus <a class="header-anchor" href="#后台管理-element-plus" aria-label="Permalink to &quot;后台管理 - element plus&quot;">​</a></h3><ul><li>pure-admin：<a href="https://pure-admin.github.io/" target="_blank" rel="noreferrer">https://pure-admin.github.io/</a></li><li>element-plus-admin：<a href="https://element-plus-admin.cn/" target="_blank" rel="noreferrer">https://element-plus-admin.cn/</a></li><li>vue3-antdv-admin：<a href="https://github.com/buqiyuan/vue3-antdv-admin" target="_blank" rel="noreferrer">https://github.com/buqiyuan/vue3-antdv-admin</a></li><li>Geeker Admin：<a href="https://admin.spicyboy.cn" target="_blank" rel="noreferrer">https://admin.spicyboy.cn</a></li></ul><h3 id="后台管理-andtv" tabindex="-1">后台管理 - andtv <a class="header-anchor" href="#后台管理-andtv" aria-label="Permalink to &quot;后台管理 - andtv&quot;">​</a></h3><ul><li>vben Admin：<a href="https://vben.vvbin.cn/" target="_blank" rel="noreferrer">https://vben.vvbin.cn/</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/resource/项目模版.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

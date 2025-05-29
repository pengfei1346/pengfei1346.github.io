import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"formily 表单解决方案","description":"","frontmatter":{"sidebar":null,"title":"formily 表单解决方案","isTimeLine":true,"date":"2024-09-10T00:00:00.000Z","tags":null},"headers":[],"relativePath":"note/case/表单解决方案.md","filePath":"note/case/表单解决方案.md","lastUpdated":1726627788000}');
const _sfc_main = { name: "note/case/表单解决方案.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="formily-表单解决方案" tabindex="-1">formily 表单解决方案 <a class="header-anchor" href="#formily-表单解决方案" aria-label="Permalink to &quot;formily 表单解决方案&quot;">​</a></h1><h2 id="核心-formily-core" tabindex="-1">核心 @formily/core <a class="header-anchor" href="#核心-formily-core" aria-label="Permalink to &quot;核心 @formily/core&quot;">​</a></h2><blockquote><p>负责管理表单的状态，表单校验，联动等等</p></blockquote><h2 id="桥接库" tabindex="-1">桥接库 <a class="header-anchor" href="#桥接库" aria-label="Permalink to &quot;桥接库&quot;">​</a></h2><p>@formily/react @formily/vue</p><h2 id="组件库" tabindex="-1">组件库 <a class="header-anchor" href="#组件库" aria-label="Permalink to &quot;组件库&quot;">​</a></h2><p>@formily/ element antd ...</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/case/表单解决方案.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ______ as default
};

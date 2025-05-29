import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"链表","description":"","frontmatter":{"sidebar":null,"group":null,"title":"链表","isTimeLine":true,"date":"2023-10-1"},"headers":[],"relativePath":"interview/algorithm/链表.md","filePath":"interview/algorithm/链表.md","lastUpdated":1714963357000}');
const _sfc_main = { name: "interview/algorithm/链表.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h2><p><a href="https://juejin.cn/post/6844903946222321671" target="_blank" rel="noreferrer">面试官: 既然已经有数组了,为什么还要链表</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/链表.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};

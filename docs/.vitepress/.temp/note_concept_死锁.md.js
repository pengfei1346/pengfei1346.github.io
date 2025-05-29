import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"死锁","description":"","frontmatter":{"sidebar":null,"group":null,"title":"死锁","isTimeLine":true,"date":"11-10-2023","tags":["todo"],"categories":null},"headers":[],"relativePath":"note/concept/死锁.md","filePath":"note/concept/死锁.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "note/concept/死锁.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="死锁" tabindex="-1">死锁 <a class="header-anchor" href="#死锁" aria-label="Permalink to &quot;死锁&quot;">​</a></h1><h2 id="什么是死锁" tabindex="-1">什么是死锁？ <a class="header-anchor" href="#什么是死锁" aria-label="Permalink to &quot;什么是死锁？&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/concept/死锁.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};

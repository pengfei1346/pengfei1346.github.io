import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"假死","description":"","frontmatter":{"sidebar":null,"group":null,"title":"假死","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"note/concept/假死.md","filePath":"note/concept/假死.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "note/concept/假死.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="假死" tabindex="-1">假死 <a class="header-anchor" href="#假死" aria-label="Permalink to &quot;假死&quot;">​</a></h1><h2 id="什么是假死" tabindex="-1">什么是假死？ <a class="header-anchor" href="#什么是假死" aria-label="Permalink to &quot;什么是假死？&quot;">​</a></h2><p>浏览器有GUI渲染线程与JS引擎线程，这两个线程是互斥的关系</p><p>当js有大量计算时，会造成 UI 阻塞，出现界面卡顿、掉帧等情况，严重时会出现页面卡死的情况，俗称假死</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/concept/假死.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};

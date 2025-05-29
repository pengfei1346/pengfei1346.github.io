import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"作用域链","description":"","frontmatter":{"isTimeLine":true,"title":"作用域链","date":"2021-11-21T00:00:00.000Z","tags":["js基础"]},"headers":[],"relativePath":"front/javascript/作用域链.md","filePath":"front/javascript/作用域链.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/javascript/作用域链.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;作用域链&quot;">​</a></h1><h2 id="作用域链是什么" tabindex="-1">作用域链是什么？ <a class="header-anchor" href="#作用域链是什么" aria-label="Permalink to &quot;作用域链是什么？&quot;">​</a></h2><blockquote><p>当查找变量的时候，首先会先从当前上下文的变量对象（作用域）中查找，如果没有找到，就会从父级的执行上下文的变量对象中查找，如果还没有找到，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/javascript/作用域链.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

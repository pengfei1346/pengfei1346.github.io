import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"副作用&纯函数","description":"","frontmatter":{"isTimeLine":true,"title":"副作用&纯函数","date":"2021-11-21T00:00:00.000Z","tags":["js基础"]},"headers":[],"relativePath":"front/javascript/副作用&纯函数.md","filePath":"front/javascript/副作用&纯函数.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/javascript/副作用&纯函数.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="副作用-纯函数" tabindex="-1">副作用&amp;纯函数 <a class="header-anchor" href="#副作用-纯函数" aria-label="Permalink to &quot;副作用&amp;纯函数&quot;">​</a></h1><h2 id="什么是副作用-什么是纯函数" tabindex="-1">什么是副作用?什么是纯函数? <a class="header-anchor" href="#什么是副作用-什么是纯函数" aria-label="Permalink to &quot;什么是副作用?什么是纯函数?&quot;">​</a></h2><p><strong>副作用</strong></p><p>副作用指函数执行过程对函数外部可观察的状态产生的影响,如修改全局变量、修改参数、打印日志等都是副作用。</p><p><strong>纯函数</strong></p><p>纯函数可以避免外部状态被修改,更易于测试和理解。</p><p>纯函数是无副作用的函数,它具有以下特点:</p><ul><li>不修改函数外部状态</li><li>相同的输入总是得到相同的输出</li><li>不依赖外部状态、只依赖输入参数</li><li>没有可观察的副作用</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/javascript/副作用&纯函数.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _______ as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"微前端qiankun项目改造","description":"","frontmatter":{"sidebar":null,"title":"微前端qiankun项目改造","isTimeLine":true,"date":"2023-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/microapp/qiankun项目改造.md","filePath":"note/microapp/qiankun项目改造.md","lastUpdated":1703746466000}');
const _sfc_main = { name: "note/microapp/qiankun项目改造.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="微前端qiankun项目改造" tabindex="-1">微前端qiankun项目改造 <a class="header-anchor" href="#微前端qiankun项目改造" aria-label="Permalink to &quot;微前端qiankun项目改造&quot;">​</a></h1><h2 id="什么是微前端" tabindex="-1">什么是微前端 <a class="header-anchor" href="#什么是微前端" aria-label="Permalink to &quot;什么是微前端&quot;">​</a></h2><h2 id="微前端选型指南" tabindex="-1">微前端选型指南 <a class="header-anchor" href="#微前端选型指南" aria-label="Permalink to &quot;微前端选型指南&quot;">​</a></h2><h2 id="项目实现" tabindex="-1">项目实现 <a class="header-anchor" href="#项目实现" aria-label="Permalink to &quot;项目实现&quot;">​</a></h2><h3 id="存在的问题" tabindex="-1">存在的问题 <a class="header-anchor" href="#存在的问题" aria-label="Permalink to &quot;存在的问题&quot;">​</a></h3><p><strong>路由模式如何抉择</strong></p><p>最终选用了 主应用 history ，子应用history 模式</p><h3 id="主应用改造" tabindex="-1">主应用改造 <a class="header-anchor" href="#主应用改造" aria-label="Permalink to &quot;主应用改造&quot;">​</a></h3><h3 id="子应用应用改造" tabindex="-1">子应用应用改造 <a class="header-anchor" href="#子应用应用改造" aria-label="Permalink to &quot;子应用应用改造&quot;">​</a></h3></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/microapp/qiankun项目改造.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qiankun____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qiankun____ as default
};

import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img_4.f9bd82d0.png";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"note/microapp/index.md","filePath":"note/microapp/index.md","lastUpdated":1703746466000}');
const _sfc_main = { name: "note/microapp/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./qiankun.html">微前端qiankun项目改造</a></li></ul><h2 id="微前端能解决什么问题" tabindex="-1">微前端能解决什么问题？ <a class="header-anchor" href="#微前端能解决什么问题" aria-label="Permalink to &quot;微前端能解决什么问题？&quot;">​</a></h2><p>单体应用规模扩大后难以维护和升级的问题，同时避免了微服务可能带来的复杂性</p><p><strong>常见微前端框架的对比</strong></p><p><img${ssrRenderAttr("src", _imports_0)} alt="img_4.png"></p><h2 id="需要解决的问题" tabindex="-1">需要解决的问题 <a class="header-anchor" href="#需要解决的问题" aria-label="Permalink to &quot;需要解决的问题&quot;">​</a></h2><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><p>首屏加载速度</p><p>微应用切换性能</p><p>全局状态管理</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/microapp/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

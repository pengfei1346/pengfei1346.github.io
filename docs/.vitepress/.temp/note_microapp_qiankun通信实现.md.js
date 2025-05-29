import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"qiankun通信实现","description":"","frontmatter":{"sidebar":null,"title":"qiankun通信实现","isTimeLine":true,"date":"2022-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/microapp/qiankun通信实现.md","filePath":"note/microapp/qiankun通信实现.md","lastUpdated":1703746466000}');
const _sfc_main = { name: "note/microapp/qiankun通信实现.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qiankun通信实现" tabindex="-1">qiankun通信实现 <a class="header-anchor" href="#qiankun通信实现" aria-label="Permalink to &quot;qiankun通信实现&quot;">​</a></h1><h2 id="qiankun通信实现-1" tabindex="-1">qiankun通信实现 <a class="header-anchor" href="#qiankun通信实现-1" aria-label="Permalink to &quot;qiankun通信实现&quot;">​</a></h2><p>两种方式</p><ul><li>qiankun 官方提供的通信方式 ---- Actions 通信，适合业务划分清晰，比较简单的微前端应用，一般来说使用第一种方案就可以满足大部分的应用场景需求。</li><li>基于 redux 实现的通信方式 ---- Shared 通信，适合需要跟踪通信状态，子应用具备独立运行能力，较为复杂的微前端应用。</li><li>基于 发布订阅模式 实现的通信方式 ----</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/microapp/qiankun通信实现.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qiankun____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qiankun____ as default
};

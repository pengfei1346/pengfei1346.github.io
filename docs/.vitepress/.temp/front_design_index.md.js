import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"front/design/index.md","filePath":"front/design/index.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/design/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./单例模式.html">单例模式</a></li><li><a href="./策略模式.html">策略模式</a></li><li><a href="./代理模式.html">代理模式</a></li><li><a href="./装饰者模式.html">装饰者模式</a></li><li><a href="./组合模式.html">组合模式</a></li><li><a href="./工厂模式.html">工厂模式</a></li><li><a href="./访问者模式.html">访问者模式</a></li><li><a href="./发布订阅模式.html">发布订阅模式</a></li><li><a href="./观察者模式.html">观察者模式</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/design/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

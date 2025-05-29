import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"front/coding/index.md","filePath":"front/coding/index.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/coding/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>整理面试所遇到的相关算法题</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./async、await.html">async、await</a></li><li><a href="./斐波那契数列.html">call、apply、bind</a></li><li><a href="./instanceOf.html">instanceOf</a></li><li><a href="./new.html">new</a></li><li><a href="./深浅拷贝.html">深浅拷贝</a></li><li><a href="./防抖和节流.html">防抖和节流</a></li><li><a href="./斐波那契数列.html">斐波那契数列</a></li><li><a href="./发布订阅模式.html">发布订阅模式</a></li><li><a href="./reduce.html">reduce</a></li><li><a href="./compose.html">compose</a></li><li><a href="./柯里化.html">柯里化</a></li><li><a href="./数组扁平化.html">数组扁平化</a></li><li><a href="./map.html">map</a></li><li><a href="./some.html">some</a></li><li><a href="./数据类型判断.html">数据类型判断</a></li><li><a href="./es6模板字符串.html">es6模板字符串</a></li><li><a href="./render函数.html">render函数</a></li><li><a href="./dom2vnode.html">dom To vnode</a></li><li><a href="./图片懒加载.html">图片懒加载</a></li><li><a href="./最大并发数.html">最大并发数-todo</a></li><li><a href="./LazyMan.html">LazyMan</a></li><li><a href="./最大并发数.html">最大并发数</a></li><li><a href="./sleep函数.html">sleep函数</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/coding/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

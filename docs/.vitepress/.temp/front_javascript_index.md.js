import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"}},"headers":[],"relativePath":"front/javascript/index.md","filePath":"front/javascript/index.md","lastUpdated":1708503598000}');
const _sfc_main = { name: "front/javascript/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>此部分记载学习与业务开发中所遇问题及解法和了解到的一些语言特性</p><p><a href="https://juejin.cn/post/7146973901166215176#heading-1" target="_blank" rel="noreferrer">https://juejin.cn/post/7146973901166215176#heading-1</a></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./执行上下文和执行栈.html">执行上下文和执行栈</a></li><li><a href="./作用域.html">作用域</a></li><li><a href="./作用域链.html">作用域链</a></li><li><a href="./var、let、const的区别.html">var、let、const</a></li><li><a href="./this.html">this</a></li><li><a href="./call、apply、bind异同.html">call、apply、bind异同</a></li><li><a href="./闭包.html">闭包</a></li><li><a href="./箭头函数.html">箭头函数</a></li><li><a href="./原型和原型链.html">原型和原型链</a></li><li><a href="./new.html">new</a></li><li><a href="./继承.html">继承</a></li><li><a href="./promise.html">promise</a></li><li><a href="./深拷贝.html">深拷贝</a></li><li><a href="./eventloop.html">Event Loop</a></li><li><a href="./定时器.html">定时器</a></li><li><a href="./数据判断类型.html">数据判断类型</a></li><li><a href="./数据判断类型.html">数据判断类型</a></li><li><a href="./JS沙箱.html">JS沙箱</a></li><li><a href="./副作用&amp;纯函数.html">副作用&amp;纯函数</a></li></ul><p><a href="https://juejin.cn/post/7146973901166215176#heading-1" target="_blank" rel="noreferrer">参考</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/javascript/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

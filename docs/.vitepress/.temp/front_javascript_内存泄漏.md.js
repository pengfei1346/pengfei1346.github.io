import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"内存泄漏","description":"","frontmatter":{"title":"内存泄漏","date":"2023-11-21T00:00:00.000Z","tags":null},"headers":[],"relativePath":"front/javascript/内存泄漏.md","filePath":"front/javascript/内存泄漏.md","lastUpdated":1708417368000}');
const _sfc_main = { name: "front/javascript/内存泄漏.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="内存泄漏" tabindex="-1">内存泄漏 <a class="header-anchor" href="#内存泄漏" aria-label="Permalink to &quot;内存泄漏&quot;">​</a></h1><h2 id="什么是内存泄漏" tabindex="-1">什么是内存泄漏? <a class="header-anchor" href="#什么是内存泄漏" aria-label="Permalink to &quot;什么是内存泄漏?&quot;">​</a></h2><blockquote><p>内存泄漏 是应用程序过去使用，但不再需要的尚未返回到操作系统或可用内存池的内存片段。由于没有被释放而导致的，它将可能引起程序的卡顿和崩溃。</p></blockquote><h2 id="javascript-常见的四种内存泄漏" tabindex="-1">JavaScript 常见的四种内存泄漏 <a class="header-anchor" href="#javascript-常见的四种内存泄漏" aria-label="Permalink to &quot;JavaScript 常见的四种内存泄漏&quot;">​</a></h2><ul><li>1：全局变量</li><li>2：被忘记的定时器或者回调函数</li><li>3：闭包</li><li>4: DOM 的过度引用</li></ul><p>以 Vue 为例，通常有这些情况：</p><ul><li>监听在 window/body 等事件没有解绑</li><li>绑在 EventBus 的事件没有解绑</li><li>Vuex 的 $store，watch 了之后没有 unwatch</li><li>使用第三方库创建，没有调用正确的销毁函数</li></ul><p>解决办法：beforeDestroy 中及时销毁</p><ul><li>绑定了 DOM/BOM 对象中的事件 addEventListener ，removeEventListener。</li><li>观察者模式 $on，$off处理。</li><li>如果组件中使用了定时器，应销毁处理。</li><li>如果在 mounted/created 钩子中使用了第三方库初始化，对应的销毁。</li><li>使用弱引用 weakMap、weakSet。</li></ul><h2 id="浏览器中不同类型变量的内存都是何时释放的" tabindex="-1">浏览器中不同类型变量的内存都是何时释放的？ <a class="header-anchor" href="#浏览器中不同类型变量的内存都是何时释放的" aria-label="Permalink to &quot;浏览器中不同类型变量的内存都是何时释放的？&quot;">​</a></h2><ul><li>引用类型 <ul><li>在没有引用之后，通过 V8 自动回收。</li></ul></li><li>基本类型 <ul><li>如果处于闭包的情况下，要等闭包没有引用才会被 V8 回收。</li><li>非闭包的情况下，等待 V8 的新生代切换的时候回收。</li></ul></li></ul><p><a href="https://juejin.cn/post/6844903810825994253" target="_blank" rel="noreferrer">[译] JavaScript如何工作：垃圾回收机制 + 常见的4种内存泄漏</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/javascript/内存泄漏.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

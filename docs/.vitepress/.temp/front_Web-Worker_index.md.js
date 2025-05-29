import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Web Worker","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"front/Web-Worker/index.md","filePath":"front/Web-Worker/index.md","lastUpdated":1726810369000}');
const _sfc_main = { name: "front/Web-Worker/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="web-worker" tabindex="-1">Web Worker <a class="header-anchor" href="#web-worker" aria-label="Permalink to &quot;Web Worker&quot;">​</a></h1><h2 id="web-worker-1" tabindex="-1">Web Worker <a class="header-anchor" href="#web-worker-1" aria-label="Permalink to &quot;Web Worker&quot;">​</a></h2><p>Web Worker 有三种类型：</p><ul><li>Dedicated Worker（专用 Worker）：由主线程实例化且只能与它通信，不能访问别的环境。</li><li>Shared Worker（共享 Worker）：所有 Shared Worker 实例共享一个全局环境，多个页面可以用 Shared Worker 互相通信，可以处理多个连接。</li><li>Service worker（服务 Worker）：具有 Shared Worker 的特点、通过事件驱动，可以随时关闭再重启、不需要任何页面也能工作，只支持 https 和 localhost。多用于离线场景</li></ul><p>平常使用最多，最常见的就是 Dedicated Worker，并且 Dedicated Worker 兼容性较好</p><h3 id="让前端拥有后端的计算能力" tabindex="-1">让前端拥有后端的计算能力 <a class="header-anchor" href="#让前端拥有后端的计算能力" aria-label="Permalink to &quot;让前端拥有后端的计算能力&quot;">​</a></h3><p>在HTML5的新规范中，实现了 Web Worker 来引入 js 的 多线程 技术, 可以让我们在页面主运行的js线程中，加载运行另外单独的一个或者多个 js线程</p><p>Web Worker专门处理复杂计算的，从此让前端拥有后端的计算能力</p><h3 id="页面大量计算-造成假死" tabindex="-1">页面大量计算，造成假死 <a class="header-anchor" href="#页面大量计算-造成假死" aria-label="Permalink to &quot;页面大量计算，造成假死&quot;">​</a></h3><p>浏览器有GUI渲染线程与JS引擎线程，这两个线程是互斥的关系</p><p>当js有大量计算时，会造成 <strong>UI 阻塞</strong>，出现界面卡顿、掉帧等情况，严重时会出现页面卡死的情况，俗称<strong>假死</strong></p><h3 id="web-worker使用案例" tabindex="-1">Web Worker使用案例 <a class="header-anchor" href="#web-worker使用案例" aria-label="Permalink to &quot;Web Worker使用案例&quot;">​</a></h3><p>计算十万条数据，计算时长从35s变成6s，并且全程无卡顿</p><p><a href="https://juejin.cn/post/7137728629986820126#heading-3" target="_blank" rel="noreferrer">在Vue中 使用 Web Worker</a></p><h3 id="web-worker提高canvas运行速度" tabindex="-1">web worker提高Canvas运行速度 <a class="header-anchor" href="#web-worker提高canvas运行速度" aria-label="Permalink to &quot;web worker提高Canvas运行速度&quot;">​</a></h3><p>web worker除了单纯进行计算外，还可以结合离屏canvas进行绘图，提升绘图的渲染性能和使用体验</p><p><a href="https://juejin.cn/post/7137728629986820126#heading-8" target="_blank" rel="noreferrer">web worker 提高Canvas运行速度</a></p><h3 id="计算时长超过多久适合用web-worker" tabindex="-1">计算时长超过多久适合用Web Worker <a class="header-anchor" href="#计算时长超过多久适合用web-worker" aria-label="Permalink to &quot;计算时长超过多久适合用Web Worker&quot;">​</a></h3><p>原则：</p><p>运算时间超过50ms会造成页面卡顿，属于Long task，这种情况就可以考虑使用Web Worker<br> 但还要先考虑通信时长的问题，假如一个运算执行时长为100ms, 但是通信时长为300ms, 用了Web Worker可能会更慢</p><p><strong>最终标准：</strong><br> 计算的运算时长 - 通信时长 &gt; 50ms，推荐使用Web Worker</p><p><a href="https://juejin.cn/post/7137728629986820126" target="_blank" rel="noreferrer">如何让前端拥有后端的计算能力？一文彻底了解Web Worker</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/Web-Worker/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

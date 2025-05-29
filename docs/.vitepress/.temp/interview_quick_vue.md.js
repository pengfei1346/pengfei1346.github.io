import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"vue必知必考","description":"","frontmatter":{"sidebar":null,"group":null,"title":"vue必知必考","date":"2023-11-14T00:00:00.000Z"},"headers":[],"relativePath":"interview/quick/vue.md","filePath":"interview/quick/vue.md","lastUpdated":1703746466000}');
const _sfc_main = { name: "interview/quick/vue.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue必知必考" tabindex="-1">vue必知必考 <a class="header-anchor" href="#vue必知必考" aria-label="Permalink to &quot;vue必知必考&quot;">​</a></h1><h2 id="框架" tabindex="-1">框架 <a class="header-anchor" href="#框架" aria-label="Permalink to &quot;框架&quot;">​</a></h2><p>1-2年 使用上</p><p>3-5年 思想、方案、封装、亮点</p><p>5-7年 框架无关- 核心思想</p><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p><strong>data为什么建议是一个函数，而不是一个对象？</strong></p><ul><li>数据响应式</li><li>数据隔离</li><li>更好的ts支持</li><li>易于维护和拓展，</li></ul><p><strong>yarn 和 pnpm的区别？</strong></p><ul><li>幽灵依赖</li><li>节省磁盘空间</li></ul><p><strong>vue2和vue3最大的区别？</strong></p><ul><li>响应式的实现</li><li>hooks</li><li>diff算法优化</li><li>tree-shaking</li></ul><p>proxy 和 object.defineprorote 对比，优势在哪里？</p><ul><li>性能好</li><li>代理方式多</li><li></li></ul><p><strong>vue2重写了数组哪些方法？</strong></p><blockquote><p>Vue 2 的这些重写方法并不会改变原始数组，而是返回一个新的数组。这是因为 Vue 需要能够追踪到这些方法的调用和返回值，以便在数据发生变化时更新视图</p></blockquote><ul><li>push(): 这个方法用于向数组末尾添加一个或多个元素，并返回新的长度。在 Vue 2 中，push() 方法被重写以实现更好的响应性。</li><li>pop(): 这个方法用于删除并返回数组的最后一个元素。在 Vue 2 中，pop() 方法也被重写以实现更好的响应性。</li><li>shift(): 这个方法用于删除并返回数组的第一个元素。在 Vue 2 中，shift() 方法被重写以实现更好的响应性。</li><li>unshift(): 这个方法用于向数组的开头添加一个或多个元素，并返回新的长度。在 Vue 2 中，unshift() 方法被重写以实现更好的响应性。</li><li>splice(): 这个方法用于添加/删除数组中的元素。在 Vue 2 中，splice() 方法被重写以实现更好的响应性。</li><li>sort(): 这个方法用于对数组的元素进行排序。在 Vue 2 中，sort() 方法被重写以实现更好的响应性。</li><li>reverse(): 这个方法用于颠倒数组的顺序。在 Vue 2 中，reverse() 方法被重写以实现更好的响应性。</li></ul><p><strong>vue hooks 和 react hooks的区别？</strong></p><p><strong>this.data = res -- res有10000个key，我只用了其中的四五个key。如何优化？</strong></p><p><strong>vite打包为什么快？有没有遇到过 生产环境下和dev环境不一致的情况？</strong></p><p><strong>性能指标有哪些？首屏加载如何优化？sap单页面的白屏时间是否可靠？</strong></p><p><strong>nodejs做过哪些项目？介绍一下</strong></p><p><strong>什么是webpack？有没有开发过loader或者plugin？tapable是什么，ast是什么？</strong></p><p><strong>你的项目中 docker 有几个 镜像？</strong> -- 和构建速度相关</p><p><strong>jenkins自动化部署是你独立负责的吗？为什么要做这个？</strong></p><p><strong>数据冻结有哪些使用场景？</strong></p><p><strong>前端规范有哪些？你是如何制定的？</strong></p><p><strong>和同经验阶段的前端对比，你觉得你的优势在哪里？</strong></p><p><strong>为什么是你来当这个前端组长而不是别人？</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/quick/vue.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue as default
};

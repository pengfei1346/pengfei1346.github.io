import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img.76969848.png";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"frame/vue3/index.md","filePath":"frame/vue3/index.md","lastUpdated":1708996912000}');
const _sfc_main = { name: "frame/vue3/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>vue3笔记，只记录一些关键点或者自己觉得容易忘记的，基础知识不记录。</p><h2 id="常看常新的图" tabindex="-1">常看常新的图 <a class="header-anchor" href="#常看常新的图" aria-label="Permalink to &quot;常看常新的图&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="img.png"></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>响应式</p><ul><li><a href="./响应式基础.html">响应式基础</a></li><li><a href="./响应式核心.html">响应式核心</a></li></ul><p>组件</p><ul><li><a href="./hooks.html">hooks</a></li><li><a href="./自定义指令.html">自定义指令</a></li><li><a href="./plugin.html">插件 plugin</a></li></ul><p>逻辑复用</p><ul><li><a href="./模板引用.html">模板引用</a></li><li><a href="./异步组件.html">异步组件</a></li></ul><p>内置指令</p><ul><li>v-memo - v-memo=&quot;[valueA, valueB]&quot;，仅用于性能至上场景中的微小优化</li></ul><p>内置组件</p><ul><li><a href="./Transition.html">Transition - 应用动画</a></li><li><a href="./TransitionGroup.html">TransitionGroup - v-for 列表应用动画</a></li><li><a href="./KeepAlive.html">KeepAlive - 缓存组件实例</a></li><li><a href="./Teleport.html">Teleport - 操作模板在dom中位置</a></li><li><a href="./Suspense.html">Suspense - 组件树中协调对异步依赖的处理</a></li></ul><p>优化</p><ul><li>从 created 到 setup</li><li>从 mixin 到 hooks</li></ul><p>进阶</p><ul><li><a href="./complier.html">complier 原理</a></li><li><a href="./diff.html">虚拟dom和diff算法 - 快速diff-最长递增子序列</a></li><li><a href="./web-components.html">web components</a></li></ul><p>hooks收集</p><p><a href="https://juejin.cn/post/7308277343243141172?searchId=20240122143043CF59962A462004E9FB2F#heading-7" target="_blank" rel="noreferrer">https://juejin.cn/post/7308277343243141172?searchId=20240122143043CF59962A462004E9FB2F#heading-7</a></p><p>源码解析</p><p><a href="https://github.com/yixinagqingyuan/vue-next-analysis" target="_blank" rel="noreferrer">vue3源码逐行解析！-v3.2.26</a></p><p><a href="https://zhongmeizhi.github.io/fed-note/resource-analysis/vue3_reactive.html" target="_blank" rel="noreferrer">Mokou的小书房</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/vue3/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

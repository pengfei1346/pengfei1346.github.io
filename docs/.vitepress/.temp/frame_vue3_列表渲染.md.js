import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"列表渲染","description":"","frontmatter":{"sidebar":null,"title":"列表渲染","date":"2022-09-14T00:00:00.000Z","tags":["vue3"]},"headers":[],"relativePath":"frame/vue3/列表渲染.md","filePath":"frame/vue3/列表渲染.md","lastUpdated":1701066505000}');
const _sfc_main = { name: "frame/vue3/列表渲染.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="列表渲染" tabindex="-1">列表渲染 <a class="header-anchor" href="#列表渲染" aria-label="Permalink to &quot;列表渲染&quot;">​</a></h1><h2 id="经典问题-v-for和v-if优先级" tabindex="-1">经典问题 - v-for和v-if优先级 <a class="header-anchor" href="#经典问题-v-for和v-if优先级" aria-label="Permalink to &quot;经典问题 - v-for和v-if优先级&quot;">​</a></h2><p>vue2和vue3的表现是不一致的，原因在于diff算法的更新</p><h2 id="key的作用" tabindex="-1">key的作用 <a class="header-anchor" href="#key的作用" aria-label="Permalink to &quot;key的作用&quot;">​</a></h2><p>需要结合diff算法</p><p>“就地更新”策略 =》 当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。</p><h2 id="什么时候可以不指定key" tabindex="-1">什么时候可以不指定key <a class="header-anchor" href="#什么时候可以不指定key" aria-label="Permalink to &quot;什么时候可以不指定key&quot;">​</a></h2><blockquote><p>首先key一定是一个基本数据类型，不能使用对象</p></blockquote><ul><li>列表渲染迭代的内容不包括 <strong>组件</strong> 或 <strong>有状态的dom元素</strong></li><li>...</li></ul><h2 id="数组变化侦测" tabindex="-1">数组变化侦测 <a class="header-anchor" href="#数组变化侦测" aria-label="Permalink to &quot;数组变化侦测&quot;">​</a></h2><p>直接替换整个数组 不会丢失响应式 =》 vue内部做了处理</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/vue3/列表渲染.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"react和vue中hooks的区别","description":"","frontmatter":{"sidebar":null,"group":null,"title":"react和vue中hooks的区别","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"interview/questions/react和vue中hooks的区别.md","filePath":"interview/questions/react和vue中hooks的区别.md","lastUpdated":1712127631000}');
const _sfc_main = { name: "interview/questions/react和vue中hooks的区别.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="react和vue中hooks的区别" tabindex="-1">react和vue中hooks的区别 <a class="header-anchor" href="#react和vue中hooks的区别" aria-label="Permalink to &quot;react和vue中hooks的区别&quot;">​</a></h1><h2 id="vue-hook" tabindex="-1">vue hook <a class="header-anchor" href="#vue-hook" aria-label="Permalink to &quot;vue hook&quot;">​</a></h2><p>Vue hook 只会被注册调用一次，因为它是声明在 setup 里，一次组件实例化只调用一次 setup，Vue 之所以能避开这些问题，主要还是得益于数据响应式，不需要链表对 hooks 进行记录，而是直接对数据代理观察，但它也有困扰的地方，就是不得不返回一个包装对象，通过 .value 获取。</p><p>因为在 JS 里基础类型只有值，没有引用，或者说只存在栈里，使用完就回收了，无法追踪后续变化，自然做不到数据的代理和拦截</p><h2 id="react-hook" tabindex="-1">React hook <a class="header-anchor" href="#react-hook" aria-label="Permalink to &quot;React hook&quot;">​</a></h2><p>React hook 底层是基于链表实现的，每次组件被 render 的时候都会按顺序执行所有 hooks，而且正因为底层是链表，每个 hook 的 next 是指向下一个 hook 的，所以我们写代码是不能在不同的 hooks 调用里使用条件判断/函数嵌套之类的，因为这会导致执行顺序不对，从而出错</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/questions/react和vue中hooks的区别.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const react_vue_hooks___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  react_vue_hooks___ as default
};

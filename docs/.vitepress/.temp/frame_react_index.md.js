import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"frame/react/index.md","filePath":"frame/react/index.md","lastUpdated":1724206641000}');
const _sfc_main = { name: "frame/react/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>vue3笔记，只记录一些关键点或者自己觉得容易忘记的，基础知识不记录。</p><h2 id="常看常新的图" tabindex="-1">常看常新的图 <a class="header-anchor" href="#常看常新的图" aria-label="Permalink to &quot;常看常新的图&quot;">​</a></h2><p>进阶</p><ul><li><a href="./状态管理.html">状态管理</a></li><li><a href="./Middleware.html">中间件 Middleware </a></li><li><a href="./redux-saga.html">中间件 redux-saga</a></li><li><a href="./redux-thunk.html">中间件 redux-thunk </a></li></ul><p>todo</p><p>React中父组件如何调用子组件的方法？ -- useImperativeHandle详解 <a href="https://blog.csdn.net/aaqingying/article/details/122581477" target="_blank" rel="noreferrer">https://blog.csdn.net/aaqingying/article/details/122581477</a></p><p>React的类组件与函数式组件的不同，以及与React Hooks的对比 <a href="https://blog.csdn.net/aaqingying/article/details/116714444" target="_blank" rel="noreferrer">https://blog.csdn.net/aaqingying/article/details/116714444</a></p><p><a href="https://juejin.cn/post/6920790826280812551" target="_blank" rel="noreferrer">react dom diff算法</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/react/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

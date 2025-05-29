import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img.41b86c43.png";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"frame/vue2/index.md","filePath":"frame/vue2/index.md","lastUpdated":1708996912000}');
const _sfc_main = { name: "frame/vue2/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>vue3笔记，只记录一些关键点或者自己觉得容易忘记的，基础知识不记录。</p><h2 id="常看常新的图" tabindex="-1">常看常新的图 <a class="header-anchor" href="#常看常新的图" aria-label="Permalink to &quot;常看常新的图&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="img.png"></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>进阶</p><ul><li><a href="./diff.html">虚拟dom和diff算法 - 双端diff</a></li></ul><h2 id="源码解析" tabindex="-1">源码解析 <a class="header-anchor" href="#源码解析" aria-label="Permalink to &quot;源码解析&quot;">​</a></h2><p><a href="https://github.com/liutao/vue2.0-source?tab=readme-ov-file" target="_blank" rel="noreferrer">vue源码分析 -- 基于 2.2.6版本</a><a href="https://github.com/ygs-code/vue" target="_blank" rel="noreferrer">vue源码逐行注释分析+40多m的vue源码程序流程图思维导图</a><a href="https://github.com/answershuto/learnVue" target="_blank" rel="noreferrer">vue源码分析 -- 基于 2.3.0版本</a><a href="https://github.com/ustbhuangyi/vue-analysis" target="_blank" rel="noreferrer">vue源码分析</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/vue2/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

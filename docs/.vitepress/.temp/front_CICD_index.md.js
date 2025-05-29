import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img_4.8f8b9181.png";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"front/CICD/index.md","filePath":"front/CICD/index.md","lastUpdated":1724228782000}');
const _sfc_main = { name: "front/CICD/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>记录项目中一些工程化的实现和总结</p><p>工程化基石 - AST抽象语法树</p><p><a href="https://juejin.cn/post/7155151377013047304" target="_blank" rel="noreferrer">https://juejin.cn/post/7155151377013047304</a></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./vite.html">vite是个啥</a></li><li><a href="./../../note/standard/规范.html">前端规范问题</a></li><li><a href="./发布流程.html">发布流程</a></li><li><a href="./错误上报.html">错误上报</a></li><li><a href="./webpack.html">webpack详解</a></li><li><a href="./vite.config.js注释.html">vite.config.js注释</a></li></ul><p><a href="https://juejin.cn/post/7311596602249134106?utm_source=gold_browser_extension" target="_blank" rel="noreferrer">https://juejin.cn/post/7311596602249134106?utm_source=gold_browser_extension</a></p><p><img${ssrRenderAttr("src", _imports_0)} alt="img_4.png"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/CICD/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

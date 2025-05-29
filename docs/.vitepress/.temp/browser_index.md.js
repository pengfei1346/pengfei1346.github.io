import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img_5.ae2fe6a7.png";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"browser/index.md","filePath":"browser/index.md","lastUpdated":1706175334000}');
const _sfc_main = { name: "browser/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./回流和重绘.html">回流和重绘</a></li><li><a href="./url.html">详解输入url发生了什么</a></li><li><a href="./history.html">路由基础-history</a></li></ul><p><strong>浏览器内核分类</strong></p><p>渲染引擎和JS引擎（⚠️注意：我们常说的浏览器内核就是指渲染引擎）</p><p>由于JS引擎越来越独立，内核就指的只是渲染引擎了，渲染引擎主要用来请求网络页面资源解析排版后呈现给用户</p><p><img${ssrRenderAttr("src", _imports_0)} alt="img_5.png"></p><p><strong>浏览器的组成</strong></p><ul><li>用户界面：包括地址栏，前进/后退/刷新/书签🔖等按钮</li><li>浏览器引擎：在用户界面和呈现引擎之间传送指令</li><li>渲染引擎：用来绘制请求的内容</li><li>网络：用来完成网络调用，例如http请求，它具有平台无关的接口，可以在不同平台上工作</li><li>JavaScript解释器：用来解析执行JavaScript代码</li><li>用户界面后端：用于绘制基本的窗口小部件，比如组合框和窗口，底层使用操作系统的用户接口</li><li>数据存储：属于持久层，浏览器在硬盘中保存类似cookie的各种数据，HTML5定义了web database技术，这是一种轻量级完整的客户端存储技术</li></ul><blockquote><p>注意：与大多数浏览器不同的是，谷歌（Chrome）浏览器的每个标签页都分别对应一个呈现引擎实例。每个标签页都是一个独立的进程</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

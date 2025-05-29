import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"url-loader和file-loader的区别?","description":"","frontmatter":{"sidebar":null,"group":null,"title":null,"isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"interview/questions/url-loader和file-loader的区别.md","filePath":"interview/questions/url-loader和file-loader的区别.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "interview/questions/url-loader和file-loader的区别.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="url-loader和file-loader的区别" tabindex="-1">url-loader和file-loader的区别? <a class="header-anchor" href="#url-loader和file-loader的区别" aria-label="Permalink to &quot;url-loader和file-loader的区别?&quot;">​</a></h1><h2 id="url-loader和file-loader的区别-1" tabindex="-1">url-loader和file-loader的区别? <a class="header-anchor" href="#url-loader和file-loader的区别-1" aria-label="Permalink to &quot;url-loader和file-loader的区别?&quot;">​</a></h2><p>file-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。</p><p>url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。</p><p>url-loader 可以识别图片的大小，然后把图片转换成base64，从而减少代码的体积，如果图片超过设定的现在，就还是用 file-loader来处理</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/questions/url-loader和file-loader的区别.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const urlLoader_fileLoader___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  urlLoader_fileLoader___ as default
};

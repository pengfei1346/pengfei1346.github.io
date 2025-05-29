import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"http-请求头","description":"","frontmatter":{"sidebar":null,"group":null,"title":"http-请求头","isTimeLine":true,"date":"2023-11-28T00:00:00.000Z"},"headers":[],"relativePath":"internet/http-请求头.md","filePath":"internet/http-请求头.md","lastUpdated":1722234997000}');
const _sfc_main = { name: "internet/http-请求头.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http-请求头" tabindex="-1">http-请求头 <a class="header-anchor" href="#http-请求头" aria-label="Permalink to &quot;http-请求头&quot;">​</a></h1><h2 id="x-frame-options" tabindex="-1">X-Frame-Options <a class="header-anchor" href="#x-frame-options" aria-label="Permalink to &quot;X-Frame-Options&quot;">​</a></h2><p>X-Frame-Options有以下三种配置：</p><ul><li>DENY：完全禁止该页面被嵌入到任何框架中，无论嵌入页面的来源是什么。</li><li>SAMEORIGIN：允许同源的页面嵌入该页面。</li><li>ALLOW-FROM uri：允许指定的来源嵌入该页面。这个选项允许你指定一个 URI，只有来自该 URI 的页面可以嵌入当前页面。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("internet/http-请求头.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const http____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  http____ as default
};

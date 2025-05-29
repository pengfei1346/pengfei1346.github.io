import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"http缓存","description":"","frontmatter":{"isTimeLine":true,"title":"http缓存","date":"2021-11-21T00:00:00.000Z","tags":["http"]},"headers":[],"relativePath":"interview/questions/http缓存.md","filePath":"interview/questions/http缓存.md","lastUpdated":1700552836000}');
const _sfc_main = { name: "interview/questions/http缓存.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http缓存" tabindex="-1">http缓存 <a class="header-anchor" href="#http缓存" aria-label="Permalink to &quot;http缓存&quot;">​</a></h1><h2 id="http缓存-1" tabindex="-1">http缓存 <a class="header-anchor" href="#http缓存-1" aria-label="Permalink to &quot;http缓存&quot;">​</a></h2><h3 id="缓存类型" tabindex="-1">缓存类型 <a class="header-anchor" href="#缓存类型" aria-label="Permalink to &quot;缓存类型&quot;">​</a></h3><p><strong>强缓存</strong></p><ul><li>expires</li><li>cache-control</li></ul><p>字段解释</p><ul><li><p>Cache-Control<br> 缓存的最大有效期(max-age），是否可以被共享（public或private），是否可以被修改（no-cache或no-store）</p></li><li><p>Cache-Control<br> 指定缓存的绝对过期时间</p></li></ul><p><strong>协商缓存</strong></p><blockquote><p>协商缓存的状态码为304</p></blockquote><ul><li>Last-Modified/If-Modified-Since</li><li>ETag/If-None-Match</li></ul><p>字段解释</p><ul><li><p>Last-Modified / If-Modified-Since</p><p>Last-Modified ---- 服务器端返回的字段，它表示资源的最后修改时间。<br> If-Modified-Since ---- 客户端发送的字段，它表示资源的上次获取时间。</p></li><li><p>ETag/If-None-Match</p><p>ETag ---- 服务器端返回的字段，它表示资源的唯一标识符。<br> If-None-Match ---- 客户端发送的字段，它表示资源的期望标识符。</p></li></ul><p><strong>优先级</strong></p><ol><li>强缓存优先级 &gt; 协商缓存优先级</li><li>cache-control 优先级 &gt; expires 优先级。</li><li>ETag 优先级 &gt; Last-Modified 优先级</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/questions/http缓存.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const http__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  http__ as default
};

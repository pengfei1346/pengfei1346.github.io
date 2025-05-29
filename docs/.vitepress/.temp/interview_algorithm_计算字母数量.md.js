import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"计算字母数量","description":"","frontmatter":{"sidebar":null,"group":null,"title":"计算字母数量","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"interview/algorithm/计算字母数量.md","filePath":"interview/algorithm/计算字母数量.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "interview/algorithm/计算字母数量.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="计算字母数量" tabindex="-1">计算字母数量 <a class="header-anchor" href="#计算字母数量" aria-label="Permalink to &quot;计算字母数量&quot;">​</a></h1><h2 id="计算字母数量-1" tabindex="-1">计算字母数量? <a class="header-anchor" href="#计算字母数量-1" aria-label="Permalink to &quot;计算字母数量?&quot;">​</a></h2><p A:="" 16,="" B:="" 6,="" C:="" 2="">描述：输入一串字符串，根据字符串求出每个字母的数量并返回结果对象。（数字为1时可省略） 示例一：输入：A3B2，输出：{&quot;A&quot;: 3, &quot;B&quot;: 2} 示例二：输入：A(A(A2B)2)3C2，输出：</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/计算字母数量.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ______ as default
};

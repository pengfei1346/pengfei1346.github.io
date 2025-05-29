import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"老鼠试药","description":"","frontmatter":{"sidebar":null,"group":null,"title":"老鼠试药","isTimeLine":true,"date":"2023-10-1"},"headers":[],"relativePath":"interview/algorithm/老鼠试药.md","filePath":"interview/algorithm/老鼠试药.md","lastUpdated":1714963357000}');
const _sfc_main = { name: "interview/algorithm/老鼠试药.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="老鼠试药" tabindex="-1">老鼠试药 <a class="header-anchor" href="#老鼠试药" aria-label="Permalink to &quot;老鼠试药&quot;">​</a></h2><p>有十瓶药，中间有一瓶是毒药，老鼠喝了之后24小时就挂了，现在需要找出来这一瓶药。</p><p>1 0001</p><p>2 0010 3 0011</p><p>4 0100 5 0101 6 0110 7 0111</p><p>8 1000 9 1001 10 1010</p><p>四只老鼠，第一只和第一位都是1的，以此类推，哪只老鼠死了，哪只老鼠的位数变成1，其余是0。 比如 第一只挂了，那么结果就是 1000 -》 第八瓶是毒药。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/老鼠试药.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

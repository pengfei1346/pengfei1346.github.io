import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"虚拟dom和diff算法 - 快速diff-最长递增子序列","description":"","frontmatter":{"sidebar":null,"title":"虚拟dom和diff算法 - 快速diff-最长递增子序列","date":"2023-09-14T00:00:00.000Z","tags":["vue3","todo"]},"headers":[],"relativePath":"frame/vue3/diff.md","filePath":"frame/vue3/diff.md","lastUpdated":1701667680000}');
const _sfc_main = { name: "frame/vue3/diff.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="虚拟dom和diff算法-快速diff-最长递增子序列" tabindex="-1">虚拟dom和diff算法 - 快速diff-最长递增子序列 <a class="header-anchor" href="#虚拟dom和diff算法-快速diff-最长递增子序列" aria-label="Permalink to &quot;虚拟dom和diff算法 - 快速diff-最长递增子序列&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/vue3/diff.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const diff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  diff as default
};

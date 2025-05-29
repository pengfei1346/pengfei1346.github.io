import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"虚拟dom和diff算法 - 双端diff","description":"","frontmatter":{"sidebar":null,"title":"虚拟dom和diff算法 - 双端diff","date":"2022-09-14T00:00:00.000Z","tags":["vue2"]},"headers":[],"relativePath":"frame/vue2/diff.md","filePath":"frame/vue2/diff.md","lastUpdated":1701667680000}');
const _sfc_main = { name: "frame/vue2/diff.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="虚拟dom和diff算法-双端diff" tabindex="-1">虚拟dom和diff算法 - 双端diff <a class="header-anchor" href="#虚拟dom和diff算法-双端diff" aria-label="Permalink to &quot;虚拟dom和diff算法 - 双端diff&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/vue2/diff.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const diff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  diff as default
};

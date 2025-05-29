import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img_10.de21a974.png";
const _imports_1 = "/assets/img_11.fa6006ec.png";
const _imports_2 = "/assets/img_12.17bfa04e.png";
const _imports_3 = "/assets/img_13.ce0701f4.png";
const _imports_4 = "/assets/img_14.4327049f.png";
const __pageData = JSON.parse('{"title":"vite.config.js注释","description":"","frontmatter":{"sidebar":null,"title":"vite.config.js注释","isTimeLine":true,"date":"2024-03-14T00:00:00.000Z","tags":["工程化","CI/CD"],"categories":["工程化"]},"headers":[],"relativePath":"front/CICD/vite.config.js注释.md","filePath":"front/CICD/vite.config.js注释.md","lastUpdated":1745141427000}');
const _sfc_main = { name: "front/CICD/vite.config.js注释.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vite-config-js注释" tabindex="-1">vite.config.js注释 <a class="header-anchor" href="#vite-config-js注释" aria-label="Permalink to &quot;vite.config.js注释&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="img_10.png"><img${ssrRenderAttr("src", _imports_1)} alt="img_11.png"><img${ssrRenderAttr("src", _imports_2)} alt="img_12.png"><img${ssrRenderAttr("src", _imports_3)} alt="img_13.png"><img${ssrRenderAttr("src", _imports_4)} alt="img_14.png"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/CICD/vite.config.js注释.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vite_config_js__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vite_config_js__ as default
};

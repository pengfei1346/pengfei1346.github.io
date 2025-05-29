import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/前端发布平台流程图.ad6af489.webp";
const __pageData = JSON.parse('{"title":"发布流程","description":"","frontmatter":{"sidebar":null,"title":"发布流程","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z","tags":["工程化","CI/CD"],"categories":["工程化"]},"headers":[],"relativePath":"front/CICD/发布流程.md","filePath":"front/CICD/发布流程.md","lastUpdated":1700461005000}');
const _sfc_main = { name: "front/CICD/发布流程.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="发布流程图" tabindex="-1">发布流程图 <a class="header-anchor" href="#发布流程图" aria-label="Permalink to &quot;发布流程图&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="截图"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/CICD/发布流程.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/前端知识体系.20169410.png";
const __pageData = JSON.parse('{"title":"思维导图汇总","description":"","frontmatter":{"isTimeLine":true,"title":"思维导图汇总","date":"2021-11-21T00:00:00.000Z","tags":["思维导图"]},"headers":[],"relativePath":"mapping/all.md","filePath":"mapping/all.md","lastUpdated":1699607978000}');
const _sfc_main = { name: "mapping/all.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="一图流-后续会不断补充" tabindex="-1">一图流-后续会不断补充 <a class="header-anchor" href="#一图流-后续会不断补充" aria-label="Permalink to &quot;一图流-后续会不断补充&quot;">​</a></h1><blockquote><p>安利一个知犀思维导图，白嫖党福音<br> 下载过很多思维导图软件，有的限制节点数，有的限制文件数（心累），我觉得这个用起来还是比较顺手的。</p></blockquote><p><img${ssrRenderAttr("src", _imports_0)} alt="image"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("mapping/all.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const all = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  all as default
};

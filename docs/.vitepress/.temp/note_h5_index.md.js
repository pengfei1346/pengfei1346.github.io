import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"note/h5/index.md","filePath":"note/h5/index.md","lastUpdated":1701221906000}');
const _sfc_main = { name: "note/h5/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>h5 坑点盘点</p><p><a href="https://juejin.cn/post/6921886428158754829?searchId=202311281504567D709A03D7280556DF2B" target="_blank" rel="noreferrer">https://juejin.cn/post/6921886428158754829?searchId=202311281504567D709A03D7280556DF2B</a></p><p><a href="https://juejin.cn/post/6844903976257896455?searchId=202311281504567D709A03D7280556DF2B" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903976257896455?searchId=202311281504567D709A03D7280556DF2B</a></p><p><a href="https://juejin.cn/post/6844904024790007815?searchId=202311281504567D709A03D7280556DF2B" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904024790007815?searchId=202311281504567D709A03D7280556DF2B</a></p><p><a href="https://juejin.cn/post/6844904066301050893?searchId=202311281504567D709A03D7280556DF2B" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904066301050893?searchId=202311281504567D709A03D7280556DF2B</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/h5/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"dokcer私有仓库搭建","description":"","frontmatter":{"sidebar":null,"title":"dokcer私有仓库搭建"},"headers":[],"relativePath":"note/system/dokcer私有仓库搭建.md","filePath":"note/system/dokcer私有仓库搭建.md","lastUpdated":1713165761000}');
const _sfc_main = { name: "note/system/dokcer私有仓库搭建.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dokcer私有仓库搭建" tabindex="-1">dokcer私有仓库搭建 <a class="header-anchor" href="#dokcer私有仓库搭建" aria-label="Permalink to &quot;dokcer私有仓库搭建&quot;">​</a></h1><p><a href="https://blog.csdn.net/wlddhj/article/details/135412806" target="_blank" rel="noreferrer">https://blog.csdn.net/wlddhj/article/details/135412806</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/dokcer私有仓库搭建.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dokcer______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dokcer______ as default
};

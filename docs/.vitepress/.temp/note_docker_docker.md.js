import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"docker基础","description":"","frontmatter":{"sidebar":null,"title":"docker基础"},"headers":[],"relativePath":"note/docker/docker.md","filePath":"note/docker/docker.md","lastUpdated":1713944343000}');
const _sfc_main = { name: "note/docker/docker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="docker基础" tabindex="-1">docker基础 <a class="header-anchor" href="#docker基础" aria-label="Permalink to &quot;docker基础&quot;">​</a></h1><h2 id="docker基础-1" tabindex="-1">docker基础 <a class="header-anchor" href="#docker基础-1" aria-label="Permalink to &quot;docker基础&quot;">​</a></h2><p><a href="https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP" target="_blank" rel="noreferrer">https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/docker/docker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const docker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  docker as default
};

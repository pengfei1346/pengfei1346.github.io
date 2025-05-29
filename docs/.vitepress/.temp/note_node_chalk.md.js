import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"chalk","description":"","frontmatter":{"sidebar":null,"title":"chalk","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/node/chalk.md","filePath":"note/node/chalk.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "note/node/chalk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chalk" tabindex="-1">chalk <a class="header-anchor" href="#chalk" aria-label="Permalink to &quot;chalk&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>prompts 是一个 Node.js npm 包，用来实现命令行问答程序，通常被一些 CLI 程序使用，比如 create-vite 就是使用 prompts 让用户选择哪种模板创建程序的。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/node/chalk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chalk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chalk as default
};

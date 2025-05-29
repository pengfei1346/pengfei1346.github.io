import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"note/other/添加用户配置免登.md","filePath":"note/other/添加用户配置免登.md","lastUpdated":1703746466000}');
const _sfc_main = { name: "note/other/添加用户配置免登.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>#添加useraaa用户，切换用户，并进入到用户目录</p><p>useradd useraaa su useraaa cd /home/useraaa</p><p>#添加.ssh目录和authorized_keys文件 #特别注意！！！！！！！！！！！！ #下面步骤不能乱，先给权限在去写入authorized_keys文件，否则不会生效 #特别注意！！！！！！！！！！！！ mkdir .ssh chmod 700 .ssh cd .ssh touch authorized_keys chmod 700 authorized_keys #把公钥追加到authorized_keys文件里面去 cat 你的公钥 &gt;&gt; authorized_keys</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/other/添加用户配置免登.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ________ as default
};

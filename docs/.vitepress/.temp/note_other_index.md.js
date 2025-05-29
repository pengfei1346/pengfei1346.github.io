import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"note/other/index.md","filePath":"note/other/index.md","lastUpdated":1739870990000}');
const _sfc_main = { name: "note/other/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>#添加useraaa用户，切换用户，并进入到用户目录 useradd useraaa su useraaa cd /home/useraaa #添加.ssh目录和authorized_keys文件 #特别注意！！！！！！！！！！！！ #下面步骤不能乱，先给权限在去写入authorized_keys文件，否则不会生效 #特别注意！！！！！！！！！！！！ mkdir .ssh chmod 700 .ssh cd .ssh touch authorized_keys chmod 700 authorized_keys #把公钥追加到authorized_keys文件里面去 cat 你的公钥 &gt;&gt; authorized_keys</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./URLScheme.html">URLScheme</a></li><li><a href="./公众号H5调试.html">公众号H5调试</a></li><li><a href="./添加用户配置免登.html">linux添加用户配置免登</a></li><li><a href="./前沿技术盘点.html">前沿技术盘点</a></li><li><a href="./H5踩坑记录.html">H5踩坑记录</a></li><li>[Shadcn UI](./Shadcn UI.md)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/other/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

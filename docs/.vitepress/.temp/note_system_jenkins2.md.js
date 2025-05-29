import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"jenkins搭建（二）","description":"","frontmatter":{"sidebar":null,"title":"jenkins搭建（二）","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/system/jenkins2.md","filePath":"note/system/jenkins2.md","lastUpdated":1713165761000}');
const _sfc_main = { name: "note/system/jenkins2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jenkins搭建" tabindex="-1">jenkins搭建 <a class="header-anchor" href="#jenkins搭建" aria-label="Permalink to &quot;jenkins搭建&quot;">​</a></h1><p><a href="https://juejin.cn/post/6939812008082538504?from=search-suggest#heading-5" target="_blank" rel="noreferrer">https://juejin.cn/post/6939812008082538504?from=search-suggest#heading-5</a><a href="https://juejin.cn/post/6899002437614223368?from=search-suggest" target="_blank" rel="noreferrer">https://juejin.cn/post/6899002437614223368?from=search-suggest</a></p><p><a href="https://juejin.cn/post/6869736425953165319?from=search-suggest#heading-17" target="_blank" rel="noreferrer">https://juejin.cn/post/6869736425953165319?from=search-suggest#heading-17</a></p><p><a href="https://juejin.cn/post/6844903895823548430?from=search-suggest#heading-12" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903895823548430?from=search-suggest#heading-12</a></p><p><a href="https://blog.csdn.net/AI_Green/article/details/136152440" target="_blank" rel="noreferrer">https://blog.csdn.net/AI_Green/article/details/136152440</a></p><h2 id="jenkins的使用" tabindex="-1">jenkins的使用 <a class="header-anchor" href="#jenkins的使用" aria-label="Permalink to &quot;jenkins的使用&quot;">​</a></h2><p><a href="https://juejin.cn/post/6883769774564884488?searchId=20240415145902EA3ED9C3092D0F9385DB" target="_blank" rel="noreferrer">使用Jenkins构建CI/CD之多分支流水线指北</a><a href="https://zhuanlan.zhihu.com/p/635388635" target="_blank" rel="noreferrer">如何使用Jenkinsfile构建自动化流程</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/jenkins2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jenkins2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jenkins2 as default
};

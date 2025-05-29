import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true,"title":"简介"},"headers":[],"relativePath":"note/system/index.md","filePath":"note/system/index.md","lastUpdated":1714026863000}');
const _sfc_main = { name: "note/system/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./系统设计.html">设计复杂系统需要考虑什么</a></li><li><a href="./blog_github.html">博客搭建</a></li><li><a href="./npm.html">npm私有仓库</a></li><li><a href="./jenkins1.html">jenkins、docker搭建自动化部署一</a></li><li><a href="./jenkins2.html">jenkins、docker搭建自动化部署二</a></li><li><a href="./Jenkinsfile编写.html">pipeline基础-Jenkinsfile文件编写</a></li><li><a href="./前端docker部署.html">docker基础-前端docker部署</a></li><li><a href="./前端监控.html">前端监控系统设计</a></li><li><a href="./低代码平台搭建（一）.html">低代码平台搭建（一）</a></li><li>[stable diffusion部署](./stable diffusion部署.md)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

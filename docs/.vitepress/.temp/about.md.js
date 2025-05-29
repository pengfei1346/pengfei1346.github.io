import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"关于自己","description":"","frontmatter":{"title":"关于自己","date":"2021-12-11T00:00:00.000Z","tags":["其它"]},"headers":[],"relativePath":"about.md","filePath":"about.md","lastUpdated":1703746466000}');
const _sfc_main = { name: "about.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于" tabindex="-1">关于 <a class="header-anchor" href="#关于" aria-label="Permalink to &quot;关于&quot;">​</a></h1><p>巩固自己的基础知识，提升技术深度</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./2023.html">2023年终总结 与 未来计划</a></li></ul><h1 id="初衷" tabindex="-1">初衷 <a class="header-anchor" href="#初衷" aria-label="Permalink to &quot;初衷&quot;">​</a></h1><p>之前也有在学习，但是知识点比较零碎，而且看过后过一段时间就忘记了，所以想记录一下，方便以后查阅，也方便形成自己的知识体系。</p><h2 id="联系我" tabindex="-1">☎️联系我 <a class="header-anchor" href="#联系我" aria-label="Permalink to &quot;:phone:联系我&quot;">​</a></h2><p><strong>邮箱</strong>：17310728785@163.com</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  about as default
};

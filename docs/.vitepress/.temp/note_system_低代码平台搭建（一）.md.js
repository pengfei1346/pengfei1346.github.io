import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"低代码平台搭建（一）","description":"","frontmatter":{"sidebar":null,"group":null,"title":"低代码平台搭建（一）","date":"2023-12-10T00:00:00.000Z","sticky":1},"headers":[],"relativePath":"note/system/低代码平台搭建（一）.md","filePath":"note/system/低代码平台搭建（一）.md","lastUpdated":1713944232000}');
const _sfc_main = { name: "note/system/低代码平台搭建（一）.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="低代码平台搭建-一" tabindex="-1">低代码平台搭建（一） <a class="header-anchor" href="#低代码平台搭建-一" aria-label="Permalink to &quot;低代码平台搭建（一）&quot;">​</a></h1><p>意义： 降本增效</p><p>降低前端、运营的开发成本</p><p>运营- 前端变化： 针对组件交付，不针对业务交付</p><p>关键词： 数据驱动、所见即所得、</p><p>参考：有赞</p><p>架构能力：经验、技术、业务结合</p><p>分析：data数据流如何设计</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/低代码平台搭建（一）.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __________ as default
};

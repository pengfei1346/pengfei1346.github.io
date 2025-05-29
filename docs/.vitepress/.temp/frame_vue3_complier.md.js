import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"complier","description":"","frontmatter":{"sidebar":null,"title":"complier","date":"2022-09-14T00:00:00.000Z","tags":["vue2"]},"headers":[],"relativePath":"frame/vue3/complier.md","filePath":"frame/vue3/complier.md","lastUpdated":1708996912000}');
const _sfc_main = { name: "frame/vue3/complier.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="complier" tabindex="-1">complier <a class="header-anchor" href="#complier" aria-label="Permalink to &quot;complier&quot;">​</a></h1><h2 id="complier-1" tabindex="-1">complier <a class="header-anchor" href="#complier-1" aria-label="Permalink to &quot;complier&quot;">​</a></h2><p>用于解析模版，生成渲染模版的render，render的作用就是生成 vnode</p><p>分三个过程</p><ul><li>parse：接收temaplate原始模版，按照模版的节点和数据 -》生成 ast</li><li>optimize：遍历每一个 ast 节点，标记静态节点，-》 为了页面更新时 通过 diff 算法减少vnode 的对比次数，提高性能</li><li>generate：将 生成 的 ast 组装成render字符串，然后将render字符串通过new Function的方式转换成渲染函数。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/vue3/complier.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const complier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  complier as default
};

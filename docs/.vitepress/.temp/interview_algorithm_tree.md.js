import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/满二叉树.d60f2a4a.png";
const _imports_1 = "/assets/完全二叉树.e789649c.png";
const __pageData = JSON.parse('{"title":"树的遍历","description":"","frontmatter":{"sidebar":null,"group":null,"title":"树的遍历","isTimeLine":true,"date":"11-17-2023"},"headers":[],"relativePath":"interview/algorithm/tree.md","filePath":"interview/algorithm/tree.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "interview/algorithm/tree.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-label="Permalink to &quot;tree&quot;">​</a></h1><h2 id="树的类型" tabindex="-1">树的类型 <a class="header-anchor" href="#树的类型" aria-label="Permalink to &quot;树的类型&quot;">​</a></h2><ul><li>满⼆叉树</li></ul><blockquote><p>如果⼀棵⼆叉树只有度为0的结点和度为2的结点，并且度为0的结点在同⼀层上，则这棵⼆叉树为满⼆叉树。</p><p>深度为k，有2^k-1个节点的⼆叉树</p></blockquote><p><img${ssrRenderAttr("src", _imports_0)} alt="1"></p><ul><li>完全⼆叉树</li></ul><blockquote><p>在完全⼆叉树中，除了最底层节点可能没填满外，其余每层节点数 都达到最⼤值，并且最下⾯⼀层的节点都集中在该层最左边的若⼲位置。若最底层为第 h 层，则该层包含 1~ 2^h -1 个节点。</p></blockquote><p><img${ssrRenderAttr("src", _imports_1)} alt="1"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/tree.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tree as default
};

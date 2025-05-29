import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"获取随机数","description":"","frontmatter":{"sidebar":null,"group":null,"title":"获取随机数","isTimeLine":true,"date":"2023-11-10T00:00:00.000Z"},"headers":[],"relativePath":"interview/algorithm/获取随机数.md","filePath":"interview/algorithm/获取随机数.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "interview/algorithm/获取随机数.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="获取1到10之间的随机整数" tabindex="-1">获取1到10之间的随机整数 <a class="header-anchor" href="#获取1到10之间的随机整数" aria-label="Permalink to &quot;获取1到10之间的随机整数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> random </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> Math.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">floor</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(Math.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">random</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">() </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">*</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">10</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(random);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">var</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> random </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> Math.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">floor</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(Math.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">random</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">() </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">*</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">10</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">+</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(random);</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/获取随机数.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _____ as default
};

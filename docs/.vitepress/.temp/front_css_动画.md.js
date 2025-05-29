import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"animation 动画","description":"","frontmatter":{"isTimeLine":true,"title":"animation 动画","date":"2021-11-21T00:00:00.000Z","sidebar":null,"tags":["css"]},"headers":[],"relativePath":"front/css/动画.md","filePath":"front/css/动画.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/css/动画.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="animation-动画" tabindex="-1">animation 动画 <a class="header-anchor" href="#animation-动画" aria-label="Permalink to &quot;animation 动画&quot;">​</a></h1><h2 id="animation-动画-1" tabindex="-1">animation 动画 <a class="header-anchor" href="#animation-动画-1" aria-label="Permalink to &quot;animation 动画&quot;">​</a></h2><p>animation：动画名称 + 动画时间 + 速度曲线 + 是否延迟 + 动画次数 + 是否逆向播放</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">/*// linear 线性的  infinite 无穷的   alternate 逆向的*/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">animation: mymove 2s linear infinite alternate;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">/*// linear 线性的  infinite 无穷的   alternate 逆向的*/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">animation: mymove 2s linear infinite alternate;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/css/动画.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};

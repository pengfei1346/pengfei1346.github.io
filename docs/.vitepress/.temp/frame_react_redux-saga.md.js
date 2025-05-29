import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"redux-saga","description":"","frontmatter":{"sidebar":null,"title":"redux-saga","date":"2023-09-14T00:00:00.000Z","tags":["react","redux-saga"]},"headers":[],"relativePath":"frame/react/redux-saga.md","filePath":"frame/react/redux-saga.md","lastUpdated":1724206641000}');
const _sfc_main = { name: "frame/react/redux-saga.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="redux-saga" tabindex="-1">redux-saga <a class="header-anchor" href="#redux-saga" aria-label="Permalink to &quot;redux-saga&quot;">​</a></h1><p>todo: 不是很理解</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// yarn add redux-saga</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> { createStore, applyMiddleware } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;redux&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> createSagaMiddleware </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;redux-saga&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> reducer </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;./reducers&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> mySaga </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;./sagas&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 创建saga middleware</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">sagaMiddleware</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">createSagaMiddleware</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 通过applyMiddleware将redux-saga注册到store中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">store</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">createStore</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  reducer,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">applyMiddleware</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(sagaMiddleware)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 运行saga</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">sagaMiddleware.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">run</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(mySaga)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// yarn add redux-saga</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> { createStore, applyMiddleware } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;redux&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> createSagaMiddleware </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;redux-saga&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> reducer </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;./reducers&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> mySaga </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;./sagas&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 创建saga middleware</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">sagaMiddleware</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">createSagaMiddleware</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 通过applyMiddleware将redux-saga注册到store中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">store</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">createStore</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  reducer,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">applyMiddleware</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(sagaMiddleware)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 运行saga</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">sagaMiddleware.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">run</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(mySaga)</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/react/redux-saga.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reduxSaga = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reduxSaga as default
};

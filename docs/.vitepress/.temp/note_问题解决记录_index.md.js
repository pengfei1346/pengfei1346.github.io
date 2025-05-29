import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":true},"headers":[],"relativePath":"note/问题解决记录/index.md","filePath":"note/问题解决记录/index.md","lastUpdated":1708996912000}');
const _sfc_main = { name: "note/问题解决记录/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><h3 id="parsing-error-require-of-es-module-desktop-projects-mealstogo-node-modules-eslint-scope-lib-definition-js-from-desktop-projects-mealstogo-node-modules-babel-eslint-lib-require-from-eslint-js-not-supported-instead-change-the-require-of-definition-js-in-desktop-projects-mealstogo-node-modules-babel-eslint-lib-require-from-eslint-js-to-a-dynamic-import-which-is-available-in-all-commonjs-modules" tabindex="-1">Parsing error: require() of ES Module Desktop/Projects/MealsToGo/node_modules/eslint-scope/lib/definition.js from Desktop/Projects/MealsToGo/node_modules/babel-eslint/lib/require-from-eslint.js not supported. Instead change the require of definition.js in Desktop/Projects/MealsToGo/node_modules/babel-eslint/lib/require-from-eslint.js to a dynamic import() which is available in all CommonJS modules <a class="header-anchor" href="#parsing-error-require-of-es-module-desktop-projects-mealstogo-node-modules-eslint-scope-lib-definition-js-from-desktop-projects-mealstogo-node-modules-babel-eslint-lib-require-from-eslint-js-not-supported-instead-change-the-require-of-definition-js-in-desktop-projects-mealstogo-node-modules-babel-eslint-lib-require-from-eslint-js-to-a-dynamic-import-which-is-available-in-all-commonjs-modules" aria-label="Permalink to &quot;Parsing error: require() of ES Module Desktop/Projects/MealsToGo/node_modules/eslint-scope/lib/definition.js from Desktop/Projects/MealsToGo/node_modules/babel-eslint/lib/require-from-eslint.js not supported. Instead change the require of definition.js in Desktop/Projects/MealsToGo/node_modules/babel-eslint/lib/require-from-eslint.js to a dynamic import() which is available in all CommonJS modules&quot;">​</a></h3><p>自 2020 年 3 月起，该软件包babel-eslint已被弃用。该软件包已迁移到新的存储库，如果您想了解更多信息，我建议您查看Babel git。</p><p>在 .eslintrc 文件中只需更改：</p><p>&quot;parser&quot;: &#39;babel-eslint&#39;</p><p>&quot;parser&quot;: &#39;@babel/eslint-parser&#39;</p><h3 id="conflicting-order-following-module-has-been-added" tabindex="-1">Conflicting order. Following module has been added <a class="header-anchor" href="#conflicting-order-following-module-has-been-added" aria-label="Permalink to &quot;Conflicting order. Following module has been added&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// vue.config.js中增加：</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">module</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">.</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">exports</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">css: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    extract: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      ignoreOrder: </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// vue.config.js中增加：</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#005CC5" })}">module</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">.</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">exports</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">css: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    extract: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      ignoreOrder: </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span></code></pre></div><h2 id="微信公众号网页-电脑调试" tabindex="-1">微信公众号网页 电脑调试 <a class="header-anchor" href="#微信公众号网页-电脑调试" aria-label="Permalink to &quot;微信公众号网页 电脑调试&quot;">​</a></h2><p><a href="https://blog.csdn.net/weixin_39190897/article/details/116908050?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-8-116908050-blog-108444404.235%5Ev43%5Epc_blog_bottom_relevance_base9&amp;spm=1001.2101.3001.4242.5&amp;utm_relevant_index=11" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_39190897/article/details/116908050?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-8-116908050-blog-108444404.235^v43^pc_blog_bottom_relevance_base9&amp;spm=1001.2101.3001.4242.5&amp;utm_relevant_index=11</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/问题解决记录/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

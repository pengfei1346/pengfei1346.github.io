import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"可视化大屏适配方案","description":"","frontmatter":{"sidebar":null,"title":"可视化大屏适配方案","isTimeLine":true,"date":"2024-01-14T00:00:00.000Z","tags":null},"headers":[],"relativePath":"note/case/screen_fit.md","filePath":"note/case/screen_fit.md","lastUpdated":1705993081000}');
const _sfc_main = { name: "note/case/screen_fit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="可视化大屏适配方案" tabindex="-1">可视化大屏适配方案 <a class="header-anchor" href="#可视化大屏适配方案" aria-label="Permalink to &quot;可视化大屏适配方案&quot;">​</a></h1><h2 id="三大常用方式" tabindex="-1">三大常用方式 <a class="header-anchor" href="#三大常用方式" aria-label="Permalink to &quot;三大常用方式&quot;">​</a></h2><ul><li>vw/vh方案</li></ul><p>概述：按照设计稿的尺寸，将px按比例计算转为vw和vh</p><p>优点：可以动态计算图表的宽高，字体等，灵活性较高，当屏幕比例跟 ui 稿不一致时，不会出现两边留白情况</p><p>缺点：每个图表都需要单独做字体、间距、位移的适配，比较麻烦</p><ul><li>scale方案</li></ul><p>概述：也是目前效果最好的一个方案</p><p>优点：代码量少，适配简单 、一次处理后不需要在各个图表中再去单独适配.</p><p>缺点：留白，有事件热区偏移</p><ul><li>rem + vw vh方案</li></ul><p>概述：这名字一听就麻烦，具体方法为获得 rem 的基准值 ，动态的计算html根元素的font-size ，图表中通过 vw vh 动态计算字体、间距、位移等</p><p>优点：布局的自适应代码量少，适配简单</p><p>缺点：留白，有时图表需要单独适配字体</p><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><h3 id="大屏适配方案-v-scale-screen" tabindex="-1">大屏适配方案(v-scale-screen) <a class="header-anchor" href="#大屏适配方案-v-scale-screen" aria-label="Permalink to &quot;大屏适配方案(v-scale-screen)&quot;">​</a></h3><p>使用的 scale方案 封装。若大屏比例和设计稿比例不同会留白。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 安装</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm i v-scale-screen -D</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// main.js中注册</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">import VScaleScreen from &#39;v-scale-screen&#39;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">Vue.component(&#39;v-scale-screen&#39;, {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  name: &#39;v-scale-screen&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  ...VScaleScreen</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">});</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">Vue.use(VScaleScreen, {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  designWidth: 750, // 设计稿宽度</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  designHeight: 1334, // 设计稿高度</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">});</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 使用</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;v-scale-screen :size=&quot;size&quot; :boxStyle=&quot;{background:&#39;null&#39;}&quot; &gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/v-scale-screen&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 安装</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm i v-scale-screen -D</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// main.js中注册</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">import VScaleScreen from &#39;v-scale-screen&#39;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">Vue.component(&#39;v-scale-screen&#39;, {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  name: &#39;v-scale-screen&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  ...VScaleScreen</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">});</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">Vue.use(VScaleScreen, {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  designWidth: 750, // 设计稿宽度</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  designHeight: 1334, // 设计稿高度</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">});</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 使用</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;v-scale-screen :size=&quot;size&quot; :boxStyle=&quot;{background:&#39;null&#39;}&quot; &gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/v-scale-screen&gt;</span></span></code></pre></div><h3 id="大屏适配方案-autofit-js" tabindex="-1">大屏适配方案(autofit.js) <a class="header-anchor" href="#大屏适配方案-autofit-js" aria-label="Permalink to &quot;大屏适配方案(autofit.js)&quot;">​</a></h3><p>....</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/case/screen_fit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const screen_fit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  screen_fit as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"基础","description":"","frontmatter":{"isTimeLine":true,"title":"基础","date":"2021-11-21T00:00:00.000Z","sidebar":null,"tags":["css"]},"headers":[],"relativePath":"front/css/base.md","filePath":"front/css/base.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/css/base.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h1><h2 id="link-style-import及三者的区别" tabindex="-1">link style @import及三者的区别 <a class="header-anchor" href="#link-style-import及三者的区别" aria-label="Permalink to &quot;link style @import及三者的区别&quot;">​</a></h2><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h3><p><strong>加载顺序的差别</strong></p><ol><li>当一个页面被加载的时候，link引用的CSS会同时被加载</li><li>而@import引用的CSS会等到页面全部被下载完再被加载</li></ol><p>有时候浏览用@import加载CSS的页面时，可能会出现闪烁的情况</p><p><strong>加载内容的区别</strong></p><ol><li>@import只能导入样式文件</li><li>link不仅可以引入样式，还可以引入js文件</li><li>style标签，它是定义在当前页面的样式</li></ol><h3 id="css3-硬件加速" tabindex="-1">CSS3 硬件加速 <a class="header-anchor" href="#css3-硬件加速" aria-label="Permalink to &quot;CSS3 硬件加速&quot;">​</a></h3><p>CSS3 硬件加速又叫做 GPU 加速，是利用 GPU 进行渲染，减少 CPU 操作的一种优化方案，可以提升网页的性能</p><p><strong>开启GPU硬件加速的属性有：</strong></p><ol><li>transform不为none</li><li>opacity</li><li>filter</li><li>will-change</li></ol><p><strong>硬件加速的弊端</strong></p><p>GPU处理过多的内容会导致内存问题； 不在动画结束的时候关闭硬件加速，会出现字体模糊</p><h3 id="css方面如何减少回流、重绘" tabindex="-1">css方面如何减少回流、重绘 <a class="header-anchor" href="#css方面如何减少回流、重绘" aria-label="Permalink to &quot;css方面如何减少回流、重绘&quot;">​</a></h3><ol><li>可以使用GPU硬件加速</li><li>动画可以使用绝对定位或fixed，让其脱离文档流，修改动画不造成主界面的影响</li><li>使用 visibility 替换 display: none（前者只会引起重绘，后者则会引发回流）</li><li>避免使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局</li></ol><h3 id="移动端实现1px" tabindex="-1">移动端实现1px <a class="header-anchor" href="#移动端实现1px" aria-label="Permalink to &quot;移动端实现1px&quot;">​</a></h3><p>css3的transform scale进行缩放实现</p><h3 id="bfc-块级格式化上下文" tabindex="-1">BFC - 块级格式化上下文 <a class="header-anchor" href="#bfc-块级格式化上下文" aria-label="Permalink to &quot;BFC - 块级格式化上下文&quot;">​</a></h3><p><strong>BFC解决哪些问题</strong></p><ol><li>清除浮动，解决父元素高度塌陷</li><li>外边距重叠</li></ol><p><strong>创建BFC的4种方式</strong></p><ol><li>float属性不为none</li><li>position为absolute或fixed</li><li>display为inline-block、table-cell、table-caption、flex、inline-flex</li><li>overflow不为visible</li></ol><p>最常用是overflow为hidden，这种方式的副作用最小，其他三种方式的副作用较大</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/css/base.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  base as default
};

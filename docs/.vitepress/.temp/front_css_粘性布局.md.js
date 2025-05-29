import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/41a38eec0e156f33de4b543b2c06993c.9de0ffe3.png";
const __pageData = JSON.parse('{"title":"sticky 粘性布局","description":"","frontmatter":{"isTimeLine":true,"title":"sticky 粘性布局","date":"2021-11-21T00:00:00.000Z","sidebar":null,"tags":["css"]},"headers":[],"relativePath":"front/css/粘性布局.md","filePath":"front/css/粘性布局.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "front/css/粘性布局.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sticky-粘性布局" tabindex="-1">sticky 粘性布局 <a class="header-anchor" href="#sticky-粘性布局" aria-label="Permalink to &quot;sticky 粘性布局&quot;">​</a></h1><h2 id="sticky-粘性布局-1" tabindex="-1">sticky 粘性布局 <a class="header-anchor" href="#sticky-粘性布局-1" aria-label="Permalink to &quot;sticky 粘性布局&quot;">​</a></h2><p>应用：吸顶效果的实现</p><p>当元素在屏幕内，表现为relative，当就要滚出屏幕的时候，表现为fixed</p><p>随着页面的滚动，将元素固定在设置的位置（固定效果如同fixed），position:sticky可以看作是position:relative和position:fixed的结合体</p><p><strong>以下情况粘性布局会失效</strong></p><ol><li>父元素设置overflow：hidden</li><li>父元素高度不够或者高度为内部元素高度之和（总之没有剩余的高度，不会产生滚动）</li></ol><p>为便于理解粘性定位，这里引入四个元素：视口元素，容器元素，粘性约束元素 和 sticky 元素。它们的关系如下：</p><p><img${ssrRenderAttr("src", _imports_0)} alt="截图"></p><p>视口元素：显示内容的区域。会设置宽，高。一般会设置 overflow:hidden。 容器元素：离 sticky 元素最近的能滚动的祖先元素。 粘性约束元素：粘性定位的父元素。有时，也会出现粘性约束元素就是容器元素的情况。 sticky 元素：设置了 position: sticky; 的元素。</p><p>滚动时，sticky 元素设置的 left, right, top, bottom 的值相对的是容器元素。当粘性约束元素滚出视口时，sticky 元素也会滚出视口。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/css/粘性布局.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

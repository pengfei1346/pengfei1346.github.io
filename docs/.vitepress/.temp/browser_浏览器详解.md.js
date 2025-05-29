import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"browser/浏览器详解.md","filePath":"browser/浏览器详解.md","lastUpdated":1702259898000}');
const _sfc_main = { name: "browser/浏览器详解.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="渲染-布局-绘制-合成" tabindex="-1">渲染（布局，绘制，合成） <a class="header-anchor" href="#渲染-布局-绘制-合成" aria-label="Permalink to &quot;渲染（布局，绘制，合成）&quot;">​</a></h2><ul><li>计算CSS样式 ；</li><li>构建渲染树 ；</li><li>布局，主要定位坐标和大小，是否换行，各种position overflow z-index属性 ；</li><li>绘制，将图像绘制出来。</li></ul><p>这个过程比较复杂，涉及到两个概念: reflow(回流)和repain(重绘)。DOM节点中的各个元素都是以盒模型的形式存在，这些都需要浏览器去计算其位置和大小等，这个过程称为relow;当盒模型的位置,大小以及其他属性，如颜色,字体,等确定下来之后，浏览器便开始绘制内容，这个过程称为repain。页面在首次加载时必然会经历reflow和repain。reflow和repain过程是非常消耗性能的，尤其是在移动设备上，它会破坏用户体验，有时会造成页面卡顿。所以我们应该尽可能少的减少reflow和repain。 这里Reflow和Repaint的概念是有区别的：</p><ul><li>（1）Reflow：即回流。一般意味着元素的内容、结构、位置或尺寸发生了变化，需要重新计算样式和渲染树。</li><li>（2）Repaint：即重绘。意味着元素发生的改变只是影响了元素的一些外观之类的时候（例如，背景色，边框颜色，文字颜色等），此时只需要应用新样式绘制这个元素就可以了。</li></ul><p>回流的成本开销要高于重绘，而且一个节点的回流往往回导致子节点以及同级节点的回流， 所以优化方案中一般都包括，尽量避免回流。</p><p>「回流一定导致重绘，但重绘不一定会导致回流」 「合成（composite）」</p><p>最后一步合成( composite )，这一步骤浏览器会将各层信息发送给GPU，GPU将各层合成，显示在屏幕上</p><h2 id="普通图层和复合图层" tabindex="-1">普通图层和复合图层 <a class="header-anchor" href="#普通图层和复合图层" aria-label="Permalink to &quot;普通图层和复合图层&quot;">​</a></h2><p>可以简单的这样理解，浏览器渲染的图层一般包含两大类：普通图层以及复合图层 首先，普通文档流内可以理解为一个复合图层（这里称为默认复合层，里面不管添加多少元素，其实都是在同一个复合图层中） 其次，absolute布局（fixed也一样），虽然可以脱离普通文档流，但它仍然属于默认复合层。 然后，可以通过硬件加速的方式，声明一个新的复合图层，它会单独分配资源 （当然也会脱离普通文档流，这样一来，不管这个复合图层中怎么变化，也不会影响默认复合层里的回流重绘） 可以简单理解下：「GPU中，各个复合图层是单独绘制的，所以互不影响」，这也是为什么某些场景硬件加速效果一级棒 可以Chrome源码调试 -&gt; More Tools -&gt; Rendering -&gt; Layer borders中看到，黄色的就是复合图层信息。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/浏览器详解.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _____ as default
};

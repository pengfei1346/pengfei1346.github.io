import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"垃圾回收机制","description":"","frontmatter":{"isTimeLine":true,"title":"垃圾回收机制","date":"2021-11-21T00:00:00.000Z","tags":["todo"]},"headers":[],"relativePath":"front/javascript/垃圾回收机制.md","filePath":"front/javascript/垃圾回收机制.md","lastUpdated":1708417368000}');
const _sfc_main = { name: "front/javascript/垃圾回收机制.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="垃圾回收机制" tabindex="-1">垃圾回收机制 <a class="header-anchor" href="#垃圾回收机制" aria-label="Permalink to &quot;垃圾回收机制&quot;">​</a></h1><blockquote><p>垃圾回收是一种自动的内存管理机制。当计算机上的动态内存不再需要时，就应该予以释放。</p></blockquote><blockquote><p>需要注意的是，自动的意思是浏览器可以自动帮助我们回收内存垃圾，但并不代表我们不用关心内存管理，如果操作不当，JavaScript中仍然会出现内存溢出的情况，造成系统崩溃。</p></blockquote><p>标记清除，引用计数</p><h2 id="问什么是垃圾" tabindex="-1">问什么是垃圾 <a class="header-anchor" href="#问什么是垃圾" aria-label="Permalink to &quot;问什么是垃圾&quot;">​</a></h2><p>一般来说没有被引用的对象就是垃圾，就是要被清除.</p><h2 id="标记-清除法" tabindex="-1">标记-清除法 <a class="header-anchor" href="#标记-清除法" aria-label="Permalink to &quot;标记-清除法&quot;">​</a></h2><blockquote><p>JavaScript中最常用的垃圾回收方式</p></blockquote><ul><li>垃圾回收器获取根并**“标记”**(记住)它们。</li><li>然后它访问并“标记”所有来自它们的引用。</li><li>然后它访问标记的对象并标记它们的引用。所有被访问的对象都被记住，以便以后不再访问同一个对象两次。</li><li>以此类推，直到有未访问的引用(可以从根访问)为止。</li><li>除标记的对象外，所有对象都被删除。</li></ul><p><strong>-- 分为两个阶段 标记阶段 、 清除阶段</strong></p><p>标记阶段： JavaScript中有一个全局对象，定期的，垃圾回收器将从这个全局对象开始，找出所有从这个全局对象开始引用的对象，再找这些对象引用的对象，然后对这些活跃的对象标记 清除阶段：清除那些没有被标记的对象</p><p><strong>补充</strong></p><p>标记阶段引入： <strong>三色标记法</strong>；</p><ul><li>白：未被标记的对象，即不可达对象（没有扫描到的对象），可回收</li><li>灰：已被标记的对象（可达对象），但是对象还没有被扫描完，不可回收</li><li>黑：已被扫描完（可达对象），不可回收</li></ul><p><strong>清除之后引发的问题</strong></p><p>清除之后，内存空间变为不连续的（内存碎片），后续如果有大的连续的内存空间无法使用，需要进行<strong>标记整理</strong>将内存变为连续的</p><p>一些优化:</p><ul><li>分代回收——对象分为两组:“新对象”和“旧对象”。许多对象出现，完成它们的工作并迅速结 ，它们很快就会被清理干净。那些活得足够久的对象，会变“老”，并且很少接受检查。</li><li>增量回收——如果有很多对象，并且我们试图一次遍历并标记整个对象集，那么可能会花费一些时间，并在执行中会有一定的延迟。因此，引擎试图将垃圾回收分解为多个部分。然后，各个部分分别执行。这需要额外的标记来跟踪变化，这样有很多微小的延迟，而不是很大的延迟。</li><li>空闲时间收集——垃圾回收器只在 CPU 空闲时运行，以减少对执行的可能影响。</li></ul><h2 id="引用计数法" tabindex="-1">引用计数法 <a class="header-anchor" href="#引用计数法" aria-label="Permalink to &quot;引用计数法&quot;">​</a></h2><blockquote><p>引用计数的含义是跟踪记录每个值被引用的次数。当一个变量A被赋值时，这个值的引用次数就是1，当变量A重新赋值后，则之前那个值的引用次数就减1。当引用次数变成0时，则说明没有办法再访问这个值了，所以就可以清除这个值占用的内存了。</p></blockquote><p>如果存在循环引用的情况，计数可能不为0，因此无法清除，<strong>大多数浏览器已经放弃了这种方法</strong>。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://juejin.cn/post/6844903810603679751" target="_blank" rel="noreferrer">前端面试：谈谈 JS 垃圾回收机制</a></p><p><a href="https://www.jianshu.com/p/a8a04fd00c3c" target="_blank" rel="noreferrer">几种垃圾回收算法</a></p><p><a href="https://juejin.cn/post/6844903810825994253" target="_blank" rel="noreferrer">[译] JavaScript如何工作：垃圾回收机制 + 常见的4种内存泄漏</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/javascript/垃圾回收机制.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ______ as default
};

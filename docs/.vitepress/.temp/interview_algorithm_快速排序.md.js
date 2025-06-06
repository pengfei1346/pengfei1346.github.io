import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"快速排序","description":"","frontmatter":{"isTimeLine":true,"title":"快速排序","date":"2021-11-21T00:00:00.000Z","tags":["算法","面试"]},"headers":[],"relativePath":"interview/algorithm/快速排序.md","filePath":"interview/algorithm/快速排序.md","lastUpdated":1700552836000}');
const _sfc_main = { name: "interview/algorithm/快速排序.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速排序" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序" aria-label="Permalink to &quot;快速排序&quot;">​</a></h1><h2 id="快速排序-1" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序-1" aria-label="Permalink to &quot;快速排序&quot;">​</a></h2><p>快排的过程简单的说只有三步：</p><p>⾸先从序列中选取⼀个数作为基准数 将⽐这个数⼤的数全部放到它的右边，把⼩于或者等于它的数全部放到它的左边 （⼀次快排 partition ） 然后分别对基准的左右两边复以上的操作，直到数组完全排序</p><p>具体按以下步骤实现：</p><p>1，创建两个指针分别指向数组的最左端以及最右端 2，在数组中任意取出⼀个元素作为基准 3，左指针开始向右移动，遇到⽐基准⼤的停⽌ 4，右指针开始向左移动，遇到⽐基准⼩的元素停⽌，交换左右指针所指向的元素 5，重复3，4，直到左指针超过右指针，此时，⽐基准⼩的值就都会放在基准的左边，⽐基准⼤ 的值会出现在基准的右边 6，然后分别对基准的左右两边复以上的操作，直到数组完全排序</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">quickSort</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">arr</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">if</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(arr.</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">length</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">&lt;=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> arr;  </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//递归出口</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> left </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> [],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        right </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> [],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        mid </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> arr.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">splice</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">0</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">); </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//注意splice后，数组长度少了一个</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">for</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> i </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">0</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">; i </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> arr.</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">length</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">; i</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">++</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">if</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(arr[i] </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> mid) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            left.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">push</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(arr[i])  </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//放在左边</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">else</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            right.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">push</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(arr[i]) </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//放在右边</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">quickSort</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(left).</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">concat</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(mid,</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">quickSort</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(right)); </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//递归</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">quickSort</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">arr</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">if</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(arr.</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">length</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">&lt;=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> arr;  </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//递归出口</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">var</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> left </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> [],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        right </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> [],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        mid </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> arr.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">splice</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">0</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">); </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//注意splice后，数组长度少了一个</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">for</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> i </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">0</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">; i </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> arr.</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">length</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">; i</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">++</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">if</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(arr[i] </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> mid) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            left.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">push</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(arr[i])  </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//放在左边</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">else</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            right.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">push</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(arr[i]) </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//放在右边</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">quickSort</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(left).</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">concat</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(mid,</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">quickSort</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(right)); </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//递归</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span></code></pre></div><p>时间复杂度：O(nlog2n) 空间复杂度：O(nlog2n)</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/快速排序.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

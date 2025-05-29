import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"统计字符串出现频率","description":"","frontmatter":{"sidebar":null,"group":null,"title":"统计字符串出现频率","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"interview/algorithm/统计字符串出现频率.md","filePath":"interview/algorithm/统计字符串出现频率.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "interview/algorithm/统计字符串出现频率.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="统计字符串出现频率" tabindex="-1">统计字符串出现频率 <a class="header-anchor" href="#统计字符串出现频率" aria-label="Permalink to &quot;统计字符串出现频率&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">1. 不限制 key 的顺序</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">2. 输入的字符串参数不会为空</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">3. 忽略空白字符</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">示例1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    输入：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &#39;hello world&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    输出：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">1. 不限制 key 的顺序</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">2. 输入的字符串参数不会为空</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">3. 忽略空白字符</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">示例1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    输入：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &#39;hello world&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    输出：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}</span></span></code></pre></div><h2 id="解法" tabindex="-1">解法 <a class="header-anchor" href="#解法" aria-label="Permalink to &quot;解法&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">count</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">str</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 存储结果</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> obj </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {};</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 遍历</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">for</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">aElement</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">of</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> str) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 判断</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">if</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> (aElement </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">!==</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot; &quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 如果结果对象中找不到，就是第一次出现，次数置为1，否则就+1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">if</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">!</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">obj[aElement]) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">                obj[aElement] </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">else</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">                obj[aElement] </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">+=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> obj</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">count</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">str</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 存储结果</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> obj </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {};</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 遍历</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">for</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> (</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">aElement</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">of</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> str) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 判断</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">if</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> (aElement </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">!==</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot; &quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 如果结果对象中找不到，就是第一次出现，次数置为1，否则就+1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">if</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> (</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">!</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">obj[aElement]) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">                obj[aElement] </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">else</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">                obj[aElement] </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">+=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> obj</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/统计字符串出现频率.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _________ as default
};

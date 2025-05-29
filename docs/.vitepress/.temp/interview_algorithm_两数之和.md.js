import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"两数之和 leetcode-1","description":"","frontmatter":{"sidebar":null,"group":null,"title":"两数之和 leetcode-1","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"interview/algorithm/两数之和.md","filePath":"interview/algorithm/两数之和.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "interview/algorithm/两数之和.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="两数之和-leetcode-1" tabindex="-1">两数之和 leetcode 1 <a class="header-anchor" href="#两数之和-leetcode-1" aria-label="Permalink to &quot;两数之和 leetcode 1&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">你可以按任意顺序返回答案。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">示例 1：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输入：nums = [2,7,11,15], target = 9</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输出：[0,1]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">示例 2：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输入：nums = [3,2,4], target = 6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输出：[1,2]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">示例 3：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输入：nums = [3,3], target = 6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输出：[0,1]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">提示：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">2 &lt;= nums.length &lt;= 104</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">-109 &lt;= nums[i] &lt;= 109</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">-109 &lt;= target &lt;= 109</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">只会存在一个有效答案</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">你可以按任意顺序返回答案。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">示例 1：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输入：nums = [2,7,11,15], target = 9</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输出：[0,1]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">示例 2：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输入：nums = [3,2,4], target = 6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输出：[1,2]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">示例 3：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输入：nums = [3,3], target = 6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输出：[0,1]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">提示：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">2 &lt;= nums.length &lt;= 104</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">-109 &lt;= nums[i] &lt;= 109</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">-109 &lt;= target &lt;= 109</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">只会存在一个有效答案</span></span></code></pre></div><h2 id="解法" tabindex="-1">解法 <a class="header-anchor" href="#解法" aria-label="Permalink to &quot;解法&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">twoSum</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">nums</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">target</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> pre </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">for</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> i </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">0</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;i</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">nums.</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">length</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;i</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">++</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> cur </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> target </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> nums[i]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> index </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> pre[cur]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">if</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(index </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">!==</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">undefined</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> [index,i]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        pre[nums[i]] </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> i</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">var</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">twoSum</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">nums</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">, </span><span style="${ssrRenderStyle({ "color": "#E36209" })}">target</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> pre </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">for</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> i </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">0</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;i</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">nums.</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">length</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;i</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">++</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> cur </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> target </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">-</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> nums[i]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> index </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> pre[cur]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">if</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(index </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">!==</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">undefined</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> [index,i]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        pre[nums[i]] </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> i</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">};</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/两数之和.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

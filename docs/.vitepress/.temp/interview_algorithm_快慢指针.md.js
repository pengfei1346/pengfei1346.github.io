import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/1.c4468e76.gif";
const __pageData = JSON.parse('{"title":"双指针-快慢指针","description":"","frontmatter":{"isTimeLine":true,"title":"双指针-快慢指针","date":"2021-11-21T00:00:00.000Z","tags":["算法","面试"]},"headers":[],"relativePath":"interview/algorithm/快慢指针.md","filePath":"interview/algorithm/快慢指针.md","lastUpdated":1700532797000}');
const _sfc_main = { name: "interview/algorithm/快慢指针.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="双指针" tabindex="-1">双指针 <a class="header-anchor" href="#双指针" aria-label="Permalink to &quot;双指针&quot;">​</a></h1><h3 id="leetcode-26" tabindex="-1">LeetCode 26 <a class="header-anchor" href="#leetcode-26" aria-label="Permalink to &quot;LeetCode  26&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">26. 删除有序数组中的重复项 | 力扣  | LeetCode  |</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">返回 k 。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">判题标准:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">系统会用下面的代码来测试你的题解:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">int[] nums = [...]; // 输入数组</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">int[] expectedNums = [...]; // 长度正确的期望答案</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">int k = removeDuplicates(nums); // 调用</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">assert k == expectedNums.length;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">for (int i = 0; i &lt; k; i++) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    assert nums[i] == expectedNums[i];</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">如果所有断言都通过，那么您的题解将被 通过。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">示例 1：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输入：nums = [1,1,2]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输出：2, nums = [1,2,_]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">示例 2：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输入：nums = [0,0,1,1,1,2,2,3,3,4]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">输出：5, nums = [0,1,2,3,4]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">提示：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">1 &lt;= nums.length &lt;= 3 * 104</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">-104 &lt;= nums[i] &lt;= 104</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">nums 已按 升序 排列</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">26. 删除有序数组中的重复项 | 力扣  | LeetCode  |</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">返回 k 。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">判题标准:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">系统会用下面的代码来测试你的题解:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">int[] nums = [...]; // 输入数组</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">int[] expectedNums = [...]; // 长度正确的期望答案</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">int k = removeDuplicates(nums); // 调用</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">assert k == expectedNums.length;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">for (int i = 0; i &lt; k; i++) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    assert nums[i] == expectedNums[i];</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">如果所有断言都通过，那么您的题解将被 通过。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">示例 1：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输入：nums = [1,1,2]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输出：2, nums = [1,2,_]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">示例 2：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输入：nums = [0,0,1,1,1,2,2,3,3,4]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">输出：5, nums = [0,1,2,3,4]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">提示：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">1 &lt;= nums.length &lt;= 3 * 104</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">-104 &lt;= nums[i] &lt;= 104</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">nums 已按 升序 排列</span></span></code></pre></div><h2 id="双指针-1" tabindex="-1">双指针 <a class="header-anchor" href="#双指针-1" aria-label="Permalink to &quot;双指针&quot;">​</a></h2><p>我们让慢指针 slow 走在后面，快指针 fast 走在前面探路，找到一个不重复的元素就赋值给 slow 并让 slow 前进一步。</p><p>这样，就保证了 nums[0..slow] 都是无重复的元素，当 fast 指针遍历完整个数组 nums 后，nums[0..slow] 就是整个数组去重之后的结果。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="image"></p><h3 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">removeDuplicates</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">nums</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 定义两个指针</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> slow </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> fast </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">while</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> (fast </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> nums.</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">length</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">if</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(nums[slow] </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">!==</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> nums[fast]) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            slow</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">++</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            nums[slow] </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> nums[fast]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        fast </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">++</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> slow </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">removeDuplicates</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">([</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">0</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">1</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">2</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">3</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">3</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">4</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,]) </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//   [0,1,2,3,4] -》 5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">var</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">removeDuplicates</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> (</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">nums</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 定义两个指针</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> slow </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> fast </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">while</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> (fast </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> nums.</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">length</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">if</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(nums[slow] </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">!==</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> nums[fast]) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            slow</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">++</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            nums[slow] </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> nums[fast]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        fast </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">++</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> slow </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">+</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">removeDuplicates</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">([</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">0</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">1</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">2</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">3</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">3</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">4</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,]) </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//   [0,1,2,3,4] -》 5</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/快慢指针.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

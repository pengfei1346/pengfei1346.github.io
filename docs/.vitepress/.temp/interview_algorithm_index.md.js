import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"简介","description":"","frontmatter":{"hidden":false,"sidebar":{"title":"简介"},"group":{"title":"Javascript"}},"headers":[],"relativePath":"interview/algorithm/index.md","filePath":"interview/algorithm/index.md","lastUpdated":1714963357000}');
const _sfc_main = { name: "interview/algorithm/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>此部分记载学习算法过程中的笔记</p><h2 id="大纲" tabindex="-1">大纲: <a class="header-anchor" href="#大纲" aria-label="Permalink to &quot;大纲:&quot;">​</a></h2><p><strong>算法：</strong></p><ol><li>排序算法：快速排序、归并排序、计数排序</li><li>搜索算法：回溯、递归、剪枝</li><li>图论：最短路径、最小生成树、网络流建模</li><li>动态规划：背包问题、最长子序列、计数问题</li><li>基础技巧：分治、倍增、二分法、贪心算法</li></ol><p><strong>数据结构：</strong></p><ol><li>数组和链表</li><li>栈与队列</li><li>树和图</li><li>哈希表</li><li>大/小跟堆，可并堆</li><li>字符串：字典树、后缀树</li></ol><p><strong>参考：</strong></p><p><a href="https://www.zhihu.com/question/23148377?sort=created" target="_blank" rel="noreferrer">程序员必须掌握哪些算法？</a></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./快慢指针.html">双指针-快慢指针</a></li><li><a href="./统计字符串出现频率.html">统计字符串出现频率</a></li><li><a href="./两数之和.html">两数之和 leetcode-1</a></li><li><a href="./对象数组去重.html">对象数组去重</a></li><li><a href="./求所有的字符串子串.html">求所有的字符串子串</a></li><li><a href="./树结构转换.html">树结构转换</a></li><li><a href="./树路径查找.html">树路径查找</a></li><li><a href="./驼峰转换.html">驼峰转换</a></li><li><a href="./生成二维数组.html">生成二维数组</a></li><li><a href="./../计算字母数量.html">计算字母数量</a></li><li><a href="./../对象扁平化.html">对象扁平化</a></li><li><a href="./版本号判断.html">版本号判断</a></li><li><a href="./LRU函数.html">LRU函数</a></li><li><a href="./LRUCache函数.html">LRUCache函数</a></li><li><a href="./最长回文子串.html">最长回文子串 leetcode-5 - todo</a></li><li><a href="./反转链表.html">反转链表 leetcode-206 - todo</a></li><li><a href="./最长递增子序列.html">最长递增子序列 leetcode-300</a></li><li><a href="./字节一面笔试题-轮询.html">字节一面笔试题-轮询</a></li></ul><h2 id="大纲分类" tabindex="-1">大纲分类 <a class="header-anchor" href="#大纲分类" aria-label="Permalink to &quot;大纲分类&quot;">​</a></h2><ul><li>算法的复杂度分析。</li><li>排序算法，以及他们的区别和优化。</li><li>数组中的双指针、滑动窗口思想。</li><li>利用 Map 和 Set 处理查找表问题。</li><li>链表的各种问题。</li><li>利用递归和迭代法解决二叉树问题。</li><li>栈、队列、DFS、BFS。</li><li>回溯法、贪心算法、动态规划。</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p><a href="https://juejin.cn/post/6847009772500156429" target="_blank" rel="noreferrer">学习资料1</a></p><p><a href="https://juejin.cn/post/7034269708916359176" target="_blank" rel="noreferrer">学习资料2</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/algorithm/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"mac搭建java开发环境","description":"","frontmatter":{"sidebar":null,"title":"mac搭建java开发环境","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/other/java.md","filePath":"note/other/java.md","lastUpdated":1726627788000}');
const _sfc_main = { name: "note/other/java.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mac搭建java开发环境" tabindex="-1">mac搭建java开发环境 <a class="header-anchor" href="#mac搭建java开发环境" aria-label="Permalink to &quot;mac搭建java开发环境&quot;">​</a></h1><h2 id="安装jdk-17" tabindex="-1">安装jdk@17 <a class="header-anchor" href="#安装jdk-17" aria-label="Permalink to &quot;安装jdk@17&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">cd &quot;$(brew --repo)&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">git fetch</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">git reset --hard origin/master</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">brew update： 执行时间较长，耐心等待</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">brew upgrade</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">brew install openjdk@17</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">echo &#39;export PATH=&quot;/opt/homebrew/opt/openjdk@17/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">source ~/.zshrc</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">java --version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">cd &quot;$(brew --repo)&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">git fetch</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">git reset --hard origin/master</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">brew update： 执行时间较长，耐心等待</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">brew upgrade</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">brew install openjdk@17</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">echo &#39;export PATH=&quot;/opt/homebrew/opt/openjdk@17/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">source ~/.zshrc</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">java --version</span></span></code></pre></div><h2 id="安装maven" tabindex="-1">安装maven <a class="header-anchor" href="#安装maven" aria-label="Permalink to &quot;安装maven&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">brew install maven</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">mvn -v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">brew install maven</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">mvn -v</span></span></code></pre></div><h2 id="安装mysql" tabindex="-1">安装mysql <a class="header-anchor" href="#安装mysql" aria-label="Permalink to &quot;安装mysql&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> brew search mysql</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> brew install mysql@8.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> brew search mysql</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> brew install mysql@8.0</span></span></code></pre></div><h3 id="使用教程" tabindex="-1"><a href="https://www.jianshu.com/p/1def4f9c4ecf" target="_blank" rel="noreferrer">使用教程</a> <a class="header-anchor" href="#使用教程" aria-label="Permalink to &quot;[使用教程](https://www.jianshu.com/p/1def4f9c4ecf)&quot;">​</a></h3><h2 id="安装-redis" tabindex="-1">安装 redis <a class="header-anchor" href="#安装-redis" aria-label="Permalink to &quot;安装 redis&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> brew search redis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> brew install redis@3.0.504</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> brew search redis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> brew install redis@3.0.504</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/other/java.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const java = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  java as default
};

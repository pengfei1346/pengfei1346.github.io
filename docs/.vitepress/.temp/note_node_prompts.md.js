import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"prompts","description":"","frontmatter":{"sidebar":null,"title":"prompts","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/node/prompts.md","filePath":"note/node/prompts.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "note/node/prompts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="prompts" tabindex="-1">prompts <a class="header-anchor" href="#prompts" aria-label="Permalink to &quot;prompts&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>prompts 是一个 Node.js npm 包，用来实现命令行问答程序，通常被一些 CLI 程序使用，比如 create-vite 就是使用 prompts 让用户选择哪种模板创建程序的。</p><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><p>每条 Prompt 都是 PromptObject 类型对象，包含一个 type 属性，用来决定提问类型。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">type PromptType = &quot;text&quot; | &quot;password&quot; | &quot;invisible&quot; | &quot;number&quot; | &quot;confirm&quot; | &quot;list&quot; | &quot;toggle&quot; | &quot;select&quot; | &quot;multiselect&quot; | &quot;autocomplete&quot; | &quot;date&quot; | &quot;autocompleteMultiselect&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">type PromptType = &quot;text&quot; | &quot;password&quot; | &quot;invisible&quot; | &quot;number&quot; | &quot;confirm&quot; | &quot;list&quot; | &quot;toggle&quot; | &quot;select&quot; | &quot;multiselect&quot; | &quot;autocomplete&quot; | &quot;date&quot; | &quot;autocompleteMultiselect&quot;;</span></span></code></pre></div><ul><li>text：文本提问</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">await</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;text&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;projectName&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Project Name:&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      initial: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;vite-project&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">await</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;text&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;projectName&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Project Name:&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      initial: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;vite-project&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span></code></pre></div><p>字段含义：</p><p>name：指定当前提问在返回对象中的属性名 message：显示给用户看的提问内容 initial：用户在不输入情况下，采用的默认值</p><ul><li>confirm：确认提问</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">defaultTargetDir</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;vite-project&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> targetDir </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> defaultTargetDir</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">await</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;text&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;projectName&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Project Name:&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      initial: defaultTargetDir,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">onState</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">: (</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">state</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(state)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        targetDir </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> state.value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;confirm&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;overwrite&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">\`Target directory &quot;\${</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">targetDir</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">}&quot; is not empty. Remove existing files and continue?\`</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      initial: </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">defaultTargetDir</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;vite-project&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> targetDir </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> defaultTargetDir</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">await</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;text&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;projectName&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Project Name:&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      initial: defaultTargetDir,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">onState</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">: (</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">state</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(state)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        targetDir </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> state.value</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;confirm&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;overwrite&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">\`Target directory &quot;\${</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">targetDir</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">}&quot; is not empty. Remove existing files and continue?\`</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      initial: </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span></code></pre></div><p>name：指定当前提问在返回对象中的属性名</p><p>message：显示给用户看的提问内容</p><p>initial：用户在不输入情况下，采用的默认值。confirm 默认值是 false（对应 N/No），我们改为 true（对应 Y/Yes）</p><ul><li>select：选择项</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;vanilla&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Vanilla&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;vue&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Vue&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;react&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;React&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;preact&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Preact&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">await</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;select&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;framework&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Select a framework:&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      choices: </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">map</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">framework</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">          title: framework.display,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">          value: framework</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;vanilla&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Vanilla&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;vue&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Vue&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;react&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;React&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;preact&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Preact&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">await</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;select&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;framework&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Select a framework:&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      choices: </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">map</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">framework</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">          title: framework.display,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">          value: framework</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span></code></pre></div><p>name：指定当前提问在返回对象中的属性名</p><p>message：显示给用户看的提问内容</p><p>choices：选项列表，是一个数组。成员类型 { title: string, value:any }——title 是选择时展示的文本，value 表示返回值。</p><h3 id="配合-kolorist-一起使用" tabindex="-1">配合 kolorist 一起使用 <a class="header-anchor" href="#配合-kolorist-一起使用" aria-label="Permalink to &quot;配合 kolorist 一起使用&quot;">​</a></h3><p>目前选择框架时候，高亮文字都是一样的颜色。为了便于区分，我们可以为不通框架文字展示时显示不通颜色，这里需要借助 kolorist 工具包。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">install</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">kolorist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">install</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">kolorist</span></span></code></pre></div><p>修改 select 案例代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> prompts </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;prompts&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  cyan,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  green,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  magenta,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  yellow,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">} </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;kolorist&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;vanilla&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Vanilla&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    color: yellow</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;vue&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Vue&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    color: green</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;react&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;React&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    color: cyan</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;preact&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Preact&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    color: magenta</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">await</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;select&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;framework&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;Select a framework:&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      choices: </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">map</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">framework</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">          title: framework.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">color</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(framework.display),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">          value: framework</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">      })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> prompts </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;prompts&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  cyan,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  green,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  magenta,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  yellow,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">} </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;kolorist&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;vanilla&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Vanilla&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    color: yellow</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;vue&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Vue&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    color: green</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;react&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;React&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    color: cyan</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;preact&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    display: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Preact&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    color: magenta</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">await</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">prompts</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      type: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;select&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      name: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;framework&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      message: </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;Select a framework:&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      choices: </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">FRAMEWORKS</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">map</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">framework</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">          title: framework.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">color</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(framework.display),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">          value: framework</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">      })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  ])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/node/prompts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prompts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  prompts as default
};

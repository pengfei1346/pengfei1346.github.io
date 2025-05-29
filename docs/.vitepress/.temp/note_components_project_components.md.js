import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"组件库设计","description":"","frontmatter":{"sidebar":null,"title":"组件库设计","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z","tags":["组件库"]},"headers":[],"relativePath":"note/components/project_components.md","filePath":"note/components/project_components.md","lastUpdated":1705993081000}');
const _sfc_main = { name: "note/components/project_components.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="搭建组件库" tabindex="-1">搭建组件库 <a class="header-anchor" href="#搭建组件库" aria-label="Permalink to &quot;搭建组件库&quot;">​</a></h1><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><p>pnpm + vite</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">project</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├─.husky           # github配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│  └─workflows      # 自动构建部署配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├─docs              # 文档内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├─.vitepress    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─config.ts  # vitepress配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─cache      # 缓存文件，可忽略提交</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─dist       # 构建包，可忽略提交</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  └─theme      # 样式和主题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├─package           # 子项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├─cli           # cli工具</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├─shared        # 公共工具库</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├─hooks         # hooks库</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├─ui            # 组件库</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─src        # 存放组件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─demo       # 使用示例</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─script      # 存放脚本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─index.ts       # 项目入口文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  ├─package.json       # 项目依赖</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │  └─vite.config.ts      # 项目打包配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├─...   </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├─node_modules      # 根依赖目录，可忽略提交</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├─.gitignore        # git提交忽略配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├─pnpm-workspace.yaml        # pnpm配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├─package.json      # node.js配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">└─README.md         # 工程说明</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">project</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├─.husky           # github配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│  └─workflows      # 自动构建部署配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├─docs              # 文档内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├─.vitepress    </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─config.ts  # vitepress配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─cache      # 缓存文件，可忽略提交</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─dist       # 构建包，可忽略提交</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  └─theme      # 样式和主题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├─package           # 子项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├─cli           # cli工具</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├─shared        # 公共工具库</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├─hooks         # hooks库</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├─ui            # 组件库</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─src        # 存放组件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─demo       # 使用示例</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─script      # 存放脚本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─index.ts       # 项目入口文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  ├─package.json       # 项目依赖</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │  └─vite.config.ts      # 项目打包配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├─...   </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├─node_modules      # 根依赖目录，可忽略提交</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├─.gitignore        # git提交忽略配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├─pnpm-workspace.yaml        # pnpm配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├─package.json      # node.js配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">└─README.md         # 工程说明</span></span></code></pre></div><h2 id="参考目录-todo部分" tabindex="-1">参考目录- todo部分 <a class="header-anchor" href="#参考目录-todo部分" aria-label="Permalink to &quot;参考目录- todo部分&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">components 包，作为组件库的主要代码，实现各个 UI 组件的核心逻辑。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">shared 包，主要存放各种杂七杂八的工具方法。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">theme 包，实现组件库的主题样式定制方案。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">cli 包，实现组件库模板脚手架的命令行工具。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">docs 包，组件库的示例 demo 与使用文档。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">playground 包，组件库的在线编辑、演示应用。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">components 包，作为组件库的主要代码，实现各个 UI 组件的核心逻辑。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">shared 包，主要存放各种杂七杂八的工具方法。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">theme 包，实现组件库的主题样式定制方案。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">cli 包，实现组件库模板脚手架的命令行工具。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">docs 包，组件库的示例 demo 与使用文档。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">playground 包，组件库的在线编辑、演示应用。</span></span></code></pre></div><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ul><li>开启workspace</li></ul><p>pnpm-workspace.yaml</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">packages:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  - packages/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  - docs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">packages:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  - packages/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  - docs</span></span></code></pre></div><ul><li>安装依赖</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">i</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">i</span></span></code></pre></div><ul><li>引用子项目的情况</li></ul><p>定义子项目的package.json</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;@ac-repo/shared&quot;: &quot;workspace:*&quot;, // 其他子项目中package.json中的name，也就是项目名</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;@ac-repo/hooks&quot;: &quot;workspace:*&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;@ac-repo/shared&quot;: &quot;workspace:*&quot;, // 其他子项目中package.json中的name，也就是项目名</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;@ac-repo/hooks&quot;: &quot;workspace:*&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><ul><li>子项目package.json参考</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;name&quot;: &quot;@ac-repo/ui-v3&quot;, // 包的名称</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;version&quot;: &quot;1.0.0&quot;, // 版本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;description&quot;: &quot;vue3组件库项目&quot;, // 描述</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;main&quot;: &quot;lib/index.js&quot;, // 包主文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;module&quot;: &quot;es/index.mjs&quot;, // esmodule 的包主文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;scripts&quot;: { // 命令</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;dev&quot;: &quot;vite&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;build:style&quot;: &quot;gulp -f script/build.ts&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;build&quot;: &quot;npm run build:style &amp;&amp; vite build &quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;docs:build&quot;: &quot;vite build --mode docs&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;peerDependencies&quot;: { </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;vue&quot;: &quot;^3.2.0&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;element-plus&quot;: &quot;^2.2.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;@element-plus/icons-vue&quot;: &quot;^2.0.6&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;@ac-repo/shared&quot;: &quot;workspace:*&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;@ac-repo/hooks&quot;: &quot;workspace:*&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;lodash&quot;: &quot;^4.17.21&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;devDependencies&quot;: {// 运行时依赖</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;@vitejs/plugin-vue&quot;: &quot;^2.3.3&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;element-plus&quot;: &quot;^2.2.8&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;vue&quot;: &quot;^3.2.36&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;vue-router&quot;: &quot;4&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;name&quot;: &quot;@ac-repo/ui-v3&quot;, // 包的名称</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;version&quot;: &quot;1.0.0&quot;, // 版本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;description&quot;: &quot;vue3组件库项目&quot;, // 描述</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;main&quot;: &quot;lib/index.js&quot;, // 包主文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;module&quot;: &quot;es/index.mjs&quot;, // esmodule 的包主文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;scripts&quot;: { // 命令</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;dev&quot;: &quot;vite&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;build:style&quot;: &quot;gulp -f script/build.ts&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;build&quot;: &quot;npm run build:style &amp;&amp; vite build &quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;docs:build&quot;: &quot;vite build --mode docs&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;peerDependencies&quot;: { </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;vue&quot;: &quot;^3.2.0&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;element-plus&quot;: &quot;^2.2.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;@element-plus/icons-vue&quot;: &quot;^2.0.6&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;@ac-repo/shared&quot;: &quot;workspace:*&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;@ac-repo/hooks&quot;: &quot;workspace:*&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;lodash&quot;: &quot;^4.17.21&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;devDependencies&quot;: {// 运行时依赖</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;@vitejs/plugin-vue&quot;: &quot;^2.3.3&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;element-plus&quot;: &quot;^2.2.8&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;vue&quot;: &quot;^3.2.36&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;vue-router&quot;: &quot;4&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><h2 id="本地调试" tabindex="-1">本地调试 <a class="header-anchor" href="#本地调试" aria-label="Permalink to &quot;本地调试&quot;">​</a></h2><p>通过script标签引入 新建一个html文档（我们这里是在example文件夹下新建一个index.html），引入打包好的组件库引入。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;head&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        html,body,#app {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            height: 100%;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            width: 100%;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            margin: 0;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            padding: 0;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;/style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/head&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;body&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        &lt;bsd-frame&gt;&lt;div&gt;大屏内容&lt;/div&gt;&lt;/bsd-frame&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/body&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;script src=&quot;../dist/bs-display-umd.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    new Vue({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        el: &#39;#app&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;head&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        html,body,#app {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            height: 100%;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            width: 100%;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            margin: 0;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            padding: 0;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;/style&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/head&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;body&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        &lt;bsd-frame&gt;&lt;div&gt;大屏内容&lt;/div&gt;&lt;/bsd-frame&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/body&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;script src=&quot;../dist/bs-display-umd.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    new Vue({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        el: &#39;#app&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/script&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/html&gt;</span></span></code></pre></div><p>文字是黑色的，而且被缩小后文字太小了，所以截图中基本上看不到。如果设置： css复制代码color: #fff; font-size: 100px;</p><p>则能看到有拉伸效果的文字。</p><h3 id="import引入" tabindex="-1">import引入 <a class="header-anchor" href="#import引入" aria-label="Permalink to &quot;import引入&quot;">​</a></h3><p>搭建一个用于测试的vue项目LibTest，或者，更方便快捷一点的，在已有的vue的项目中加一个测试组件，并添加到routes中。 在myLib组件库项目根目录下执行 npm link</p><p>bash复制代码cd bs-display</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm link</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">yarn link</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">pnpm link -g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm link</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">yarn link</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">pnpm link -g</span></span></code></pre></div><p>在测试项目根目录下执行npm link bs-display bash复制代码cd LibTest</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm link bs-display  //这个bs-display是在bs-display项目的package.json中定义的&quot;name&quot;: &quot;bs-display&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">yarn link bs-display </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">pnpm link bs-display -g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm link bs-display  //这个bs-display是在bs-display项目的package.json中定义的&quot;name&quot;: &quot;bs-display&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">yarn link bs-display </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">pnpm link bs-display -g</span></span></code></pre></div><br><p>然后，就可以和普通npm安装的组件库一样使用了 在测试项目LibTest的入口js中，引入bs-display，执行Vue.use()注册组件 javascript复制代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">import { Frame } from &#39;bs-display&#39;  //按需引入</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">Vue.use(Frame)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">import { Frame } from &#39;bs-display&#39;  //按需引入</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">Vue.use(Frame)</span></span></code></pre></div><br><p>在LibTest的App.vue中使用组件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;template&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &lt;div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &lt;bsd-frame&gt;&lt;div&gt;大屏内容&lt;/div&gt;&lt;/bsd-frame&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;/template&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;template&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &lt;div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &lt;bsd-frame&gt;&lt;div&gt;大屏内容&lt;/div&gt;&lt;/bsd-frame&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &lt;/div&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;/template&gt;</span></span></code></pre></div><br><h3 id="npm发布" tabindex="-1">npm发布 <a class="header-anchor" href="#npm发布" aria-label="Permalink to &quot;npm发布&quot;">​</a></h3><ul><li><p>注册npm账号</p></li><li><p>在npm官网按照提示注册账号。npm官网</p></li><li><p>登录npm账号</p></li><li><p>在命令行登录npm账号</p></li><li><p>在命令行输入： npm login</p><p>就会出现下面的登录界面</p></li></ul><p>如果你的npm源是淘宝镜像，那么需要更换回默认的npm源：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm config set registry https://registry.npmjs.org/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm config set registry https://registry.npmjs.org/</span></span></code></pre></div><br><p>npm publish 在发布之前，如果你的包引用了第三方包，则需要确保在package.json中的dependencies字段，写入了依赖的包及版本。 修改package.json中的files字段，指定需要上传到npm的文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">json复制代码&quot;files&quot;: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;dist&quot;  //上传dist文件夹中的所有文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">此外，包的名字对应的是package.json中的&quot;name&quot;字段，这里我们将包名改成big-screen-display。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">然后，在命令行输入：npm publish。等待发布完成即可。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">这是在测试项目中通过</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm i big-screen-display --S</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">安装到node_modules中的big-screen-display包的内容。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">json复制代码&quot;files&quot;: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;dist&quot;  //上传dist文件夹中的所有文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">此外，包的名字对应的是package.json中的&quot;name&quot;字段，这里我们将包名改成big-screen-display。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">然后，在命令行输入：npm publish。等待发布完成即可。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">这是在测试项目中通过</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm i big-screen-display --S</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">安装到node_modules中的big-screen-display包的内容。</span></span></code></pre></div><br><h3 id="npm更新" tabindex="-1">npm更新 <a class="header-anchor" href="#npm更新" aria-label="Permalink to &quot;npm更新&quot;">​</a></h3><p>当包的内容进行了更新，需要再次发布时: 首先，运行npm version patch更新版本，它会修改package.json文件中的version值。 然后，再次运行npm publish，就会上传最新版本的包。</p><h3 id="npm删除" tabindex="-1">npm删除 <a class="header-anchor" href="#npm删除" aria-label="Permalink to &quot;npm删除&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm unpublish big-screen-display@1.0.0     删除指定版本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm unpublish big-screen-display --force   删除整个包</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm unpublish big-screen-display@1.0.0     删除指定版本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm unpublish big-screen-display --force   删除整个包</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/components/project_components.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const project_components = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  project_components as default
};

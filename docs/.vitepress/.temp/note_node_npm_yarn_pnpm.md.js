import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"npm、yarn、pnpm","description":"","frontmatter":{},"headers":[],"relativePath":"note/node/npm&yarn&pnpm.md","filePath":"note/node/npm&yarn&pnpm.md","lastUpdated":1705993081000}');
const _sfc_main = { name: "note/node/npm&yarn&pnpm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>sidebar: title: npm、yarn、pnpm区别 date: 2023-12-10</p><h1 id="npm、yarn、pnpm" tabindex="-1">npm、yarn、pnpm <a class="header-anchor" href="#npm、yarn、pnpm" aria-label="Permalink to &quot;npm、yarn、pnpm&quot;">​</a></h1><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h2><p>v3版本一下采用的是嵌套解构，v3以上采用了尽量扁平解构 v5增加了package-lock.json。</p><h3 id="嵌套的-node-modules-结构" tabindex="-1">嵌套的 node_modules 结构 <a class="header-anchor" href="#嵌套的-node-modules-结构" aria-label="Permalink to &quot;嵌套的 node_modules 结构&quot;">​</a></h3><p>npm 在早期采用的是嵌套的 node_modules 结构，直接依赖会平铺在 node_modules 下，子依赖嵌套在直接依赖的 node_modules 中。</p><p>比如项目依赖了A 和 C，而 A 和 C 依赖了不同版本的 B@1.0 和 B@2.0，node_modules 结构如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│       └── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">└── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        └── B@2.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│       └── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">└── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        └── B@2.0.0</span></span></code></pre></div><p>如果 D 也依赖 B@1.0，会生成如下的嵌套结构：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│       └── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│       └── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">└── D@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        └── B@1.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│       └── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│       └── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">└── D@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        └── B@1.0.0</span></span></code></pre></div><h3 id="依赖地狱-dependency-hell" tabindex="-1">依赖地狱 Dependency Hell <a class="header-anchor" href="#依赖地狱-dependency-hell" aria-label="Permalink to &quot;依赖地狱 Dependency Hell&quot;">​</a></h3><p>在真实场景下，依赖增多，冗余的包也变多，node_modules 最终会堪比黑洞，很快就能把磁盘占满。而且依赖嵌套的深度也会十分可怕，这个就是依赖地狱。</p><h3 id="扁平的-node-modules-结构" tabindex="-1">扁平的 node_modules 结构 <a class="header-anchor" href="#扁平的-node-modules-结构" aria-label="Permalink to &quot;扁平的 node_modules 结构&quot;">​</a></h3><p>为了将嵌套的依赖<strong>尽量</strong>打平，避免过深的依赖树和包冗余，npm v3 将子依赖「提升」(hoist)，采用扁平的 node_modules 结构，子依赖会尽量平铺安装在主依赖项所在的目录中。</p><blockquote><p>不保证严格打平，只是尽量保证扁平，一些依赖因为版本号的问题还是采用嵌套</p></blockquote><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">└── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        └── B@2.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">└── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        └── B@2.0.0</span></span></code></pre></div><p>可以看到 A 的子依赖的 B@1.0 不再放在 A 的 node_modules 下了，而是与 A 同层级。</p><p>而 C 依赖的 B@2.0 因为版本号原因还是嵌套在 C 的 node_modules 下。</p><p>这样不会造成大量包的重复安装，依赖的层级也不会太深，解决了依赖地狱问题，但也形成了新的问题。</p><h2 id="幽灵依赖-phantom-dependencies" tabindex="-1">幽灵依赖 Phantom dependencies <a class="header-anchor" href="#幽灵依赖-phantom-dependencies" aria-label="Permalink to &quot;幽灵依赖 Phantom dependencies&quot;">​</a></h2><blockquote><p>幽灵依赖是指在 package.json 中未定义的依赖，但项目中依然可以正确地被引用到。</p></blockquote><p>比如上方的示例其实我们只安装了 A 和 C：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;A&quot;: &quot;^1.0.0&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    &quot;C&quot;: &quot;^1.0.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;A&quot;: &quot;^1.0.0&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    &quot;C&quot;: &quot;^1.0.0&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><p>由于 B 在安装时被提升到了和 A 同样的层级，所以在项目中引用 B 还是能正常工作的。</p><p>幽灵依赖是由依赖的声明丢失造成的，如果某天某个版本的 A 依赖不再依赖 B 或者 B 的版本发生了变化，那么就会造成依赖缺失或兼容性问题。</p><h3 id="不确定性-non-determinism" tabindex="-1">不确定性 Non-Determinism <a class="header-anchor" href="#不确定性-non-determinism" aria-label="Permalink to &quot;不确定性 Non-Determinism&quot;">​</a></h3><blockquote><p>不确定性是指：同样的 package.json 文件，install 依赖后可能不会得到同样的 node_modules 目录结构。</p></blockquote><p>还是之前的例子，A 依赖 B@1.0，C 依赖 B@2.0，依赖安装后究竟应该提升 B 的 1.0 还是 2.0。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">└── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        └── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│       └── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">└── C@1.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">└── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        └── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│       └── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">└── C@1.0.0</span></span></code></pre></div><p>取决于用户的安装顺序。</p><p>如果有 package.json 变更，本地需要删除 node_modules 重新 install，否则可能会导致生产环境与开发环境 node_modules 结构不同，代码无法正常运行。</p><h3 id="依赖分身-doppelgangers" tabindex="-1">依赖分身 Doppelgangers <a class="header-anchor" href="#依赖分身-doppelgangers" aria-label="Permalink to &quot;依赖分身 Doppelgangers&quot;">​</a></h3><p>假设继续再安装依赖 B@1.0 的 D 模块和依赖 @B2.0 的 E 模块，此时：</p><ul><li>A 和 D 依赖 B@1.0</li><li>C 和 E 依赖 B@2.0</li></ul><p>可以看到 B@2.0 会被安装两次，实际上无论提升 B@1.0 还是 B@2.0，都会存在重复版本的 B 被安装，这两个重复安装的 B 就叫 doppelgangers。</p><p>而且虽然看起来模块 C 和 E 都依赖 B@2.0，但其实引用的不是同一个 B，假设 B 在导出之前做了一些缓存或者副作用，那么使用者的项目就会因此而出错。</p><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h2><p>采用扁平化 node_modules 结构</p><h3 id="提升安装速度" tabindex="-1">提升安装速度 <a class="header-anchor" href="#提升安装速度" aria-label="Permalink to &quot;提升安装速度&quot;">​</a></h3><blockquote><p>串行 -&gt; 并行操作 提升安装速度</p><p>缓存机制 -&gt; 缓存在磁盘上，第二次安装提升安装速度</p></blockquote><p>在 npm 中安装依赖时，安装任务是串行的，会按包顺序逐个执行安装，这意味着它会等待一个包完全安装，然后再继续下一个。</p><p>为了加快包安装速度，yarn 采用了并行操作，在性能上有显著的提高。而且在缓存机制上，yarn 会将每个包缓存在磁盘上，在下一次安装这个包时，可以脱离网络实现从磁盘离线安装。</p><h3 id="lockfile-解决不确定性-保证了依赖安装的确定性" tabindex="-1">lockfile 解决不确定性 - 保证了依赖安装的确定性 <a class="header-anchor" href="#lockfile-解决不确定性-保证了依赖安装的确定性" aria-label="Permalink to &quot;lockfile 解决不确定性 - 保证了依赖安装的确定性&quot;">​</a></h3><blockquote><p>yarn.lock --&gt; 根据 package.josn 生成</p><p>记录了依赖，以及依赖的子依赖，依赖的版本，获取地址与验证模块完整性的 hash</p></blockquote><p>即使是不同的安装顺序，相同的依赖关系在任何的环境和容器中，都能得到稳定的 node_modules 目录结构，保证了依赖安装的确定性</p><h2 id="npm-yarn-弊端" tabindex="-1">npm &amp; yarn 弊端 <a class="header-anchor" href="#npm-yarn-弊端" aria-label="Permalink to &quot;npm &amp; yarn 弊端&quot;">​</a></h2><p>采用扁平化的 node_modules 结构 -&gt;</p><ul><li>扁平化算法消耗更多的性能 <ul><li>扁平化依赖算法复杂，需要<strong>消耗较多的性能</strong>，依赖串行安装还有提速空间</li></ul></li><li>依赖分身问题 <ul><li>大量文件需要重复下载，对磁盘空间的利用率不足。（虽然在同一个项目中我不会重复的安装依赖 d 了，但是如果我有100个项目，100个项目都需要用到某个包，那么这个包依然会被下载100次，也就是在磁盘的不同地方写入100次）</li></ul></li><li>幽灵依赖问题 <ul><li>扁平化依赖 -》依赖非法访问的问题。项目代码在某些情况下可以在代码中使用没有被定义在 package.json 中的包，这种情况就是我们常说的<strong>幽灵依赖</strong>。</li></ul></li></ul><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h2><blockquote><p>从依赖提升和扁平化 -&gt; 依赖管理策略：内容寻址存储</p></blockquote><h3 id="依赖管理策略" tabindex="-1">依赖管理策略 <a class="header-anchor" href="#依赖管理策略" aria-label="Permalink to &quot;依赖管理策略&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">* 系统的全局 store 中 , 依赖的每个版本只会在系统中安装一次</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">* 引用项目 node_modules 的依赖时，会通过硬链接与符号链接在全局 store 中找到这个文件。抛弃了扁平化解构，node_modules 下会多出 \\.pnpm 目录。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    * 硬链接(Hard link) - 硬链接可以理解为**源文件的副本**，项目里安装的其实是副本，它使得用户可以通过路径引用查找到全局 store 中的源文件，而且这个副本根本不占任何空间。同时，pnpm 会在全局 store 里存储硬链接，不同的项目可以从全局 store 寻找到同一个依赖，大大地节省了磁盘空间</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    * 符号链接(Symbolic link) - **也叫软连接**，可以理解为快捷方式，pnpm 可以通过它找到对应磁盘目录下的依赖地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">* 系统的全局 store 中 , 依赖的每个版本只会在系统中安装一次</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">* 引用项目 node_modules 的依赖时，会通过硬链接与符号链接在全局 store 中找到这个文件。抛弃了扁平化解构，node_modules 下会多出 \\.pnpm 目录。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    * 硬链接(Hard link) - 硬链接可以理解为**源文件的副本**，项目里安装的其实是副本，它使得用户可以通过路径引用查找到全局 store 中的源文件，而且这个副本根本不占任何空间。同时，pnpm 会在全局 store 里存储硬链接，不同的项目可以从全局 store 寻找到同一个依赖，大大地节省了磁盘空间</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    * 符号链接(Symbolic link) - **也叫软连接**，可以理解为快捷方式，pnpm 可以通过它找到对应磁盘目录下的依赖地址</span></span></code></pre></div><p>A，B，C 模块的示例，使用 pnpm 安装依赖后 node_modules 结构如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;store&gt;/xxx 开头的路径是硬链接，指向全局 store 中安装的依赖。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;store&gt;/xxx 开头的路径是硬链接，指向全局 store 中安装的依赖。</span></span></code></pre></div><p>其余的是符号链接，指向依赖的快捷方式。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── .pnpm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │       ├── A =&gt; &lt;store&gt;/A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │       └── B =&gt; ../../B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │       └── B =&gt; &lt;store&gt;/B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   ├── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   │       └── B =&gt; &lt;store&gt;/B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│   └── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│       └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│           ├── C =&gt; &lt;store&gt;/C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│           └── B =&gt; ../../B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">│</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">├── A =&gt; .pnpm/A@1.0.0/node_modules/A</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">└── C =&gt; .pnpm/C@1.0.0/node_modules/C</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── .pnpm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├── A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │       ├── A =&gt; &lt;store&gt;/A@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │       └── B =&gt; ../../B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├── B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │       └── B =&gt; &lt;store&gt;/B@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   ├── B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │   └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   │       └── B =&gt; &lt;store&gt;/B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│   └── C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│       └── node_modules</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│           ├── C =&gt; &lt;store&gt;/C@1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│           └── B =&gt; ../../B@2.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">│</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">├── A =&gt; .pnpm/A@1.0.0/node_modules/A</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">└── C =&gt; .pnpm/C@1.0.0/node_modules/C</span></span></code></pre></div><p><strong>优点</strong></p><ul><li>兼容 node 的依赖解析</li><li>解决幽灵依赖问题</li><li>解决依赖分身问题</li><li>安装速度快</li><li>节省的磁盘空间多</li></ul><p><strong>缺点</strong></p><ul><li>兼容性问题： 不支持软链接的环境中，无法使用 pnpm</li><li>修改依赖源码可能会出现问题： 依赖源文件是安装在 store 中，调试依赖或 patch-package 给依赖打补丁也不太方便，可能会影响其他项目</li></ul><h2 id="更多探索-yarn-plug-n-play" tabindex="-1">更多探索 yarn Plug’n’Play... <a class="header-anchor" href="#更多探索-yarn-plug-n-play" aria-label="Permalink to &quot;更多探索 yarn Plug’n’Play...&quot;">​</a></h2><h3 id="plug-n-play-简单了解" tabindex="-1">Plug’n’Play 简单了解 <a class="header-anchor" href="#plug-n-play-简单了解" aria-label="Permalink to &quot;Plug’n’Play 简单了解&quot;">​</a></h3><ul><li>抛弃 node_modules</li><li>脱离 node 生态</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/node/npm&yarn&pnpm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const npm_yarn_pnpm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  npm_yarn_pnpm as default
};

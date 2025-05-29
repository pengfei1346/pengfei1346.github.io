import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"npm私有仓库","description":"","frontmatter":{"sidebar":null,"title":"npm私有仓库","step":6,"isTimeLine":true,"date":"2020-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/system/npm.md","filePath":"note/system/npm.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "note/system/npm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="npm私有仓库" tabindex="-1">npm私有仓库 <a class="header-anchor" href="#npm私有仓库" aria-label="Permalink to &quot;npm私有仓库&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><blockquote><p>仓库搭建过程略</p></blockquote><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p><a href="https://juejin.cn/post/6939812008082538504?from=search-suggest" target="_blank" rel="noreferrer">参考1</a><a href="https://juejin.cn/post/7212621497810370597" target="_blank" rel="noreferrer">参考2</a></p><p>docker-compose基本命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">后台构建</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">docker-compose</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">up</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">-d</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">docker-compose</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">up</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">-d</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">--build</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">停止并删除构建</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">docker-compose</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">down</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">后台构建</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">docker-compose</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">up</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">-d</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">docker-compose</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">up</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">-d</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">--build</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">停止并删除构建</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">docker-compose</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">down</span></span></code></pre></div><p>docker基本命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># 以服务方式启动</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">service</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">docker</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">stop</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">   </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">service</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">docker</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">start</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">service</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">docker</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">restart</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># 以服务方式启动</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">service</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">docker</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">stop</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">   </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">service</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">docker</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">start</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">service</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">docker</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">restart</span></span></code></pre></div><p>参考：<br><a href="http://www.manongjc.com/detail/54-uqdquiitomgfvmo.html" target="_blank" rel="noreferrer">http://www.manongjc.com/detail/54-uqdquiitomgfvmo.html</a><a href="https://blog.csdn.net/liuhangbiao/article/details/117604766" target="_blank" rel="noreferrer">https://blog.csdn.net/liuhangbiao/article/details/117604766</a></p><p>项目根部录下新建docker-compose.yml</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">version: &#39;3.4&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">services:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  verdaccio:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    image: verdaccio/verdaccio</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    container_name: &quot;verdaccio&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    networks:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      - node-network</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    environment:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      - VERDACCIO_PORT=4873</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    ports:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      - &quot;4873:4873&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    volumes:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      - &quot;./storage:/verdaccio/storage&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      - &quot;./config:/verdaccio/conf&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      - &quot;./plugins:/verdaccio/plugins&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">networks:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  node-network:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    driver: bridge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">version: &#39;3.4&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">services:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  verdaccio:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    image: verdaccio/verdaccio</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    container_name: &quot;verdaccio&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    networks:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      - node-network</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    environment:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      - VERDACCIO_PORT=4873</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    ports:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      - &quot;4873:4873&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    volumes:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      - &quot;./storage:/verdaccio/storage&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      - &quot;./config:/verdaccio/conf&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      - &quot;./plugins:/verdaccio/plugins&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">networks:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  node-network:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    driver: bridge</span></span></code></pre></div><p>项目根部录下新建config文件夹，config文件夹下新建config.yaml</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 所有包的缓存目录</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">storage: /verdaccio/storage/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 插件目录</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">plugins: /verdaccio/storage/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#开启web 服务,能够通过web 访问</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">web:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  # WebUI is enabled as default, if you want disable it, just uncomment this line</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  enable: true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  title: Sinux-Npm-Register #网站首页进入的正文标题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  # logo: #这里可以给定一个远程连接的图片,注释掉就采用默认的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  # comment out to disable gravatar support</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  gravatar: true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  # by default packages are ordercer ascendant (asc|desc)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  # sort_packages: asc  # 包的排序</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  # darkMode: true # 黑暗模式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  # scope: &quot;@scope&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">auth:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  htpasswd:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 用户信息存储目录</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    file: ./htpasswd</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    #此配置项可以关闭注册功能</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    max_users: -1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">i18n:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  web: zh-CN # 默认是en-US,我们改为默认中文,这个东东支持多语言</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">uplinks:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  npmjs:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    url: https://registry.npmjs.org/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  yarn:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    url: https://registry.yarnpkg.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    timeout: 10s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  taobao:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    url: https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    timeout: 10s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">packages:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;@*/*&quot;:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 三种身份,所有人,匿名用户,认证(登陆)用户</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    access: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    #发布package 的权限</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    publish: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    proxy: npmjs</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  &quot;**&quot;:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    access: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    publish: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    proxy: npmjs yarn  taobao</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># To use \`npm audit\` uncomment the following section</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">middlewares:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  audit:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    enabled: true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 监听的端口 ,重点, 不配置这个,只能本机能访问</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">listen: 0.0.0.0:4873</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">logs:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  - { type: stdout, format: pretty, level: http }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 所有包的缓存目录</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">storage: /verdaccio/storage/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 插件目录</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">plugins: /verdaccio/storage/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#开启web 服务,能够通过web 访问</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">web:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  # WebUI is enabled as default, if you want disable it, just uncomment this line</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  enable: true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  title: Sinux-Npm-Register #网站首页进入的正文标题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  # logo: #这里可以给定一个远程连接的图片,注释掉就采用默认的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  # comment out to disable gravatar support</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  gravatar: true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  # by default packages are ordercer ascendant (asc|desc)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  # sort_packages: asc  # 包的排序</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  # darkMode: true # 黑暗模式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  # scope: &quot;@scope&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">auth:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  htpasswd:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 用户信息存储目录</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    file: ./htpasswd</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    #此配置项可以关闭注册功能</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    max_users: -1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">i18n:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  web: zh-CN # 默认是en-US,我们改为默认中文,这个东东支持多语言</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">uplinks:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  npmjs:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    url: https://registry.npmjs.org/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  yarn:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    url: https://registry.yarnpkg.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    timeout: 10s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  taobao:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    url: https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    timeout: 10s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">packages:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;@*/*&quot;:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 三种身份,所有人,匿名用户,认证(登陆)用户</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    access: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    #发布package 的权限</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    publish: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    proxy: npmjs</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  &quot;**&quot;:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    access: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    publish: $all</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    proxy: npmjs yarn  taobao</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># To use \`npm audit\` uncomment the following section</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">middlewares:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  audit:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    enabled: true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 监听的端口 ,重点, 不配置这个,只能本机能访问</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">listen: 0.0.0.0:4873</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">logs:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  - { type: stdout, format: pretty, level: http }</span></span></code></pre></div><p>这一步不是必须的，如果config.yaml关闭了注册功能，需要内置用户 config文件夹下新建htpasswd，需要rsa加密，密码生成：<a href="https://hostingcanada.org/htpasswd-generator/" target="_blank" rel="noreferrer">https://hostingcanada.org/htpasswd-generator/</a></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 用户名：密码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">ac:{SHA}fEqNCco3Yq9h5ZUglD3CZJT4lBs=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 用户名：密码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">ac:{SHA}fEqNCco3Yq9h5ZUglD3CZJT4lBs=</span></span></code></pre></div><p>最后执行 docker-compose up -d --build完成构建。</p><h2 id="注册登录" tabindex="-1">注册登录 <a class="header-anchor" href="#注册登录" aria-label="Permalink to &quot;注册登录&quot;">​</a></h2><ul><li>将npm服务指向本地：npm set registry <a href="http://localhost:4873" target="_blank" rel="noreferrer">http://localhost:4873</a></li><li>注册用户：npm adduser registry <a href="http://localhost:4873" target="_blank" rel="noreferrer">http://localhost:4873</a>，根据提示输入用户名，密码，邮箱</li><li>验证是否添加用户成功： npm who am i</li><li>在<a href="http://localhost:4873/" target="_blank" rel="noreferrer">http://localhost:4873/</a> 页面登录用户</li></ul><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h2><ul><li>npm publish</li><li>发布后想要撤销发布的包：npm unpublish 包名 --force</li><li>下载发布后的包：npm install --save 包名</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#未注册且私服允许注册的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm adduser --registry=http://xxx.xxx.x.xx:4873</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#输入npm账号用户名、密码和邮箱，如下：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">Username: better1025</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">Password:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">Email: (this IS public) xxx@xx.com</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">Logged in as better1025 on http://xxx.xxx.x.xx:4873/.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#之前已经注册过了，就使用下面的登录命令</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm login --registry=http://xxx.xxx.x.xx:4873</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#未注册且私服允许注册的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm adduser --registry=http://xxx.xxx.x.xx:4873</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#输入npm账号用户名、密码和邮箱，如下：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">Username: better1025</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">Password:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">Email: (this IS public) xxx@xx.com</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">Logged in as better1025 on http://xxx.xxx.x.xx:4873/.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#之前已经注册过了，就使用下面的登录命令</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm login --registry=http://xxx.xxx.x.xx:4873</span></span></code></pre></div><ul><li>npm version</li></ul><blockquote><p>npm version 是一个用于管理 Node.js 应用版本的命令行工具。该工具可用于更新 package.json 文件中的版本号以及将这个版本号提交到源代码控制系统中。</p></blockquote><p>npm version 命令有以下几个参数：</p><p>major：当你的应用做了不兼容的改动时，使用这个参数来升级主版本号。 minor：当你的应用增加了新功能时，使用这个参数来升级次版本号。 patch：当你的应用进行了 bug 修复时，使用这个参数来升级补丁版本号。 premajor：当你的应用处于一个开发阶段，但是你已经做了一些不兼容的改动时，使用这个参数来升级主版本号，并且为预发行版本打上标记。 preminor：当你的应用处于一个开发阶段，但是你已经增加了新功能时，使用这个参数来升级次版本号，并且为预发行版本打上标记。 prepatch：当你的应用处于一个开发阶段，但是你已经进行了 bug 修复时，使用这个参数来升级补丁版本号，并且为预发行版本打上标记。 prerelease：当你的应用处于一个开发阶段，并且你希望发布一个预发行版本时，使用这个参数来为当前版本号打上标记。</p><h2 id="项目中使用npm私服的包" tabindex="-1">项目中使用npm私服的包 <a class="header-anchor" href="#项目中使用npm私服的包" aria-label="Permalink to &quot;项目中使用npm私服的包&quot;">​</a></h2><h3 id="方式一" tabindex="-1">方式一 <a class="header-anchor" href="#方式一" aria-label="Permalink to &quot;方式一&quot;">​</a></h3><p>需要在根目录下新增.npmrc文件，更改依赖安装地址。这种方式不用手动切换镜像源地址。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">registry=http://192.168.110.109:4873/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">registry=http://192.168.110.109:4873/</span></span></code></pre></div><p>然后运行 yarn / npm i 安装依赖</p><h3 id="方式二" tabindex="-1">方式二 <a class="header-anchor" href="#方式二" aria-label="Permalink to &quot;方式二&quot;">​</a></h3><p>每次安装依赖前需要手动切换。</p><p>nrm切换</p><h5 id="安装npm包" tabindex="-1"><strong>安装npm包</strong> <a class="header-anchor" href="#安装npm包" aria-label="Permalink to &quot;**安装npm包**&quot;">​</a></h5><p>1、将本地镜像源切换到对应服务器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">nrm use aicai</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">nrm use aicai</span></span></code></pre></div><p>2、再执行yarn/npm安装命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">yarn | npm install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">yarn | npm install</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/npm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const npm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  npm as default
};

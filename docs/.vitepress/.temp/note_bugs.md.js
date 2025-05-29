import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"问题记录","description":"","frontmatter":{"title":"问题记录","date":"2025-4-11","tags":["bugs"]},"headers":[],"relativePath":"note/bugs.md","filePath":"note/bugs.md","lastUpdated":1745310378000}');
const _sfc_main = { name: "note/bugs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于" tabindex="-1">关于 <a class="header-anchor" href="#关于" aria-label="Permalink to &quot;关于&quot;">​</a></h1><p>问题记录整理</p><h2 id="_1、node-sass安装失败" tabindex="-1">1、node-sass安装失败 <a class="header-anchor" href="#_1、node-sass安装失败" aria-label="Permalink to &quot;1、node-sass安装失败&quot;">​</a></h2><p>Node-sass安装失败解决</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/</span></span></code></pre></div><h2 id="_2、markdown语法参考" tabindex="-1">2、markdown语法参考 <a class="header-anchor" href="#_2、markdown语法参考" aria-label="Permalink to &quot;2、markdown语法参考&quot;">​</a></h2><h3 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">![</span><span style="${ssrRenderStyle({ "color": "#DBEDFF", "text-decoration": "underline" })}">图片alt</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">](</span><span style="${ssrRenderStyle({ "color": "#E1E4E8", "text-decoration": "underline" })}">图片地址</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF", "text-decoration": "underline" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#DBEDFF", "text-decoration": "underline" })}">&#39;图片title&#39;</span><span style="${ssrRenderStyle({ "color": "#9ECBFF", "text-decoration": "underline" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">图片alt就是显示在图片下面的文字，相当于对图片内容的解释。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">![</span><span style="${ssrRenderStyle({ "color": "#032F62", "text-decoration": "underline" })}">图片alt</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">](</span><span style="${ssrRenderStyle({ "color": "#24292E", "text-decoration": "underline" })}">图片地址</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62", "text-decoration": "underline" })}">&#39;&#39;图片title&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">图片alt就是显示在图片下面的文字，相当于对图片内容的解释。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加</span></span></code></pre></div><h3 id="超链接" tabindex="-1">超链接 <a class="header-anchor" href="#超链接" aria-label="Permalink to &quot;超链接&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">[</span><span style="${ssrRenderStyle({ "color": "#DBEDFF", "text-decoration": "underline" })}">超链接名</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">](</span><span style="${ssrRenderStyle({ "color": "#E1E4E8", "text-decoration": "underline" })}">超链接地址</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF", "text-decoration": "underline" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#DBEDFF", "text-decoration": "underline" })}">超链接title</span><span style="${ssrRenderStyle({ "color": "#9ECBFF", "text-decoration": "underline" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">title可加可不加</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">[</span><span style="${ssrRenderStyle({ "color": "#032F62", "text-decoration": "underline" })}">超链接名</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">](</span><span style="${ssrRenderStyle({ "color": "#24292E", "text-decoration": "underline" })}">超链接地址</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62", "text-decoration": "underline" })}">&quot;超链接title&quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">title可加可不加</span></span></code></pre></div><h3 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-label="Permalink to &quot;无序列表&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">-</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">+</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">*</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> 列表内容</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">注意：- + * 跟内容之间都要有一个空格</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E36209" })}">-</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E36209" })}">+</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E36209" })}">*</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> 列表内容</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">注意：- + * 跟内容之间都要有一个空格</span></span></code></pre></div><h3 id="有序列表" tabindex="-1">有序列表 <a class="header-anchor" href="#有序列表" aria-label="Permalink to &quot;有序列表&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">1.</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">2.</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">3.</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> 列表内容</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">注意：序号跟内容之间要有空格</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E36209" })}">1.</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E36209" })}">2.</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> 列表内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E36209" })}">3.</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> 列表内容</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">注意：序号跟内容之间要有空格</span></span></code></pre></div><h3 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">表头|表头|表头</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">---|:--:|---:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">内容|内容|内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">内容|内容|内容</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">第二行分割表头和内容。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">-</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> 有一个就行，为了对齐，多加了几个</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">文字默认居左</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">-两边加：表示文字居中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">-右边加：表示文字居右</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">注：原生的语法两边都要用 | 包起来。此处省略</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">表头|表头|表头</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">---|:--:|---:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">内容|内容|内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">内容|内容|内容</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">第二行分割表头和内容。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E36209" })}">-</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> 有一个就行，为了对齐，多加了几个</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">文字默认居左</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">-两边加：表示文字居中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">-右边加：表示文字居右</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">注：原生的语法两边都要用 | 包起来。此处省略</span></span></code></pre></div><h2 id="_3、mongodb启动" tabindex="-1">3、mongodb启动 <a class="header-anchor" href="#_3、mongodb启动" aria-label="Permalink to &quot;3、mongodb启动&quot;">​</a></h2><h4 id="启动命令" tabindex="-1">启动命令 <a class="header-anchor" href="#启动命令" aria-label="Permalink to &quot;启动命令&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">mongod --dbpath /usr/local/db --logpath /usr/local/var/log/mongodb/mongo.log --fork</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">mongod --dbpath /usr/local/db --logpath /usr/local/var/log/mongodb/mongo.log --fork</span></span></code></pre></div><h2 id="_4、nginx配置" tabindex="-1">4、nginx配置 <a class="header-anchor" href="#_4、nginx配置" aria-label="Permalink to &quot;4、nginx配置&quot;">​</a></h2><h3 id="本地反向代理配置" tabindex="-1">本地反向代理配置 <a class="header-anchor" href="#本地反向代理配置" aria-label="Permalink to &quot;本地反向代理配置&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">server {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        listen       8080;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        server_name  192.168.2.1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        #charset koi8-r;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        #   location / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            #	root /Users/chenpengfei/Desktop/workspace/项目/金谷/jg-website;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            #   location ~* ^.+\\.(jpg|jpeg|gif|png|ico|css|js|pdf|txt){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            #        root /Users/chenpengfei/Desktop/workspace/项目/金谷/jg-website;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            #        expires      7d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            #   }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            #   add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            #   index  index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        #  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">server {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        listen       8080;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        server_name  192.168.2.1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        #charset koi8-r;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        #   location / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            #	root /Users/chenpengfei/Desktop/workspace/项目/金谷/jg-website;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            #   location ~* ^.+\\.(jpg|jpeg|gif|png|ico|css|js|pdf|txt){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            #        root /Users/chenpengfei/Desktop/workspace/项目/金谷/jg-website;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            #        expires      7d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            #   }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            #   add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            #   index  index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        #  }</span></span></code></pre></div><h3 id="代理配置" tabindex="-1">代理配置 <a class="header-anchor" href="#代理配置" aria-label="Permalink to &quot;代理配置&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        location /api/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">		    proxy_pass  http://192.168.110.143:8801/api/;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        location /api/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">		    proxy_pass  http://192.168.110.143:8801/api/;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span></code></pre></div><h3 id="websocket-配置" tabindex="-1">websocket 配置 <a class="header-anchor" href="#websocket-配置" aria-label="Permalink to &quot;websocket 配置&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  location /websocket/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_redirect off;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_pass http://192.168.110.143:8000; #转发到你本地的9501端口 对应 ws 的端口</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_set_header X-Real_IP $remote_addr;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_set_header X-Forwarded-For $remote_addr:$remote_port;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            proxy_set_header Connection upgrade;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  location /websocket/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_redirect off;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_pass http://192.168.110.143:8000; #转发到你本地的9501端口 对应 ws 的端口</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_set_header Host $host;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_set_header X-Real_IP $remote_addr;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_set_header X-Forwarded-For $remote_addr:$remote_port;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            proxy_set_header Connection upgrade;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span></code></pre></div><h3 id="vue-router-history-配置" tabindex="-1">vue-router history 配置 <a class="header-anchor" href="#vue-router-history-配置" aria-label="Permalink to &quot;vue-router history 配置&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">location /h5/operatorsNumberH5 {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    alias  /data/web-admin-h5/h5/operatorsNumberH5;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    #root   /data/web-admin-h5;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    try_files $uri $uri/ /h5/operatorsNumberH5/index.html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">location /h5/operatorsNumberH5 {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    alias  /data/web-admin-h5/h5/operatorsNumberH5;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    #root   /data/web-admin-h5;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    try_files $uri $uri/ /h5/operatorsNumberH5/index.html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><h3 id="gzip-配置" tabindex="-1">gzip 配置 <a class="header-anchor" href="#gzip-配置" aria-label="Permalink to &quot;gzip 配置&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">server {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    listen       80;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    server_name  sandadmin.aicaihr.com;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 开启gzip</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 定义压缩级别</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 定义启用压缩文件类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_comp_level 3;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 重点：使用alias 一个域名要求跳转不同的项目 </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    location /h5/pushRegistration {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        alias  /data/web-admin-h5/h5/pushRegistration/;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        try_files $uri $uri/ /h5/pushRegistration/index.html;  # vue-router history 配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 重点：使用root </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    location / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        root   /data/web_admin/dist;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">     }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 代理 api转发的地址</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    location ^~ /api/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        proxy_pass http://127.0.0.1:8887/api/;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">server {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    listen       80;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    server_name  sandadmin.aicaihr.com;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 开启gzip</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 定义压缩级别</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 定义启用压缩文件类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_comp_level 3;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 重点：使用alias 一个域名要求跳转不同的项目 </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    location /h5/pushRegistration {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        alias  /data/web-admin-h5/h5/pushRegistration/;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        try_files $uri $uri/ /h5/pushRegistration/index.html;  # vue-router history 配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 重点：使用root </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    location / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        root   /data/web_admin/dist;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">     }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 代理 api转发的地址</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    location ^~ /api/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        proxy_pass http://127.0.0.1:8887/api/;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#开启和关闭gzip模式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip on|off;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    #gizp压缩起点，文件大于1k才进行压缩</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_min_length 1k;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_comp_level 1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    # 进行压缩的文件类型。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_static on</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_min_length 1k;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_comp_level 1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    #nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_static on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_vary on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_buffers 2 4k;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    gzip_http_version 1.1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">gzip on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">gzip_comp_level 3;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#开启和关闭gzip模式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip on|off;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    #gizp压缩起点，文件大于1k才进行压缩</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_min_length 1k;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_comp_level 1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    # 进行压缩的文件类型。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_static on</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_min_length 1k;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_comp_level 1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    #nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_static on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_vary on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_buffers 2 4k;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    gzip_http_version 1.1;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">gzip on;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">gzip_comp_level 3;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;</span></span></code></pre></div><h3 id="配置静态资源过期时间" tabindex="-1">配置静态资源过期时间 <a class="header-anchor" href="#配置静态资源过期时间" aria-label="Permalink to &quot;配置静态资源过期时间&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">location / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	root /mnt/dat1/test/tes-app;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	try_files uri/ /index.html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	#### kill cache</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	add_header Last-Modified  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	root /mnt/dat1/test/tes-app;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	access_log off;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">	expires 30d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">location /test/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                  root   /home;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                 #index  index.html index.htm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                  try_files $uri /h5/index.html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                  if ($request_filename ~* .*\\.(?:htm|html)$)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    add_header Cache-Control &quot;private, no-store, no-cache, must-revalidate, proxy-revalidate&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                 if ($request_filename ~* .*\\.(?:js|css)$)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                 {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                   expires      7d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                 }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                if ($request_filename ~* .*\\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                  expires      7d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">              }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">location / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	root /mnt/dat1/test/tes-app;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	index index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	try_files uri/ /index.html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	#### kill cache</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	add_header Last-Modified  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	root /mnt/dat1/test/tes-app;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	access_log off;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">	expires 30d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">location /test/ {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                  root   /home;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                 #index  index.html index.htm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                  try_files $uri /h5/index.html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                  if ($request_filename ~* .*\\.(?:htm|html)$)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                  {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    add_header Cache-Control &quot;private, no-store, no-cache, must-revalidate, proxy-revalidate&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                 if ($request_filename ~* .*\\.(?:js|css)$)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                 {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                   expires      7d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                 }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                if ($request_filename ~* .*\\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                  expires      7d;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">              }</span></span></code></pre></div><h2 id="_5、pm2常用操作" tabindex="-1">5、pm2常用操作 <a class="header-anchor" href="#_5、pm2常用操作" aria-label="Permalink to &quot;5、pm2常用操作&quot;">​</a></h2><h4 id="npm-方式启动-node" tabindex="-1">npm 方式启动 node <a class="header-anchor" href="#npm-方式启动-node" aria-label="Permalink to &quot;npm 方式启动 node&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># 语法：pm2 start npm --watch --name &lt;taskname&gt; -- run &lt;scriptname&gt;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># 其中 -- watch监听代码变化，-- name重命名任务名称，-- run后面跟脚本名字</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># pm2 start npm -- run dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># 语法：pm2 start npm --watch --name &lt;taskname&gt; -- run &lt;scriptname&gt;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># 其中 -- watch监听代码变化，-- name重命名任务名称，-- run后面跟脚本名字</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># pm2 start npm -- run dev</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/bugs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bugs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bugs as default
};

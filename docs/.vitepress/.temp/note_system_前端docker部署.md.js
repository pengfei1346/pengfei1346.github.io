import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"前端docker部署","description":"","frontmatter":{"sidebar":null,"title":"前端docker部署","date":"2024-03-14T00:00:00.000Z"},"headers":[],"relativePath":"note/system/前端docker部署.md","filePath":"note/system/前端docker部署.md","lastUpdated":1713165761000}');
const _sfc_main = { name: "note/system/前端docker部署.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="前端docker部署" tabindex="-1">前端docker部署 <a class="header-anchor" href="#前端docker部署" aria-label="Permalink to &quot;前端docker部署&quot;">​</a></h1><h2 id="docker基础" tabindex="-1">docker基础 <a class="header-anchor" href="#docker基础" aria-label="Permalink to &quot;docker基础&quot;">​</a></h2><blockquote><p>基本概念：</p></blockquote><p>镜像是静态模板，容器是镜像的实例化，是从镜像启动的一个可写、运行时环境，同一镜像可以启动多个容器，每个容器可以根据需要独立地进行个性化配置和操作。</p><p>Dockerfile为配置文件</p><h3 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h3><p>容器是镜像的一个可写副本，并且每个容器都有自己独立的运行空间，包括进程、网络配置等。即使是基于同一镜像创建出来的容器，它们之间也是隔离的，各自拥有自己的运行状态。</p><h3 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h3><p>镜像可以运行到容器里面，镜像是一个预配置的、包含了Nginx服务器环境的静态模板，记录了运行某个应用或服务所需要的操作系统环境、文件以及各种依赖和程序本身的项目信息。</p><p>前端主要通过docker根据打包好的项目文件去生成镜像。</p><p>镜像可以通过从官方仓库下载或者基于现有的镜像使用docker build命令通过Dockerfile自定义构建。</p><h3 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h3><p>Dockerfile是用来构建镜像的脚本，这个脚本里面有一些说明，主要是把前端生成的项目复制到容器中某个位置以及后续要用的nginx配置文件复制到容器中的某个位置.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 设置 nginx 作为静态资源服务器</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 指定基础镜像nginx:alpine</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">FROM nginx:alpine</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 将我们自定义的网站静态文件复制到容器中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">COPY dist/ /usr/share/nginx/html/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 将我们自定义的nginx配置文件复制到容器中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">COPY nginx.conf.template /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 暴露80端口</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">EXPOSE 80</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"># 启动 nginx 服务器</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 设置 nginx 作为静态资源服务器</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 指定基础镜像nginx:alpine</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">FROM nginx:alpine</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 将我们自定义的网站静态文件复制到容器中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">COPY dist/ /usr/share/nginx/html/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 将我们自定义的nginx配置文件复制到容器中</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">COPY nginx.conf.template /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 暴露80端口</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">EXPOSE 80</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"># 启动 nginx 服务器</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]</span></span></code></pre></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#基础镜像</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">FROM docker.io/nginx</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#Message(维修人员)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">MAINTAINER soldier&lt;soldier_wyyx@163.com.com&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#构建日期</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">ENV REFRESHED_AT 2020-04-14</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#修改nginx文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">RUN rm /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">ADD default.conf /etc/nginx/conf.d/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">COPY dist/  /usr/share/nginx/html/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#基础镜像</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">FROM docker.io/nginx</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#Message(维修人员)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">MAINTAINER soldier&lt;soldier_wyyx@163.com.com&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#构建日期</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">ENV REFRESHED_AT 2020-04-14</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#修改nginx文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">RUN rm /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">ADD default.conf /etc/nginx/conf.d/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">COPY dist/  /usr/share/nginx/html/</span></span></code></pre></div><h2 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h2><h3 id="travis-ci" tabindex="-1">Travis CI <a class="header-anchor" href="#travis-ci" aria-label="Permalink to &quot;Travis CI&quot;">​</a></h3><p>Travis CI是一个服务提供商，可以运行开源项目的自动化测试任务，其原理类似于Jenkins，但是提供了免费的开放平台，支持GitHub、Bitbucket、GitLab等代码托管平台的自动构建、测试和部署。Travis CI服务由 开发维护，主要面向开源项目提供在线编译及测试，目前已经成为最流行的开源CI/CD工具之一。 </p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://blog.csdn.net/LYZ0909/article/details/135773252?spm=1001.2101.3001.6650.5&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-135773252-blog-135817592.235%5Ev43%5Epc_blog_bottom_relevance_base9&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-135773252-blog-135817592.235%5Ev43%5Epc_blog_bottom_relevance_base9&amp;utm_relevant_index=10" target="_blank" rel="noreferrer">前端docker部署(通过nginx镜像部署)</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/前端docker部署.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __docker__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __docker__ as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"nodejs框架对比","description":"","frontmatter":{"sidebar":null,"title":"nodejs框架对比"},"headers":[],"relativePath":"frame/nodejs/nodejs框架对比.md","filePath":"frame/nodejs/nodejs框架对比.md","lastUpdated":1726627788000}');
const _sfc_main = { name: "frame/nodejs/nodejs框架对比.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nodejs框架对比" tabindex="-1">nodejs框架对比 <a class="header-anchor" href="#nodejs框架对比" aria-label="Permalink to &quot;nodejs框架对比&quot;">​</a></h1><h2 id="框架" tabindex="-1">框架 <a class="header-anchor" href="#框架" aria-label="Permalink to &quot;框架&quot;">​</a></h2><ul><li>express</li><li>koa</li><li>egg</li><li>midway</li><li>nest</li><li>...</li></ul><h2 id="express" tabindex="-1">express <a class="header-anchor" href="#express" aria-label="Permalink to &quot;express&quot;">​</a></h2><p>Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。</p><h2 id="koa" tabindex="-1">koa <a class="header-anchor" href="#koa" aria-label="Permalink to &quot;koa&quot;">​</a></h2><p>koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。</p><p>koa是一个拥有<strong>洋葱模型</strong>中间件的http处理库，一个请求，经过一系列的中间件，最后生成响应。Koa的大致实现原理：context上下文的保存和传递，中间件的管理和next方法的实现。</p><h2 id="egg" tabindex="-1">Egg <a class="header-anchor" href="#egg" aria-label="Permalink to &quot;Egg&quot;">​</a></h2><p>阿里团队基于Koa 来做的。Egg 奉行『约定优于配置』，按照一套统一的约定进行应用开发。</p><p>对于开发者来说，Egg因为是国产，所以文档比较好理解，也比较齐全。但是Egg JS有一个问题。一个是依赖注入的问题，导致所有的代码文件是按照功能来归类的，比如所有的控制器代码都会放置在同一个目录下，所有的服务代码也全部放置在 service 目录下，在模块众多的情况下，开发时需要来回切换分散在不同目录下的文件，给开发带来了不便。另一个是对TS的支持天生残缺（egg-ts-helpers），各种第三方库的支持也不受控制。</p><p>为了解决这些问题，阿里新出了Midway框架。</p><h2 id="midway" tabindex="-1">Midway <a class="header-anchor" href="#midway" aria-label="Permalink to &quot;Midway&quot;">​</a></h2><p>Midway 是Egg 的新一代版本。</p><p>midwayjs一个面向未来的云端一体 Node.js 框架。</p><p>Midway 是一个适用于构建 Serverless 服务，传统应用、微服务，小程序后端的 Node.js 框架。</p><p>Midway 对于依赖采用了自动扫描的机制，连手动注册依赖的一步都可以省去。</p><p>Midway 内部使用了自动扫描的机制，在应用初始化之前，会扫描所有的文件，包含装饰器的文件会 自动绑定 到容器。</p><p>同时使用TypeScript开发。但是也有人说midway是为了ts 而 ts。</p><h2 id="nest" tabindex="-1">Nest <a class="header-anchor" href="#nest" aria-label="Permalink to &quot;Nest&quot;">​</a></h2><p>Nest.js 背后是国外的 Trilon 团队。Nest js 是基于Express开发的， Koa.js 是 Express.js 原班人马用新理念重新创作的框架，相信是有一定的先进性的，而 Express.js 因为产生历史早，而有更好的生态基础，周边的插件、中间件什么的可能更丰富。</p><p>Nest属于前端ts大趋势下深度使用注解特性并提供各种增强开发体验的框架，它提供了一套完整的解决方案，包含了认证、数据库、路由、http状态码、安全、配置、请求等开箱即用的技术。</p><p>内置并完全支持 TypeScript（但仍然允许开发人员使用纯 JavaScript 编写代码）。</p><p>Nest js 采用命令行工具生成相应的文件，比较provider, module, controller, filter等等，所以无需手动添加相应的文件。</p><p>Nest js 毕竟是国外的框架，他的生态会比Midway的生态更好，这也是我为什么选择Nest js的原因。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frame/nodejs/nodejs框架对比.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nodejs____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nodejs____ as default
};

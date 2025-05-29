import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"sentry","description":"","frontmatter":{"sidebar":null,"title":"sentry","isTimeLine":true,"date":"2024-03-14T00:00:00.000Z","tags":["工程化","CI/CD"],"categories":["工程化"]},"headers":[],"relativePath":"front/CICD/sentry接入全流程记录.md","filePath":"front/CICD/sentry接入全流程记录.md","lastUpdated":1713842712000}');
const _sfc_main = { name: "front/CICD/sentry接入全流程记录.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sentry" tabindex="-1">sentry <a class="header-anchor" href="#sentry" aria-label="Permalink to &quot;sentry&quot;">​</a></h1><h2 id="sentry-私有部署搭建" tabindex="-1">sentry 私有部署搭建 <a class="header-anchor" href="#sentry-私有部署搭建" aria-label="Permalink to &quot;sentry 私有部署搭建&quot;">​</a></h2><h3 id="使用docker" tabindex="-1">使用docker <a class="header-anchor" href="#使用docker" aria-label="Permalink to &quot;使用docker&quot;">​</a></h3><ol><li>docker、docker compose安装 - 略</li><li>sentry部署安装 - <a href="/docs/note/system/前端监控.html">sentry 私有化部署</a></li></ol><h2 id="sentry配置" tabindex="-1">sentry配置 <a class="header-anchor" href="#sentry配置" aria-label="Permalink to &quot;sentry配置&quot;">​</a></h2><p><a href="https://blog.51cto.com/u_15168528/3882366" target="_blank" rel="noreferrer">Sentry For Vue 完整接入详解</a><a href="https://zhuanlan.zhihu.com/p/589889376?utm_id=0" target="_blank" rel="noreferrer">前端监控企业级实践——Sentry</a></p><h3 id="术语" tabindex="-1">术语 <a class="header-anchor" href="#术语" aria-label="Permalink to &quot;术语&quot;">​</a></h3><p>Event：事件。 每次产生的日志记录，每个event有很多元信息，包括事件级别，项目信息，环境等。可通过点击具体事件对应的“JSON”数据进行查看</p><p>Issue：问题。 相同的地方产生的一个异常称为一个Issue（是同一类问题的聚合）。假如在同一个位置发生了两次报错，那么会产生两个Event事件，但是只有一个Issue。</p><p>DSN：客户端（具体项目）密钥。 DSN是一个url，包含相关密钥信息，客户端与服务端（sentry服务器）就是通过这个DSN进行通信，上报错误信息的。</p><p>Auth Token：授权令牌。 授权令牌允许基于你的账户使用Sentry API，我们主要用到使用@sentry/cli进行上传sourceMap文件等操作时，sentry/cli会基于Auth Token进行调用相应API方法。</p><p>Org：组织名称。 对应公司部署的sentry服务器上的组织名称。</p><p>Release：版本号。</p><p>Project：客户端名称。（接入sentry的具体项目名）</p><p>Tag：标签。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/CICD/sentry接入全流程记录.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sentry_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sentry_______ as default
};

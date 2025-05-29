import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"浏览器同源策略","description":"","frontmatter":{"title":"浏览器同源策略","date":"2023-11-21T00:00:00.000Z","tags":null},"headers":[],"relativePath":"browser/浏览器同源策略.md","filePath":"browser/浏览器同源策略.md","lastUpdated":1708417368000}');
const _sfc_main = { name: "browser/浏览器同源策略.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器同源策略" tabindex="-1">浏览器同源策略 <a class="header-anchor" href="#浏览器同源策略" aria-label="Permalink to &quot;浏览器同源策略&quot;">​</a></h1><h2 id="浏览器同源策略-1" tabindex="-1">浏览器同源策略? <a class="header-anchor" href="#浏览器同源策略-1" aria-label="Permalink to &quot;浏览器同源策略?&quot;">​</a></h2><p>同源策略是浏览器的一种自我保护行为。所谓的同源指的是：<strong>协议，域名，端口</strong>均要相同</p><p><strong>特殊：</strong> 以下三个标签不受同源策略限制：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;img src=&quot;...&quot; /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;link href=&quot;...&quot; /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;script src=&quot;...&quot;&gt;&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;img src=&quot;...&quot; /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;link href=&quot;...&quot; /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;script src=&quot;...&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><h2 id="什么是跨域" tabindex="-1">什么是跨域 <a class="header-anchor" href="#什么是跨域" aria-label="Permalink to &quot;什么是跨域&quot;">​</a></h2><blockquote><p>跨域指的是浏览器不能执行其它域名下的脚本。它是由浏览器的同源策略限制的。</p><p>跨域请求时能够发送到服务器的，并且服务器也能过接受的请求并正常返回结果，只是结果被浏览器拦截了</p></blockquote><h2 id="跨域解决方案" tabindex="-1">跨域解决方案 <a class="header-anchor" href="#跨域解决方案" aria-label="Permalink to &quot;跨域解决方案&quot;">​</a></h2><h3 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h3><blockquote><p>它主要是利用script标签不受浏览器同源策略的限制，可以拿到从其他源传输过来的数据，需要服务端支持。</p></blockquote><p><strong>优点：</strong></p><p>兼容性比较好，可用于解决主流浏览器的跨域数据访问的问题</p><p><strong>缺点</strong></p><p>仅支持get请求，具有局限性，不安全，可能会受到XSS攻击</p><h3 id="跨域资源共享-cors" tabindex="-1">跨域资源共享（CORS） <a class="header-anchor" href="#跨域资源共享-cors" aria-label="Permalink to &quot;跨域资源共享（CORS）&quot;">​</a></h3><blockquote><p>定义了必须在访问跨域资源时，浏览器与服务器应该如何沟通.(使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败)</p></blockquote><p>服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。</p><p><strong>简单请求和复杂请求</strong></p><p><strong>简单请求：</strong> （满足以下两个条件，就是简单请求）</p><p>1.请求方法为以下三个之一：</p><ul><li>GET</li><li>POST</li><li>HEAD</li></ul><p>2.Content-Type的为以下三个之一：</p><ul><li>text-plain</li><li>multiparty/form-data</li><li>application/x-www-form-urlencoded</li></ul><p><strong>复杂请求</strong></p><p>正式发起请求之前会增加一次 OPTIONS 请求，也叫<strong>预检请求</strong>，判断服务端是否允许跨域请求。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/浏览器同源策略.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _______ as default
};

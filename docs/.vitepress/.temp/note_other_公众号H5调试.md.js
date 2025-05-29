import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"公众号H5调试","description":"","frontmatter":{"sidebar":null,"title":"公众号H5调试","isTimeLine":true,"date":"2020-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/other/公众号H5调试.md","filePath":"note/other/公众号H5调试.md","lastUpdated":1706683398000}');
const _sfc_main = { name: "note/other/公众号H5调试.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="公众号h5调试" tabindex="-1">公众号H5调试 <a class="header-anchor" href="#公众号h5调试" aria-label="Permalink to &quot;公众号H5调试&quot;">​</a></h1><h2 id="公众号h5本地调试" tabindex="-1">公众号H5本地调试 <a class="header-anchor" href="#公众号h5本地调试" aria-label="Permalink to &quot;公众号H5本地调试&quot;">​</a></h2><p><strong>背景</strong></p><p>公众号网页需要授权，微信通过oauth2机制回调域名，本地开发的时候会报错。</p><p><strong>本地调试</strong></p><p>背景： 微信公众号oauth2授权机制，本地需要获取code不方便调试。</p><p>实现：dns欺骗 - 通过修改本地host文件实现</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">1、找到对应文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">win: C:\\Windows\\System32\\drivers\\etc</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">mac /etc/host</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">2、修改配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#本地开发环境</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">#127.0.0.1 test.weixin.aicaihr.com</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">3、刷新dns，使配置立即生效</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">刷新：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">win:	ipconfig /flushdns</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">mac:  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">dscacheutil -flushcache</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">sudo killall -HUP mDNSResponder </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">4、vue-cli项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">devserver:{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    port: 80,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    host: &#39;xxx.xx.com&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">5、访问xxx.xx.com会优先访问本地dev项目</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">1、找到对应文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">win: C:\\Windows\\System32\\drivers\\etc</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">mac /etc/host</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">2、修改配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#本地开发环境</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">#127.0.0.1 test.weixin.aicaihr.com</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">3、刷新dns，使配置立即生效</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">刷新：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">win:	ipconfig /flushdns</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">mac:  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">dscacheutil -flushcache</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">sudo killall -HUP mDNSResponder </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">4、vue-cli项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">devserver:{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    port: 80,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    host: &#39;xxx.xx.com&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">5、访问xxx.xx.com会优先访问本地dev项目</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/other/公众号H5调试.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___H5__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___H5__ as default
};

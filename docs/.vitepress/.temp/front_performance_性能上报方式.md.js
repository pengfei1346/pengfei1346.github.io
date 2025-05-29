import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"性能上报方式","description":"","frontmatter":{"sidebar":null,"group":null,"title":"性能上报方式","isTimeLine":true,"date":"2023-11-17T00:00:00.000Z"},"headers":[],"relativePath":"front/performance/性能上报方式.md","filePath":"front/performance/性能上报方式.md","lastUpdated":1701683271000}');
const _sfc_main = { name: "front/performance/性能上报方式.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="性能上报方式" tabindex="-1">性能上报方式 <a class="header-anchor" href="#性能上报方式" aria-label="Permalink to &quot;性能上报方式&quot;">​</a></h1><h2 id="性能上报方式-1" tabindex="-1">性能上报方式 <a class="header-anchor" href="#性能上报方式-1" aria-label="Permalink to &quot;性能上报方式&quot;">​</a></h2><h3 id="_1、sendbeacon" tabindex="-1">1、sendbeacon <a class="header-anchor" href="#_1、sendbeacon" aria-label="Permalink to &quot;1、sendbeacon&quot;">​</a></h3><h3 id="_2、gif" tabindex="-1">2、gif <a class="header-anchor" href="#_2、gif" aria-label="Permalink to &quot;2、gif&quot;">​</a></h3><h4 id="使用gif上报的原因" tabindex="-1">使用GIF上报的原因 <a class="header-anchor" href="#使用gif上报的原因" aria-label="Permalink to &quot;使用GIF上报的原因&quot;">​</a></h4><p>向服务器端上报数据，可以通过请求接口，请求普通文件，或者请求图片资源的方式进行。只要能上报数据，无论是请求GIF文件还是请求js文件或者是调用页面接口，服务器端其实并不关心具体的上报方式。那为什么所有系统都统一使用了请求GIF图片的方式上报数据呢？</p><p><strong>防止跨域</strong> 一般而言，打点域名都不是当前域名，所以所有的接口请求都会构成跨域。而跨域请求很容易出现由于配置不当被浏览器拦截并报错，这是不能接受的。但图片的src属性并不会跨域，并且同样可以发起请求。（排除接口上报）</p><p><strong>防止阻塞页面加载，影响用户体验</strong></p><p>通常，创建资源节点后只有将对象注入到浏览器DOM树后，浏览器才会实际发送资源请求。反复操作DOM不仅会引发性能问题，而且载入js/css资源还会阻塞页面渲染，影响用户体验。 但是图片请求例外。构造图片打点不仅不用插入DOM，只要在js中new出Image对象就能发起请求，而且还没有阻塞问题，在没有js的浏览器环境中也能通过img标签正常打点，这是其他类型的资源请求所做不到的。（排除文件方式）</p><p><strong>相比PNG/JPG，GIF的体积最小</strong> 最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节。</p><p>同样的响应，GIF可以比BMP节约41%的流量，比PNG节约35%的流量。</p><p>并且大多采用的是1*1像素的透明GIF来上报</p><p>1x1像素是最小的合法图片。而且，因为是通过图片打点，所以图片最好是透明的，这样一来不会影响页面本身展示效果，二者表示图片透明只要使用一个二进制位标记图片是透明色即可，不用存储色彩空间数据，可以节约体积。</p><h3 id="_3、xhr" tabindex="-1">3、xhr <a class="header-anchor" href="#_3、xhr" aria-label="Permalink to &quot;3、xhr&quot;">​</a></h3></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/performance/性能上报方式.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ______ as default
};

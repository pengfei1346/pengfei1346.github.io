import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Micro App","description":"","frontmatter":{"sidebar":null,"title":"Micro App","step":6,"isTimeLine":true,"date":"2022-09-14T00:00:00.000Z"},"headers":[],"relativePath":"note/microapp/Mirco-App.md","filePath":"note/microapp/Mirco-App.md","lastUpdated":1745310416000}');
const _sfc_main = { name: "note/microapp/Mirco-App.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="micro-app" tabindex="-1">Micro App <a class="header-anchor" href="#micro-app" aria-label="Permalink to &quot;Micro App&quot;">​</a></h1><h2 id="micro-app-1" tabindex="-1">Micro App <a class="header-anchor" href="#micro-app-1" aria-label="Permalink to &quot;Micro App&quot;">​</a></h2><p>Micro App 是京东出的一款基于 Web Component 原生组件进行渲染的微前端框架，不同于目前流行的开源框架，它从组件化的思维实现微前端，旨在降低上手难度、提升工作效率。</p><p>官方demo：Micro App 正式版本0.8版本， 1.0版本还是beta阶段，但是维护者在issue比较活跃</p><ul><li>0.x版本 vite支持不是很好，使用的时候需要关闭沙箱</li><li>1.x版本 支持vite，需要采用iframe沙箱模式，这点和wujie的方案一样了，都是webComponent + iframe</li></ul><h2 id="京东-micro-app" tabindex="-1">京东 micro-app <a class="header-anchor" href="#京东-micro-app" aria-label="Permalink to &quot;京东 micro-app&quot;">​</a></h2><p>micro-app是京东零售推出的一款微前端框架。该框架以类WebComponent的方式进行渲染，采用了组件化的思维来实现微前端，目的在于降低上手难度并提升开发效率。</p><h3 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h3><p>micro-app借鉴了WebComponent的思想，它通过CustomElement结合自定义的Shadow DOM，将微前端封装成一个类WebComponent组件，从而实现微前端的组件化渲染。</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><p>简单易用：micro-app的使用方式类似于iframe，上手简单。 侵入性低：对原有代码的影响微乎其微。 功能丰富：micro-app提供了js沙箱、样式隔离、元素隔离、预加载、数据通信、静态资源补全等丰富的功能。隔离机制类似于qiankun，例如，样式隔离基于scoped css，js沙箱机制基于Proxy。 零依赖：micro-app不依赖于任何第三方库。</p><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><p>静态资源补全问题：静态资源补全是基于父应用的，而非子应用。这需要开发者自己手动解决。 接入成本：虽然接入成本相比qiankun有所降低，但路由依旧存在依赖。 路由状态保持问题：在多应用激活后，无法保持各子应用的路由状态，刷新后全部丢失。 隔离问题：css沙箱使用scoped css思想，但无法绝对隔离，例如可能存在样式名冲突。js沙箱在做全局变量查找缓存时，虽然性能有所优化，但仍存在隔离问题。 Vite运行支持：虽然支持vite运行，但必须使用plugin改造子应用，且js代码无法进行沙箱隔离。 浏览器兼容性：对于不支持webcomponent的浏览器，micro-app没有进行降级处理。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/microapp/Mirco-App.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MircoApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MircoApp as default
};

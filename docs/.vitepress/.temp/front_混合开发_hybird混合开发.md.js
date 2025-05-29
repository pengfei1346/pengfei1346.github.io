import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img.b1e01e27.png";
const __pageData = JSON.parse('{"title":"hybird混合开发","description":"","frontmatter":{"sidebar":null,"group":null,"title":"hybird混合开发","isTimeLine":true,"date":"11-10-2023"},"headers":[],"relativePath":"front/混合开发/hybird混合开发.md","filePath":"front/混合开发/hybird混合开发.md","lastUpdated":1701327138000}');
const _sfc_main = { name: "front/混合开发/hybird混合开发.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hybird混合开发" tabindex="-1">hybird混合开发 <a class="header-anchor" href="#hybird混合开发" aria-label="Permalink to &quot;hybird混合开发&quot;">​</a></h1><p>参考： <a href="https://juejin.cn/post/7102292121893879821?searchId=202311281138374895558C8ACF1A3D8C55" target="_blank" rel="noreferrer">https://juejin.cn/post/7102292121893879821?searchId=202311281138374895558C8ACF1A3D8C55</a></p><h2 id="hybrid-app" tabindex="-1">Hybrid app <a class="header-anchor" href="#hybrid-app" aria-label="Permalink to &quot;Hybrid app&quot;">​</a></h2><p>在原生 app中， 使用webview来加载html页面，把web端的页面展示出来，然后在Native app中的网页就像被放在了一个沙箱中，与外界隔离，访问不到一些外部的方法，无法调用一些手机端的api。</p><h2 id="jsbridge" tabindex="-1">JSBridge <a class="header-anchor" href="#jsbridge" aria-label="Permalink to &quot;JSBridge&quot;">​</a></h2><p>它就像一个桥梁，连接这web端和native端，让native可以调用web端的代码，让web端可以调用native端的代码</p><p><img${ssrRenderAttr("src", _imports_0)} alt="img.png"></p><h2 id="开发具体流程" tabindex="-1">开发具体流程 <a class="header-anchor" href="#开发具体流程" aria-label="Permalink to &quot;开发具体流程&quot;">​</a></h2><p>1.native app 开发人员完成webview布局 2.通过webview去给window对象里面添加JSBridge对象 3.提供文档</p><h3 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h3><p><strong>js调用安卓</strong>：</p><p>1.fnName(str) 传参的情况 --fnname:方法名，web端通过 window.AndroidJSBridge.fnName(&#39;xxxx&#39;) 调用, window.AndroidJSBridge.XX为固定写法，后面加方法名，参数类型为字符串，传入对象时，要转一下JSON.strinify</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">WebSettings webSettings = webview.getSettings();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">webSettings.setJavaScriptEnabled(true);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">webview.loadUrl(&quot;file:///android_asset/html.html&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 这里的this，一般是指加载web页面的context，name指的是js页面调用方法前的一个对象，具体看js代码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">webview.addJavascriptInterface(MainActivity.this,&quot;android&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">webview.addJavascriptInterface(this,&quot;name&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">WebSettings webSettings = webview.getSettings();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">webSettings.setJavaScriptEnabled(true);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">webview.loadUrl(&quot;file:///android_asset/html.html&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 这里的this，一般是指加载web页面的context，name指的是js页面调用方法前的一个对象，具体看js代码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">webview.addJavascriptInterface(MainActivity.this,&quot;android&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">webview.addJavascriptInterface(this,&quot;name&quot;);</span></span></code></pre></div><p>2.fnName() 不传参的情况,获取函数的返回值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">var</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> result </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> window.AndroidJSBridge.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">fnName</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">console.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">log</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(result);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">var</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> result </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> window.AndroidJSBridge.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">fnName</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">console.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">log</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(result);</span></span></code></pre></div><p><strong>安卓调用js</strong></p><p>方法必须绑定在window对象下</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">window.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">fnName</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">str</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;web提供给native的方法&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// java代码参考 调用fnName</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//public void  javaCallJS(){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//    webView.loadUrl(&quot;javascript:fnName(&#39;call from java&#39;)&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">window.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">fnName</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> (</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">str</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;web提供给native的方法&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// java代码参考 调用fnName</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//public void  javaCallJS(){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//    webView.loadUrl(&quot;javascript:fnName(&#39;call from java&#39;)&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//}</span></span></code></pre></div><p>vue框架上 方法也需要挂在window下</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">mounted() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    //将要给原生调用的方法挂载到 window 上面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    window.callJsFunction = this.callJsFunction</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">data() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    return {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    	msg: &quot;哈哈&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">methods: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    callJsFunction(str) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        this.msg = &quot;我通过原生方法改变了文字&quot; + str</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        return &quot;js调用成功&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">//java中 参考</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    @Override</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    public void callVueJS() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        tbsWebView.post(new Runnable() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            @Override</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            public void run() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">              webView.loadUrl(&quot;javascript:callJsFunction(&#39;soloname&#39;)&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">        });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">mounted() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    //将要给原生调用的方法挂载到 window 上面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    window.callJsFunction = this.callJsFunction</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">data() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    return {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    	msg: &quot;哈哈&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">methods: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    callJsFunction(str) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        this.msg = &quot;我通过原生方法改变了文字&quot; + str</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        return &quot;js调用成功&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">//java中 参考</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    @Override</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    public void callVueJS() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        tbsWebView.post(new Runnable() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            @Override</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            public void run() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">              webView.loadUrl(&quot;javascript:callJsFunction(&#39;soloname&#39;)&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">        });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span></code></pre></div><h3 id="ios" tabindex="-1">IOS <a class="header-anchor" href="#ios" aria-label="Permalink to &quot;IOS&quot;">​</a></h3><p><strong>提供给web端调用的方法</strong></p><p>固定写法window.webkit.messageHandlers.xxx.postMessage({...})</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">window.webkit.messageHandlers.fnName.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">postMessage</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">                msg: str</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">window.webkit.messageHandlers.fnName.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">postMessage</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">                msg: str</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">});</span></span></code></pre></div><p><strong>web提供给native的方法</strong></p><p>方法必须绑定在window对象下</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">window.</span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">fnName</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">function</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">str</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;web提供给native的方法&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">window.</span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">fnName</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">function</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> (</span><span style="${ssrRenderStyle({ "color": "#E36209" })}">str</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">return</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;web提供给native的方法&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/混合开发/hybird混合开发.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hybird____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hybird____ as default
};

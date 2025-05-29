import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"监控实现","description":"","frontmatter":{"sidebar":null,"title":"监控实现","isTimeLine":true,"date":"2024-01-14T00:00:00.000Z","tags":null},"headers":[],"relativePath":"note/case/vedio.md","filePath":"note/case/vedio.md","lastUpdated":1705993081000}');
const _sfc_main = { name: "note/case/vedio.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="监控实现" tabindex="-1">监控实现 <a class="header-anchor" href="#监控实现" aria-label="Permalink to &quot;监控实现&quot;">​</a></h1><h2 id="监控实现-视频文件流" tabindex="-1">监控实现-视频文件流 <a class="header-anchor" href="#监控实现-视频文件流" aria-label="Permalink to &quot;监控实现-视频文件流&quot;">​</a></h2><p>video.js + videojs-contrib-hls</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm i video.js -save -D  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">npm i videojs-contrib-hls -save -D  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">//导入 css 与 videojs (可全局，可只在使用的页面)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">import &quot;video.js/dist/video-js.css&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">import videojs from &quot;video.js&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">&lt;video ref=&quot;videoPlayer&quot; style=&quot;width: 100%; height: 100%&quot; class=&quot;video-js videoNmae&quot;&gt;&lt;/video&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">data(){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    return {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      optionc: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        autoplay: true,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        controls: true,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        muted: true,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        sources: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            src: &quot;视频地址&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            type: &quot;application/x-mpegURL&quot;, // 监控类直播视频流为此格式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            // src: &#39;&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            // type: &quot;video/mp4&quot;, // 本地video视频播放为此格式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      },}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> mounted() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    // 将方法包装成异步</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        this.playerd = videojs(   // playerd 为data中的变量，初始值可设置为null</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          this.$refs.videoPlayer,  // this.$refs.videoPlayer为放置视频的dom</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          this.options,   // this.options为视频的配置，可根据官方文档自行配置，下面有我的配置项</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          function onPlayerReady() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            console.log(&quot;onPlayerReady&quot;, this);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        this.playerda = videojs(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          this.$refs.videoPlayera,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          this.optionc,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          function onPlayerReady() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            console.log(&quot;onPlayerReady&quot;, this);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">          }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">      });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 定时器的清理</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    beforeDestroy() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">         //clearInterval(this.int)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">       // var videoTime = document.getElementById(&quot;myvideo&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        videoTime.pause();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm i video.js -save -D  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">npm i videojs-contrib-hls -save -D  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">//导入 css 与 videojs (可全局，可只在使用的页面)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">import &quot;video.js/dist/video-js.css&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">import videojs from &quot;video.js&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">&lt;video ref=&quot;videoPlayer&quot; style=&quot;width: 100%; height: 100%&quot; class=&quot;video-js videoNmae&quot;&gt;&lt;/video&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">data(){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    return {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      optionc: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        autoplay: true,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        controls: true,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        muted: true,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        sources: [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            src: &quot;视频地址&quot;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            type: &quot;application/x-mpegURL&quot;, // 监控类直播视频流为此格式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            // src: &#39;&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            // type: &quot;video/mp4&quot;, // 本地video视频播放为此格式</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      },}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> mounted() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    // 将方法包装成异步</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        this.playerd = videojs(   // playerd 为data中的变量，初始值可设置为null</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          this.$refs.videoPlayer,  // this.$refs.videoPlayer为放置视频的dom</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          this.options,   // this.options为视频的配置，可根据官方文档自行配置，下面有我的配置项</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          function onPlayerReady() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            console.log(&quot;onPlayerReady&quot;, this);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        this.playerda = videojs(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          this.$refs.videoPlayera,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          this.optionc,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          function onPlayerReady() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            console.log(&quot;onPlayerReady&quot;, this);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">          }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">      });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 定时器的清理</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    beforeDestroy() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">         //clearInterval(this.int)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">       // var videoTime = document.getElementById(&quot;myvideo&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        videoTime.pause();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/case/vedio.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vedio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vedio as default
};

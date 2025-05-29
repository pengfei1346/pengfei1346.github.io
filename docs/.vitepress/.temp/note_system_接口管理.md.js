import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"接口管理","description":"","frontmatter":{"sidebar":null,"title":"接口管理"},"headers":[],"relativePath":"note/system/接口管理.md","filePath":"note/system/接口管理.md","lastUpdated":1724206641000}');
const _sfc_main = { name: "note/system/接口管理.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="api-管理" tabindex="-1">API 管理 <a class="header-anchor" href="#api-管理" aria-label="Permalink to &quot;API 管理&quot;">​</a></h1><h2 id="api-管理-1" tabindex="-1">API 管理 <a class="header-anchor" href="#api-管理-1" aria-label="Permalink to &quot;API 管理&quot;">​</a></h2><blockquote><p>好处</p></blockquote><p>API 管理的过程是在逐步完善的，从以工程师视角管理到更规范化的基于管理工具的管理；“口口相传”会随着工程师的更替而逐渐失去管控，直到无法追溯； 基于文档的管理，从实际情况来看，两次变更之后就会慢慢的弱化文档的地位（改一次接口，就得改一次文档），取而代之的还是工程师主导；还有一点是，不管是基于“口头协定”还是文档，接口在没有交付之前是不具备可测试性的，而且面向的主体单一，一旦使用端的数量多了，资源分散和协调的人力成本将指数级增长。 API 管理不仅仅是提高技术能力，而是帮助推动业务更上一层楼，好的 API 管理可以带给我们的收益是非常大的。</p><ul><li>【敏捷开发和快速业务支撑】：协助我们能够快速的创建、共享、监控和调整 API，不需要额外的协同沟通成本而导致生产力下降。</li><li>【工作流程自动化】：可以从 coding 到 CI 再到 API 管理工作实现自动化同步，绕过繁琐的 API 设计、审核、测试沟通等等；与现有的基础设施绑定起来，提高效率。</li><li>【维护数据完整性和安全性】：不会随着人员变动而导致 API 数据丢失，API 的变更可以通过管理平台的 log 逐一追溯。</li></ul><p>API设计、调试、文档、自动化测试 设计规范、自动化工具套件建设、API 管理建设 mock数据</p><h2 id="方案选择" tabindex="-1">方案选择 <a class="header-anchor" href="#方案选择" aria-label="Permalink to &quot;方案选择&quot;">​</a></h2><h3 id="_1、第三方" tabindex="-1">1、第三方 <a class="header-anchor" href="#_1、第三方" aria-label="Permalink to &quot;1、第三方&quot;">​</a></h3><ul><li><p>apipost</p></li><li><p>apifox</p></li><li><p>私有部署收费</p></li><li><p>对外开放文档域名不是自己的</p></li></ul><h3 id="_2、开源版" tabindex="-1">2、开源版 <a class="header-anchor" href="#_2、开源版" aria-label="Permalink to &quot;2、开源版&quot;">​</a></h3><ul><li>yapi</li><li>hoppscotch</li><li>eolinker4.0开源</li><li>NEI网易开源</li></ul><p>YApi具有以下特点：</p><p>可视化接口管理：YApi提供了可视化的接口管理界面，可以方便地创建、编辑和查看接口文档。 接口Mock：YApi可以根据接口文档自动生成Mock数据，方便前端和后端开发人员进行接口调试。 接口测试：YApi提供了接口测试功能，可以方便地对接口进行测试并查看测试结果。 团队协作：YApi支持团队协作，可以创建多个团队，并对接口文档进行权限管理。 导入导出：YApi支持导入和导出接口文档，方便在不同环境之间进行接口文档的迁移和共享。</p><h3 id="_3、-自己开发" tabindex="-1">3、 自己开发 <a class="header-anchor" href="#_3、-自己开发" aria-label="Permalink to &quot;3、 自己开发&quot;">​</a></h3><ul><li>基于yapi二次开发</li><li>丁香园开源项目</li><li>github - 摸鱼api项目</li><li>自行搭建 （node + mongodb + 前端）</li></ul><h3 id="部署问题记录" tabindex="-1">部署问题记录 <a class="header-anchor" href="#部署问题记录" aria-label="Permalink to &quot;部署问题记录&quot;">​</a></h3><ul><li>linux部署mongodb</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">// 添加环境变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">export PATH=&quot;/usr/local/Cellar/mongodb-community/7.0.12/bin/:\${PATH}&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">// 添加环境变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">export PATH=&quot;/usr/local/Cellar/mongodb-community/7.0.12/bin/:\${PATH}&quot;</span></span></code></pre></div><ul><li>eolinker4 部署</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">rap2 doclever eolinker4 yapi easydoc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">rap2 doclever eolinker4 yapi easydoc</span></span></code></pre></div><ul><li>docker 修改镜像源</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">[docker-ce-stable]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">name=Docker CE Stable - $basearch</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7.9/x86_64/stable</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">enabled=1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">gpgcheck=1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">yum config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">yum install docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">docker --version</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">docker compose --version</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">docker info</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">time docker pull node:latest</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">docker pull docker.rainbond.cc/library/node:20</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">[docker-ce-stable]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">name=Docker CE Stable - $basearch</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7.9/x86_64/stable</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">enabled=1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">gpgcheck=1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">yum config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">yum install docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">docker --version</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">docker compose --version</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">docker info</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">time docker pull node:latest</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">docker pull docker.rainbond.cc/library/node:20</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/接口管理.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/img_8.8e18d65a.png";
const _imports_1 = "/assets/img_9.140a440a.png";
const __pageData = JSON.parse('{"title":"monorepo项目管理方式","description":"","frontmatter":{"sidebar":null,"title":"monorepo项目管理方式","step":6,"isTimeLine":true,"date":"2023-09-14T00:00:00.000Z","tags":["CI/CD"],"categories":["工程化"]},"headers":[],"relativePath":"front/CICD/monorepo.md","filePath":"front/CICD/monorepo.md","lastUpdated":1724228782000}');
const _sfc_main = { name: "front/CICD/monorepo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="monorepo项目管理方式" tabindex="-1">monorepo项目管理方式 <a class="header-anchor" href="#monorepo项目管理方式" aria-label="Permalink to &quot;monorepo项目管理方式&quot;">​</a></h1><h2 id="monorepo项目管理方式-单仓库多模块" tabindex="-1">monorepo项目管理方式 --单仓库多模块 <a class="header-anchor" href="#monorepo项目管理方式-单仓库多模块" aria-label="Permalink to &quot;monorepo项目管理方式 --单仓库多模块&quot;">​</a></h2><p>痛点： 多个项目运维成本、维护成本、公共代码无法通用</p><p>搭建过程： 选型 -&gt; 设计拆分 -&gt; 代码实现 -&gt; 部署</p><p>构建效率 ， 依赖优化</p><p>每个子项目都可以独立打包、独立部署</p><p>提取公共组件、逻辑，更好的工程化，模块化 依赖统一 构建配置统一</p><ul><li>集中式代码库： 所有项目代码和相关资源都集中存储在一个单一的代码库中，而不是分散在多个独立的代码库中。</li><li>共享依赖： 不同的项目、模块或组件可以共享依赖库，避免重复的依赖安装和维护，提高代码复用和开发效率。</li><li>一致的 版本控制 ： 所有代码在同一个版本控制系统中管理，便于跟踪变更、版本控制和回滚。</li><li>统一的构建和测试： 通过Monorepo可以统一管理构建和测试过程，确保不同模块或组件之间的兼容性和一致性。</li><li>协作和共享： Monorepo促进了团队成员之间的协作和交流，提高代码共享、知识传递和团队合作能力。</li></ul><h2 id="单仓vs多仓" tabindex="-1">单仓vs多仓 <a class="header-anchor" href="#单仓vs多仓" aria-label="Permalink to &quot;单仓vs多仓&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="img_8.png"></p><p>monorepo优缺点:</p><p><img${ssrRenderAttr("src", _imports_1)} alt="img_9.png"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/CICD/monorepo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const monorepo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  monorepo as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"系统划分","description":"","frontmatter":{"sidebar":null,"title":"系统划分"},"headers":[],"relativePath":"front/CICD/系统划分.md","filePath":"front/CICD/系统划分.md","lastUpdated":1708417368000}');
const _sfc_main = { name: "front/CICD/系统划分.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="系统划分" tabindex="-1">系统划分 <a class="header-anchor" href="#系统划分" aria-label="Permalink to &quot;系统划分&quot;">​</a></h1><p>公司的内部系统通常是由公司自行开发或委托第三方开发的软件系统，用于管理企业内部的各种业务和流程。系统的名称可能因公司和具体功能而异，但常见的内部系统包括：</p><ul><li>办公自动化系统（OA）：主要用于管理和协调公司内部的日常工作流程。</li><li>项目管理系统：用于跟踪和管理企业各个项目的进度、成本等关键信息。</li><li>人事管理系统：负责管理员工的信息档案、考勤、薪资等事务性工作。</li><li>财务信息系统：提供财务管理相关的各种工具和服务，如账务处理、报表生成等。</li><li>CRM 系统：客户关系管理系统，主要用于获取、追踪和分析客户信息和需求。</li><li>ERP 系统：企业管理系统的一种，整合了企业的所有资源信息，帮助企业实现全面信息化。</li><li>安全管理系统：用于保障公司信息安全和合规性的系统，例如防火墙、入侵检测系统等。</li><li>物流管理系统：负责公司物资采购入库、出库等业务的数字化管理。</li><li>客户服务系统：为客户提供在线咨询、投诉和建议的渠道，以提高服务质量。需要注意的是，不同行业和规模的公司可能会有不同的内部系统和应用。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("front/CICD/系统划分.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};

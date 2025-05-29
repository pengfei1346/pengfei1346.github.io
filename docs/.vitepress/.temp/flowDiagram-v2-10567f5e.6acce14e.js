import { p as parser$1, f as flowDb } from "./flowDb-a32fc02b.99d048e6.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-a35956af.0c475712.js";
import { aq as setConfig } from "./app.js";
import "./layout-94e1e85f.343ef3de.js";
import "./index-20c9cf41.e4d217bd.js";
import "./edges-9f0d1f4d.3e69262f.js";
import "./createText-77e212b0.aff83fbf.js";
import "./line-b015ae81.1a0d06a0.js";
import "./array-b7dcf730.b7dcf730.js";
import "./path-39bad7e2.39bad7e2.js";
import "vue";
import "vue/server-renderer";
import "./plugin-vue_export-helper.cc2b3d55.js";
import "element-plus";
import "@element-plus/icons-vue";
const diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};

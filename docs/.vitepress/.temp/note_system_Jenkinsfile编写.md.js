import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"note/system/Jenkinsfile编写.md","filePath":"note/system/Jenkinsfile编写.md","lastUpdated":1713776272000}');
const _sfc_main = { name: "note/system/Jenkinsfile编写.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Jenkinsfile使用Groovy语言编写，因此它遵循Groovy语法规则</p><p>Jenkinsfile必须以&quot;pipeline&quot;关键字开头，表示这是一个Pipeline类型的Jenkinsfile。 Jenkinsfile可以包含多个阶段（stage），每个阶段用&quot;stage&quot;关键字定义。 在每个阶段中，我们可以定义一系列的步骤（step），每个步骤用&quot;steps&quot;关键字定义。 在步骤中，我们可以使用Jenkins提供的内置函数和命令，比如&quot;sh&quot;命令用于执行Shell脚本，&quot;echo&quot;命令用于输出信息等。 Jenkinsfile还可以包含一些全局的配置，比如代理设置、环境变量等，这些配置可以在Jenkinsfile的顶部用&quot;pipeline&quot;关键字定义。</p><h3 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    environment {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        NAME = &#39;World&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;echo &quot;Building...&quot;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Test&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;echo &quot;Testing...&quot;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;echo &quot;Deploying...&quot;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    environment {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        NAME = &#39;World&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;echo &quot;Building...&quot;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Test&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;echo &quot;Testing...&quot;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;echo &quot;Deploying...&quot;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><h3 id="部署maven项目" tabindex="-1">部署maven项目 <a class="header-anchor" href="#部署maven项目" aria-label="Permalink to &quot;部署maven项目&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    environment {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        BUILD_VERSION = sh(script: &#39;git rev-parse --short HEAD&#39;, returnStdout: true).trim()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    parameters {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        string(name: &#39;DEPLOY_ENV&#39;, defaultValue: &#39;dev&#39;, description: &#39;Environment to deploy to&#39;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;mvn clean package -Dbuild.version=\${BUILD_VERSION}&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Test&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;mvn test&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                expression {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    params.DEPLOY_ENV == &#39;prod&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;kubectl apply -f deployment-prod.yaml&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    environment {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        BUILD_VERSION = sh(script: &#39;git rev-parse --short HEAD&#39;, returnStdout: true).trim()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    parameters {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        string(name: &#39;DEPLOY_ENV&#39;, defaultValue: &#39;dev&#39;, description: &#39;Environment to deploy to&#39;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;mvn clean package -Dbuild.version=\${BUILD_VERSION}&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Test&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;mvn test&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                expression {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    params.DEPLOY_ENV == &#39;prod&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;kubectl apply -f deployment-prod.yaml&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><h3 id="部署一个前端项目" tabindex="-1">部署一个前端项目 <a class="header-anchor" href="#部署一个前端项目" aria-label="Permalink to &quot;部署一个前端项目&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                nodejs(&#39;node16&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        if hash pnpm 2&gt;/dev/null; </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        then</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                            echo &quot;pnpm&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        else</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                            npm i pnpm -g --registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        fi</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        pnpm i</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        pnpm run build</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                echo &#39;构建完成&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Zip&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    tar -zcvf \${JOB_BASE_NAME}.tgz ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    rm -rf ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    mv \${JOB_BASE_NAME}.tgz ./dist</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                echo &#39;打包完成&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;tencent&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                nodejs(&#39;node16&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        if hash pnpm 2&gt;/dev/null; </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        then</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                            echo &quot;pnpm&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        else</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                            npm i pnpm -g --registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        fi</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        pnpm i</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        pnpm run build</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                echo &#39;构建完成&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Zip&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    tar -zcvf \${JOB_BASE_NAME}.tgz ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    rm -rf ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    mv \${JOB_BASE_NAME}.tgz ./dist</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                echo &#39;打包完成&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;tencent&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><h3 id="多环境部署流水线" tabindex="-1">多环境部署流水线 <a class="header-anchor" href="#多环境部署流水线" aria-label="Permalink to &quot;多环境部署流水线&quot;">​</a></h3><p>有时候我们会遇到多环境部署的情况，如开发坏境，生产环境等，大概就是我们通过在流水线添加一个部署坏境的参数来控制，在每次构建前选择一下部署的坏境，具体脚本如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    parameters {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        choice(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            description: &#39;你需要哪个机器进行部署?&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            name: &#39;deploy_hostname&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            choices: [&#39;tencent&#39;, &#39;dev01&#39;, &#39;tencent、dev01&#39;]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        )</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                nodejs(&#39;node16&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        if hash pnpm 2&gt;/dev/null; </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        then</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                            echo &quot;pnpm&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        else</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                            npm i pnpm -g --registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        fi</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        pnpm i</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        pnpm run build</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                echo &#39;构建完成&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Zip&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    tar -zcvf \${JOB_BASE_NAME}.tgz ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    rm -rf ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    mv \${JOB_BASE_NAME}.tgz ./dist</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Deploy to tencent&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                expression { deploy_hostname == &#39;tencent&#39; }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;tencent&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Deploy to dev01&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                expression { deploy_hostname == &#39;dev01&#39; }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;dev01&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Deploy to tencent、dev01&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                expression { deploy_hostname == &#39;tencent、dev01&#39; }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;tencent&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;dev01&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    agent any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    parameters {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        choice(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            description: &#39;你需要哪个机器进行部署?&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            name: &#39;deploy_hostname&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            choices: [&#39;tencent&#39;, &#39;dev01&#39;, &#39;tencent、dev01&#39;]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        )</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                nodejs(&#39;node16&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        if hash pnpm 2&gt;/dev/null; </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        then</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                            echo &quot;pnpm&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        else</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                            npm i pnpm -g --registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        fi</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        pnpm i</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        pnpm run build</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                echo &#39;构建完成&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Zip&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sh &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    tar -zcvf \${JOB_BASE_NAME}.tgz ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    rm -rf ./dist/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    mv \${JOB_BASE_NAME}.tgz ./dist</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                &#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Deploy to tencent&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                expression { deploy_hostname == &#39;tencent&#39; }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;tencent&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Deploy to dev01&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                expression { deploy_hostname == &#39;dev01&#39; }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;dev01&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Deploy to tencent、dev01&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                expression { deploy_hostname == &#39;tencent、dev01&#39; }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;tencent&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                sshPublisher(publishers: [sshPublisherDesc(configName: &#39;dev01&#39;, transfers: [sshTransfer(cleanRemote: false, excludes: &#39;&#39;, execCommand: &#39;echo \\&#39;部署完成\\&#39;&#39;, execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: &#39;[, ]+&#39;, remoteDirectory: &#39;&#39;, remoteDirectorySDF: false, removePrefix: &#39;dist&#39;, sourceFiles: &#39;dist/**&#39;)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><h3 id="参考-别人项目中的-k8s-部署配置" tabindex="-1">参考- 别人项目中的 k8s 部署配置 <a class="header-anchor" href="#参考-别人项目中的-k8s-部署配置" aria-label="Permalink to &quot;参考- 别人项目中的 k8s 部署配置&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">@Library(&#39;devops&#39;) _</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    agent {label &#39;jenkins-slave-jnlp&#39;}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    environment {  // https://stackoverflow.com/questions/53541489/updating-environment-global-variable-in-jenkins-pipeline-from-the-stage-level</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        NAME=&quot;admin-tmpl&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        NAMESPACE=&quot;oppc-rcyj-web&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        SERVER_PORT=&quot;80&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    options {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        // timestamps()  //日志会有时间</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        skipDefaultCheckout()  //删除隐式checkout scm语句</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        // disableConcurrentBuilds() //禁止并行,会列队式等前面的任务完才进行下一个任务</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        timeout(time: 1, unit: &#39;HOURS&#39;)  //流水线超时设置1h</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Init&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    // 【测试环境】变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    env.INGRESS_HOST=&#39;admin-tmpl-test.rencaiyoujia.cn&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    env.INGRESS_TLS_SECRET=&quot;rencaiyoujia-tls-secret&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    env.REPLICAS=&quot;1&quot;  //deployment的副本数</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    KUBECONTEXT = &quot;k8s-test-admin&quot;  //测试环境k8s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    NPM_RUN_BUILD_CMD=&quot;npm run build:test&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    DOCKERFILE_NAME=&quot;Dockerfile&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    // 【生产环境】变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    if( &quot;\${BRANCH_NAME}&quot;== &quot;master&quot;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        env.INGRESS_HOST=&#39;admin-tmpl.rencaiyoujia.com&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        env.INGRESS_TLS_SECRET=&quot;rencaiyoujia-tls-secret&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        env.REPLICAS=&quot;2&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        KUBECONTEXT=&quot;k8s-prod-admin&quot;  //生产环境k8s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        NPM_RUN_BUILD_CMD=&quot;npm run build:prod&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        DOCKERFILE_NAME=&quot;Dockerfile&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    // 【开发环境】变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    if( &quot;\${BRANCH_NAME}&quot;== &quot;dev&quot;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        env.INGRESS_HOST=&#39;admin-tmpl-dev.rencaiyoujia.cn&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        env.INGRESS_TLS_SECRET=&quot;rencaiyoujia-tls-secret&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        env.REPLICAS=&quot;1&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        KUBECONTEXT=&quot;k8s-dev-admin&quot;  //开发环境k8s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        NPM_RUN_BUILD_CMD=&quot;npm run build:dev&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        DOCKERFILE_NAME=&quot;Dockerfile&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Checkout&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                checkout scm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        } </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;npm打包&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                script{            </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    // sh &#39;npm config set registry https://registry.npm.taobao.org&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    sh &#39;npm install --registry=https://registry.npm.taobao.org&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    sh &quot;\${NPM_RUN_BUILD_CMD}&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }                </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;DockerBuild&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    sh &quot;rm -rf docker/dist;mv dist docker&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    devops.docker(env.NAME,dockerfile:&quot;docker/\${DOCKERFILE_NAME}&quot;,context:&quot;docker&quot;).build().push()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Test&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                echo &#39;Testing..&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            parallel {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                stage(&#39;deploy ingress&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        expression { env.INGRESS_HOST != null }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        sh &quot;&quot;&quot;envsubst &lt; k8smanifests/svc.yaml | kubectl --context \${KUBECONTEXT} apply -f - ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                            envsubst &lt; k8smanifests/ingress.yaml | kubectl --context \${KUBECONTEXT} apply -f - ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        &quot;&quot;&quot;      </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        sh &quot;&quot;&quot;envsubst &lt; k8smanifests/deploy.yaml ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                            envsubst &lt; k8smanifests/deploy.yaml | kubectl --context \${KUBECONTEXT} apply -f - ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                        &quot;&quot;&quot;                          </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    post{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        success{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;构建成功 ✅&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        failure{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;构建失败 ❌&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        unstable{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;不稳定构建 ✅&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        aborted{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;暂停或中断 ❌&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">@Library(&#39;devops&#39;) _</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">pipeline {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    agent {label &#39;jenkins-slave-jnlp&#39;}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    environment {  // https://stackoverflow.com/questions/53541489/updating-environment-global-variable-in-jenkins-pipeline-from-the-stage-level</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        NAME=&quot;admin-tmpl&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        NAMESPACE=&quot;oppc-rcyj-web&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        SERVER_PORT=&quot;80&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    options {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        // timestamps()  //日志会有时间</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        skipDefaultCheckout()  //删除隐式checkout scm语句</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        // disableConcurrentBuilds() //禁止并行,会列队式等前面的任务完才进行下一个任务</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        timeout(time: 1, unit: &#39;HOURS&#39;)  //流水线超时设置1h</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    stages {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Init&#39;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    // 【测试环境】变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    env.INGRESS_HOST=&#39;admin-tmpl-test.rencaiyoujia.cn&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    env.INGRESS_TLS_SECRET=&quot;rencaiyoujia-tls-secret&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    env.REPLICAS=&quot;1&quot;  //deployment的副本数</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    KUBECONTEXT = &quot;k8s-test-admin&quot;  //测试环境k8s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    NPM_RUN_BUILD_CMD=&quot;npm run build:test&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    DOCKERFILE_NAME=&quot;Dockerfile&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    // 【生产环境】变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    if( &quot;\${BRANCH_NAME}&quot;== &quot;master&quot;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        env.INGRESS_HOST=&#39;admin-tmpl.rencaiyoujia.com&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        env.INGRESS_TLS_SECRET=&quot;rencaiyoujia-tls-secret&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        env.REPLICAS=&quot;2&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        KUBECONTEXT=&quot;k8s-prod-admin&quot;  //生产环境k8s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        NPM_RUN_BUILD_CMD=&quot;npm run build:prod&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        DOCKERFILE_NAME=&quot;Dockerfile&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    // 【开发环境】变量</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    if( &quot;\${BRANCH_NAME}&quot;== &quot;dev&quot;){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        env.INGRESS_HOST=&#39;admin-tmpl-dev.rencaiyoujia.cn&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        env.INGRESS_TLS_SECRET=&quot;rencaiyoujia-tls-secret&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        env.REPLICAS=&quot;1&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        KUBECONTEXT=&quot;k8s-dev-admin&quot;  //开发环境k8s</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        NPM_RUN_BUILD_CMD=&quot;npm run build:dev&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        DOCKERFILE_NAME=&quot;Dockerfile&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Checkout&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                checkout scm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        } </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;npm打包&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                script{            </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    // sh &#39;npm config set registry https://registry.npm.taobao.org&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    sh &#39;npm install --registry=https://registry.npm.taobao.org&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    sh &quot;\${NPM_RUN_BUILD_CMD}&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }                </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;DockerBuild&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    sh &quot;rm -rf docker/dist;mv dist docker&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    devops.docker(env.NAME,dockerfile:&quot;docker/\${DOCKERFILE_NAME}&quot;,context:&quot;docker&quot;).build().push()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Test&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            steps {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                echo &#39;Testing..&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            parallel {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                stage(&#39;deploy ingress&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    when {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        expression { env.INGRESS_HOST != null }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        sh &quot;&quot;&quot;envsubst &lt; k8smanifests/svc.yaml | kubectl --context \${KUBECONTEXT} apply -f - ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                            envsubst &lt; k8smanifests/ingress.yaml | kubectl --context \${KUBECONTEXT} apply -f - ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        &quot;&quot;&quot;      </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    steps{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        sh &quot;&quot;&quot;envsubst &lt; k8smanifests/deploy.yaml ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                            envsubst &lt; k8smanifests/deploy.yaml | kubectl --context \${KUBECONTEXT} apply -f - ;\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                        &quot;&quot;&quot;                          </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    post{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        success{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;构建成功 ✅&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        failure{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;构建失败 ❌&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        unstable{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;不稳定构建 ✅&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        aborted{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            script{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">                devops.dingtalk(env.NAME,env.DOCKERIMAGE,&quot;暂停或中断 ❌&quot;)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("note/system/Jenkinsfile编写.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Jenkinsfile__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Jenkinsfile__ as default
};



Jenkinsfile使用Groovy语言编写，因此它遵循Groovy语法规则



Jenkinsfile必须以"pipeline"关键字开头，表示这是一个Pipeline类型的Jenkinsfile。
Jenkinsfile可以包含多个阶段（stage），每个阶段用"stage"关键字定义。
在每个阶段中，我们可以定义一系列的步骤（step），每个步骤用"steps"关键字定义。
在步骤中，我们可以使用Jenkins提供的内置函数和命令，比如"sh"命令用于执行Shell脚本，"echo"命令用于输出信息等。
Jenkinsfile还可以包含一些全局的配置，比如代理设置、环境变量等，这些配置可以在Jenkinsfile的顶部用"pipeline"关键字定义。

### 简单示例

```text
pipeline {
    agent any
    environment {
        NAME = 'World'
    }
    stages {
        stage('Build') {
            steps {
                sh 'echo "Building..."'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Testing..."'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying..."'
            }
        }
    }
}

```


### 部署maven项目

```text
pipeline {
    agent any
    environment {
        BUILD_VERSION = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    }
    parameters {
        string(name: 'DEPLOY_ENV', defaultValue: 'dev', description: 'Environment to deploy to')
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package -Dbuild.version=${BUILD_VERSION}'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Deploy') {
            when {
                expression {
                    params.DEPLOY_ENV == 'prod'
                }
            }
            steps {
                sh 'kubectl apply -f deployment-prod.yaml'
            }
        }
    }
}

```

### 部署一个前端项目

```text
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs('node16') {
                    sh '''
                        if hash pnpm 2>/dev/null; 
                        then
                            echo "pnpm"
                        else
                            npm i pnpm -g --registry https://registry.npmmirror.com/
                        fi

                        pnpm i
                        pnpm run build
                    '''
                }
                echo '构建完成'
            }
        }
        stage('Zip') {
            steps {
                sh '''
                    tar -zcvf ${JOB_BASE_NAME}.tgz ./dist/*
                    rm -rf ./dist/*
                    mv ${JOB_BASE_NAME}.tgz ./dist
                '''
                echo '打包完成'
            }
        }
        stage('Deploy') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'tencent', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'echo \'部署完成\'', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'dist', sourceFiles: 'dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}

```

### 多环境部署流水线

有时候我们会遇到多环境部署的情况，如开发坏境，生产环境等，大概就是我们通过在流水线添加一个部署坏境的参数来控制，在每次构建前选择一下部署的坏境，具体脚本如下：

```text
pipeline {
    agent any

    parameters {
        choice(
            description: '你需要哪个机器进行部署?',
            name: 'deploy_hostname',
            choices: ['tencent', 'dev01', 'tencent、dev01']
        )
    }

    stages {
        stage('Build') {
            steps {
                nodejs('node16') {
                    sh '''
                        if hash pnpm 2>/dev/null; 
                        then
                            echo "pnpm"
                        else
                            npm i pnpm -g --registry https://registry.npmmirror.com/
                        fi

                        pnpm i
                        pnpm run build
                    '''
                }
                echo '构建完成'
            }
        }
        stage('Zip') {
            steps {
                sh '''
                    tar -zcvf ${JOB_BASE_NAME}.tgz ./dist/*
                    rm -rf ./dist/*
                    mv ${JOB_BASE_NAME}.tgz ./dist
                '''
            }
        }
        stage('Deploy to tencent'){
            when {
                expression { deploy_hostname == 'tencent' }
            }
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'tencent', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'echo \'部署完成\'', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'dist', sourceFiles: 'dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
        stage('Deploy to dev01'){
            when {
                expression { deploy_hostname == 'dev01' }
            }
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'dev01', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'echo \'部署完成\'', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'dist', sourceFiles: 'dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
        stage('Deploy to tencent、dev01'){
            when {
                expression { deploy_hostname == 'tencent、dev01' }
            }
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'tencent', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'echo \'部署完成\'', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'dist', sourceFiles: 'dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                sshPublisher(publishers: [sshPublisherDesc(configName: 'dev01', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'echo \'部署完成\'', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'dist', sourceFiles: 'dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}

```


### 参考- 别人项目中的 k8s 部署配置

```text
@Library('devops') _

pipeline {
    agent {label 'jenkins-slave-jnlp'}
    environment {  // https://stackoverflow.com/questions/53541489/updating-environment-global-variable-in-jenkins-pipeline-from-the-stage-level
        NAME="admin-tmpl"
        NAMESPACE="oppc-rcyj-web"
        SERVER_PORT="80"
    }

    options {
        // timestamps()  //日志会有时间
        skipDefaultCheckout()  //删除隐式checkout scm语句
        // disableConcurrentBuilds() //禁止并行,会列队式等前面的任务完才进行下一个任务
        timeout(time: 1, unit: 'HOURS')  //流水线超时设置1h
    }

    stages {
        stage('Init'){
            steps {
                script{
                    // 【测试环境】变量
                    env.INGRESS_HOST='admin-tmpl-test.rencaiyoujia.cn'
                    env.INGRESS_TLS_SECRET="rencaiyoujia-tls-secret"
                    env.REPLICAS="1"  //deployment的副本数
                    KUBECONTEXT = "k8s-test-admin"  //测试环境k8s
                    NPM_RUN_BUILD_CMD="npm run build:test"
                    DOCKERFILE_NAME="Dockerfile"

                    // 【生产环境】变量
                    if( "${BRANCH_NAME}"== "master"){
                        env.INGRESS_HOST='admin-tmpl.rencaiyoujia.com'
                        env.INGRESS_TLS_SECRET="rencaiyoujia-tls-secret"
                        env.REPLICAS="2"
                        KUBECONTEXT="k8s-prod-admin"  //生产环境k8s
                        NPM_RUN_BUILD_CMD="npm run build:prod"
                        DOCKERFILE_NAME="Dockerfile"
                    }

                    // 【开发环境】变量
                    if( "${BRANCH_NAME}"== "dev"){
                        env.INGRESS_HOST='admin-tmpl-dev.rencaiyoujia.cn'
                        env.INGRESS_TLS_SECRET="rencaiyoujia-tls-secret"
                        env.REPLICAS="1"
                        KUBECONTEXT="k8s-dev-admin"  //开发环境k8s
                        NPM_RUN_BUILD_CMD="npm run build:dev"
                        DOCKERFILE_NAME="Dockerfile"
                    }
                }
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        } 
        stage('npm打包') {
            steps {
                script{            
                    // sh 'npm config set registry https://registry.npm.taobao.org'
                    sh 'npm install --registry=https://registry.npm.taobao.org'
                    sh "${NPM_RUN_BUILD_CMD}"
                }
            }                
        }        
        stage('DockerBuild') {
            steps {
                script{
                    sh "rm -rf docker/dist;mv dist docker"
                    devops.docker(env.NAME,dockerfile:"docker/${DOCKERFILE_NAME}",context:"docker").build().push()
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        
        stage('Deploy') {
            parallel {
                stage('deploy ingress') {
                    when {
                        expression { env.INGRESS_HOST != null }
                    }
                    steps{
                        sh """envsubst < k8smanifests/svc.yaml | kubectl --context ${KUBECONTEXT} apply -f - ;\
                            envsubst < k8smanifests/ingress.yaml | kubectl --context ${KUBECONTEXT} apply -f - ;\
                        """      
                    }
                }
                stage('Deploy') {
                    steps{
                        sh """envsubst < k8smanifests/deploy.yaml ;\
                            envsubst < k8smanifests/deploy.yaml | kubectl --context ${KUBECONTEXT} apply -f - ;\
                        """                          
                    }
                }
            }
        }

    }


    post{
        success{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"构建成功 ✅")
            }
        }
        failure{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"构建失败 ❌")
            }
        }
        unstable{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"不稳定构建 ✅")
            }
        }
        aborted{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"暂停或中断 ❌")
            }
        }
    }

}

```






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









Jenkinsfile使用Groovy语言编写，因此它遵循Groovy语法规则



Jenkinsfile必须以"pipeline"关键字开头，表示这是一个Pipeline类型的Jenkinsfile。
Jenkinsfile可以包含多个阶段（stage），每个阶段用"stage"关键字定义。
在每个阶段中，我们可以定义一系列的步骤（step），每个步骤用"steps"关键字定义。
在步骤中，我们可以使用Jenkins提供的内置函数和命令，比如"sh"命令用于执行Shell脚本，"echo"命令用于输出信息等。
Jenkinsfile还可以包含一些全局的配置，比如代理设置、环境变量等，这些配置可以在Jenkinsfile的顶部用"pipeline"关键字定义。


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









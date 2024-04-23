---
sidebar:
title: jenkins搭建（一）
step: 6
isTimeLine: true
date: 2020-09-14

---
# jenkins搭建

## gitlab+jenkins+docker自动化部署前端项目


由于公司已经自行部署gitlab和nginx，只需要部署jenkins即可。

1、背景

之前公司采用是本地打包部署的方式（本地打包上传服务器，ssh登入服务器进行reload），虽然都编写了sh脚本简化流程，但是本地打包的方式实在接受不了，一个是打包的时候占用电脑性能，另一个是本地环境不能修改，还有一个就是其他人（这个人有可能是后端或者测试）需要部署的情况下保持node环境一致，因此计划把本地打包修改为服务器打包。

### 前期准备

#### docker-compose基本使用

**命令**


```shell
# 后台构建
docker-compose up -d
docker-compose up -d --build

# 停止并删除构建
docker-compose down

# 更多
docker-compose -h                           # 查看帮助
docker-compose up                           # 创建并运行所有容器
docker-compose up -d                        # 创建并后台运行所有容器
docker-compose ps                           # 显示所用容器信息
docker-compose -f docker-compose.yml up -d  # 指定模板
docker-compose down                         # 停止并删除容器、网络、卷、镜像。
docker-compose rm                           # 删除容器
docker-compose rmi                          # 删除
docker-compose logs                         # 查看容器输出日志
docker-compose pull                         # 拉取依赖镜像
dokcer-compose config                       # 检查配置
dokcer-compose config -q                    # 验证yaml配置文件是否正确，有问题才有输出
docker-compose pause                        # 暂停容器
docker-compose unpause                      # 恢复暂停
docker-compose restart                      # 重启服务
docker-compose start                        # 启动服务
docker-compose stop                         # 停止服务
```

**yml文件编写**

```yaml
#第一层 版本号
version: "3"  #代表使用docker-compose项目的版本号
#第二层：services 服务配置
services:
  web:
    build: .
    ports:  #宿主机和容器的端口映射
      - "5000:5000"
    volumes:
      - .:/code
  redis:
     image: "redis:alpine"
# 第三层 其他配置 网络、卷、全局规划

```


### 环境准备

目录参考

```shell
+ compose
  - docker-compose.yml  // docker-compose执行文件
+ nginx 
  + conf.d
    - nginx.conf        // nginx配置
+ jenkins
  - jenkins_home       // jenkins挂载卷
+ webserver            
  -static              //存放前端打包后的dist文件

```


**1、docker docker-compose**

服务器需要安装 docker、docker-compose。
服务器中安装的有yum，直接运行
```shell
yum install docker docker-compose
```

**2、部署gitlab - 如果需要的话 并未实践，自行验证**

> gitlab部署最小需要4G内存

docker-compose.yml
```yaml
web:
  image: 'gitlab/gitlab-ee:latest'
    restart: always
    hostname: '192.168.xx.xx'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://192.168.xx.xx:8090'   
        # Add any other gitlab.rb configuration here, each on its own line 
    ports:
      - '8090:8090'
    # 将容器的数据拷贝存到主机中
    volumes:
      - '/srv/gitlab/config:/etc/gitlab'
      - '/srv/gitlab/logs:/var/log/gitlab'
      - '/srv/gitlab/data:/var/opt/gitlab'

```

**3、部署dockerhub - 如果需要的话  并未实践，自行验证**

docker-compose.yml

```yaml
	image: 'registry:2'
	containers: dockerhub
	restart: always
	ports:
		- '5000:5000'
	volumes:
		- '/home/dockerhub/data:/var/lib/registry'
```

```bash
# 由于Docker CLI客户端默认以HTTPS访问，而部署的registry并未提供HTTPS，因此，需要在pull镜像的Docker主机添加HTTP可信任：
vi /etc/docker/daemon.json 
# 每台需要访问私有镜像仓库的都要配置
{
    "insecure-registries":["192.168.1.99:5000"]
}

# 然后重新启动docker
systemctl daemon-reload && systemctl restart docker

# 测试仓库是否ok
docker pull ubuntu
docker tag ubuntu localhost:5000/ubuntu
docker push localhost:5000/ubuntu

# 查看已上传的镜像
curl http://localhost:5000/v2/_catalog

```

4、部署 nginx - 如果需要的话

拉取镜像

```shell
docker pull nginx
```

docker-compose.yml
```yaml
version: '3'
services:                                      # 集合
  docker_nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
      - 80:80
      - 433:433
    volumes:
      - /home/nginx/conf.d/:/etc/nginx/conf.d
      - /home/webserver/static/jenkins/dist/:/usr/share/nginx/html
```

nginx - conf.d - nginx.conf

```text
server{
  listen  8080;
  root /usr/share/nginx/html;
  index index.html index.htm;
}

```


5、部署 jenkins

> 如果按照步骤部署完毕后访问不了的，先docker ps -a查看运行状态，运行状态正常的话看看是不是云服务器的端口有咩有放行。

拉取镜像

```shell
docker pull jenkins/jenkins:lts
```

创建 jenkins 的工作目录并赋予权限

```shell
mkdir -p /home/jenkins_home
cd /home/
chown -R 1000 jenkins_home #把当前目录的拥有者赋值给uid 1000
```

编写docker-compose.yml

单独部署jenkins

```yaml
# /home/jenkins 是自定义映射jenkins存放数据的目录，可以修改成自己需要的目录，docker的映射是为了让jenkins能使用宿主环境下的docker
version: '3'
services:                                      # 集合
  docker_jenkins:
    user: root                                 # 为了避免一些权限问题 在这我使用了root
    restart: always                            # 重启方式
    image: jenkins/jenkins:lts                 # 指定服务所使用的镜像 在这里我选择了 LTS (长期支持)
    container_name: jenkins                    # 容器名称
    ports:                                     # 对外暴露的端口定义
      - 8080:8080
      - 50000:50000
    volumes:                                   # 卷挂载路径
      - /home/jenkins/jenkins_home/:/var/jenkins_home  # 这是我们一开始创建的目录挂载到容器内的jenkins_home目录
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker                # 这是为了我们可以在容器内使用docker命令
      - /usr/local/bin/docker-compose:/usr/local/bin/docker-compose
```

jenkins和nginx编写在一起

```yaml
# /home/jenkins 是自定义映射jenkins存放数据的目录，可以修改成自己需要的目录，docker的映射是为了让jenkins能使用宿主环境下的docker
version: '3'
services:                                      # 集合
  docker_jenkins:
    user: root                                 # 为了避免一些权限问题 在这我使用了root
    restart: always                            # 重启方式
    image: jenkins/jenkins:lts                 # 指定服务所使用的镜像 在这里我选择了 LTS (长期支持)
    container_name: jenkins                    # 容器名称
    ports:                                     # 对外暴露的端口定义
      - 8080:8080
      - 50000:50000
    volumes:                                   # 卷挂载路径
      - /home/jenkins/jenkins_home/:/var/jenkins_home  # 这是我们一开始创建的目录挂载到容器内的jenkins_home目录
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker                # 这是为了我们可以在容器内使用docker命令
      - /usr/local/bin/docker-compose:/usr/local/bin/docker-compose
  docker_nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
      - 8090:80
      - 80:80
      - 433:433
    volumes:
      - /home/nginx/conf.d/:/etc/nginx/conf.d
      - /home/webserver/static/jenkins/dist/dist:/usr/share/nginx/html
```

启动容器

```shell
# 后台启动服务，第一次或自动pull镜像，添加 -d 表示后台启动，可以添加这个参数用于后台启动
docker-compose up -d
```

开放防火墙 8080 端口

```shell
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd -reload
```

修改插件中心下载源

```shell
vi /home/jenkins_home/hudson.model.UpdateCenter.xml
# hudson.model.UpdateCenter.xml

<?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</url>
  </site>
</sites>

```















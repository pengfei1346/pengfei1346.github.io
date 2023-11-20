---
sidebar:
group:
title: docker
isTimeLine: true
date: 11-16-2023
tags:
categories:
sticky: 1
---
# docker

## 部署gitlab

* gitlab部署最小需要4G内存

```js
web:  
	image: 'gitlab/gitlab-ee:latest' 
    restart: always  
    hostname: '192.168.25.128'
    environment:    
    	GITLAB_OMNIBUS_CONFIG: | 
        external_url 'http://192.168.25.128:8090'   
        # Add any other gitlab.rb configuration here, each on its own line 
    ports:    
       - '8090:8090'
   # 将容器的数据拷贝存到主机中
   volumes:   
     - '/srv/gitlab/config:/etc/gitlab'
     - '/srv/gitlab/logs:/var/log/gitlab'
     - '/srv/gitlab/data:/var/opt/gitlab'
```

## 部署dockerhub

```yaml
	image: 'registry:2'
	containers: dockerhub
	restart: always
	ports:
		- '5000:5000'
	volumes:
		- '/home/dockerhub/data:/var/lib/registry'
```
```shell
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

## 部署jenkins

- 创建jenkins的工作目录并赋予权限

```shell
mkdir -p /home/jenkins_home
cd /home/
chown -R 1000 jenkins_home #把当前目录的拥有者赋值给uid 1000

```

- 编写docker-compose文件

```yaml
version: '3'
services:                                      # 集合
  docker_jenkins:
    user: root                                 # 为了避免一些权限问题 在这我使用了root
    image: jenkins/jenkins:lts                 # 指定服务所使用的镜像 在这里我选择了 LTS (长期支持)
    container_name: jenkins                    # 容器名称

    volumes:                                   # 卷挂载路径
      - /home/jenkins/jenkins_home/:/var/jenkins_home  # 这是我们一开始创建的目录挂载到容器内的jenkins_home目录
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker                # 这是为了我们可以在容器内使用docker命令
      - /usr/local/bin/docker-compose:/usr/local/bin/docker-compose

    ports:                                     # 对外暴露的端口定义
      - 8050:8080
    expose:
      - "8050"
    restart: always                            # 重启方式 
```

- 启动容器

```shell
cd /home/jenkins_home/
docker-compose up -d
```

- 开放防火墙8080端口

```shell
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd -reload

```

- 

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

## Nginx和Jenkins聚集部署

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

##### docker-compose.yml
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

##### nginx.conf
server{
  listen  80;
  root /usr/share/nginx/html;
  index index.html index.htm;
}

```

- 启动

docker-compose up -d   
docker-compose stop //停止nginx和jenkins 两者结合可以进行重启

















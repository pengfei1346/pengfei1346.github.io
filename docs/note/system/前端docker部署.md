---
sidebar:
title: 前端docker部署
date: 2024-03-14
---
# 前端docker部署


## docker基础

> 基本概念：

镜像是静态模板，容器是镜像的实例化，是从镜像启动的一个可写、运行时环境，同一镜像可以启动多个容器，每个容器可以根据需要独立地进行个性化配置和操作。

Dockerfile为配置文件

### 容器

容器是镜像的一个可写副本，并且每个容器都有自己独立的运行空间，包括进程、网络配置等。即使是基于同一镜像创建出来的容器，它们之间也是隔离的，各自拥有自己的运行状态。

### 镜像
镜像可以运行到容器里面，镜像是一个预配置的、包含了Nginx服务器环境的静态模板，记录了运行某个应用或服务所需要的操作系统环境、文件以及各种依赖和程序本身的项目信息。

前端主要通过docker根据打包好的项目文件去生成镜像。

镜像可以通过从官方仓库下载或者基于现有的镜像使用docker build命令通过Dockerfile自定义构建。

### Dockerfile

Dockerfile是用来构建镜像的脚本，这个脚本里面有一些说明，主要是把前端生成的项目复制到容器中某个位置以及后续要用的nginx配置文件复制到容器中的某个位置.

```text
# 设置 nginx 作为静态资源服务器
# 指定基础镜像nginx:alpine
FROM nginx:alpine

# 将我们自定义的网站静态文件复制到容器中
COPY dist/ /usr/share/nginx/html/
# 将我们自定义的nginx配置文件复制到容器中
COPY nginx.conf.template /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 启动 nginx 服务器
CMD ["nginx", "-g", "daemon off;"]

```

```text
#基础镜像
FROM docker.io/nginx
#Message(维修人员)
MAINTAINER soldier<soldier_wyyx@163.com.com>
#构建日期
ENV REFRESHED_AT 2020-04-14
#修改nginx文件
RUN rm /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY dist/  /usr/share/nginx/html/
```


## 拓展

### Travis CI

<p>Travis CI是一个服务提供商，可以运行开源项目的自动化测试任务，其原理类似于Jenkins，但是提供了免费的开放平台，支持GitHub、Bitbucket、GitLab等代码托管平台的自动构建、测试和部署。Travis CI服务由 开发维护，主要面向开源项目提供在线编译及测试，目前已经成为最流行的开源CI/CD工具之一。 </p>

## 参考

[前端docker部署(通过nginx镜像部署)](https://blog.csdn.net/LYZ0909/article/details/135773252?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-135773252-blog-135817592.235%5Ev43%5Epc_blog_bottom_relevance_base9&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-135773252-blog-135817592.235%5Ev43%5Epc_blog_bottom_relevance_base9&utm_relevant_index=10
)






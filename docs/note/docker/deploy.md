---
sidebar:
title: docker部署项目
---
# docker部署项目

## docker部署项目

### 安装docker

```text
安装docker
yum install docker

启动docker服务
service docker start

安装docker-compose
// 安装epel源
yum install -y epel-release
// 安装docker-compose
yum install docker-compose
```

### 编写docker-compose.yaml

```text
version: '2.1'
services:
  nginx:
    restart: always
    image: nginx
    volumes:
      #~ /var/local/nginx/nginx.conf为本机目录, /etc/nginx为容器目录
      - /var/local/nginx/nginx.conf:/etc/nginx/nginx.conf
      #~ /var/local/app/dist 为本机 build 后的dist目录, /usr/src/app为容器目录,
      - /var/local/app/dist:/usr/src/app
    ports:
      - 80:80
    privileged: true
```

### 编写 nginx.conf 配置

```text
#user  nobody;

worker_processes  2;

#工作模式及连接数上线
events {
    worker_connections  1024;   #单个工作进程 处理进程的最大并发数
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    # 开启GZIP
    gzip  on;

    # # 监听 80 端口，转发请求到 3000 端口
    server {
        #监听端口
        listen      80;
        #编码格式
        charset utf-8;

        # 前端静态文件资源
        location / {
	    root  /usr/src/app;
            index index.html index.htm;
            try_files $uri $uri/ @rewrites;
        }
        # 配置如果匹配不到资源，将url指向 index.html， 在 vue-router 的 history 模式下使用，就不会显示404
        location @rewrites {
            rewrite ^(.*)$ /index.html last;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```

### 执行 docker-compose
```text
docker-compose -d up
```

### docker + jenkins 自动化部署

https://juejin.cn/post/6844903669381464071









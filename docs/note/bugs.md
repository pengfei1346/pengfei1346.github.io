---
title: 问题记录
date: 2025-4-11
tags:
 - bugs
---

# 关于

问题记录整理

## 1、node-sass安装失败

Node-sass安装失败解决

```text
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```

## 2、markdown语法参考

### 图片

```markdown
![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
```

### 超链接

```markdown
[超链接名](超链接地址 "超链接title")
title可加可不加
```

### 无序列表

```markdown
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格

```

### 有序列表

```markdown
1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
```

### 表格

```markdown
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```


## 3、mongodb启动

#### 启动命令
```text
mongod --dbpath /usr/local/db --logpath /usr/local/var/log/mongodb/mongo.log --fork
```

## 4、nginx配置

```text
#### conf

##### 本地反向代理配置

```text 
server {
        listen       8080;
        server_name  192.168.2.1;

        #charset koi8-r;
        #access_log  logs/host.access.log  main;

        #   location / {
            #	root /Users/chenpengfei/Desktop/workspace/项目/金谷/jg-website;
            
            #   location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|js|pdf|txt){
            #        root /Users/chenpengfei/Desktop/workspace/项目/金谷/jg-website;
            #        expires      7d;
            #   }
            #   add_header 'Access-Control-Allow-Origin' '*';
            #   index  index.html index.htm;
        #  }
```

### 代理配置

```text
        location /api/ {
		    proxy_pass  http://192.168.110.143:8801/api/;
        }
```

### websocket 配置

```text
  location /websocket/ {
            proxy_redirect off;
            proxy_pass http://192.168.110.143:8000; #转发到你本地的9501端口 对应 ws 的端口
            proxy_set_header Host $host;
            proxy_set_header X-Real_IP $remote_addr;
            proxy_set_header X-Forwarded-For $remote_addr:$remote_port;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection upgrade;
        }
```

### vue-router history 配置

```text
location /h5/operatorsNumberH5 {
    alias  /data/web-admin-h5/h5/operatorsNumberH5;
    #root   /data/web-admin-h5;
    index index.html index.htm;
    try_files $uri $uri/ /h5/operatorsNumberH5/index.html;
}
```

### gzip 配置

```text
server {
    listen       80;
    server_name  sandadmin.aicaihr.com;

    # 开启gzip
    # 定义压缩级别
    # 定义启用压缩文件类型
    gzip on;
    gzip_comp_level 3;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;

    # 重点：使用alias 一个域名要求跳转不同的项目 
    location /h5/pushRegistration {
        alias  /data/web-admin-h5/h5/pushRegistration/;
        index index.html index.htm;
        try_files $uri $uri/ /h5/pushRegistration/index.html;  # vue-router history 配置
    }
    # 重点：使用root 
    location / {
        root   /data/web_admin/dist;
        index index.html index.htm;
     }
    # 代理 api转发的地址
    location ^~ /api/ {
        proxy_pass http://127.0.0.1:8887/api/;
    }
}
```

```text
#开启和关闭gzip模式
    gzip on|off;

    #gizp压缩起点，文件大于1k才进行压缩
    gzip_min_length 1k;

    # gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
    gzip_comp_level 1;

    # 进行压缩的文件类型。
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;

    gzip_static on

    gzip_min_length 1k;

    gzip_comp_level 1;

    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;

    #nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩
    gzip_static on;
    gzip_vary on;
    gzip_buffers 2 4k;
    gzip_http_version 1.1;

gzip on;
gzip_comp_level 3;
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;
```

### 配置静态资源过期时间

```text
location / {
	root /mnt/dat1/test/tes-app;
	index index.html index.htm;
	try_files uri/ /index.html;
	#### kill cache
	add_header Last-Modified  {
	root /mnt/dat1/test/tes-app;
	access_log off;
	expires 30d;
}


location /test/ {
                  root   /home;
                 #index  index.html index.htm
                  try_files $uri /h5/index.html;
                  if ($request_filename ~* .*\.(?:htm|html)$)
                  {
                    add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
                  }
                 if ($request_filename ~* .*\.(?:js|css)$)
                 {
                   expires      7d;
                 }
                if ($request_filename ~* .*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)
                {
                  expires      7d;
                }
              }
```

## 5、pm2常用操作


#### npm 方式启动 node

语法：pm2 start npm --watch --name <taskname> -- run <scriptname>;

其中 -- watch监听代码变化，-- name重命名任务名称，-- run后面跟脚本名字

```text
 pm2 start npm -- run dev
```



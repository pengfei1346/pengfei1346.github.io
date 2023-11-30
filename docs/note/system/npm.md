---
sidebar:
title: npm私有仓库
step: 6
isTimeLine: true
date: 2020-09-14

---
# npm私有仓库


## 说明

> 仓库搭建过程略

## 部署

[参考1](https://juejin.cn/post/6939812008082538504?from=search-suggest)
[参考2](https://juejin.cn/post/7212621497810370597)

docker-compose基本命令

```shell
后台构建
docker-compose up -d
docker-compose up -d --build

停止并删除构建
docker-compose down

```

docker基本命令

```shell
# 以服务方式启动
service docker stop   
service docker start  
service docker restart
```

参考：  
http://www.manongjc.com/detail/54-uqdquiitomgfvmo.html
https://blog.csdn.net/liuhangbiao/article/details/117604766

项目根部录下新建docker-compose.yml

```text
version: '3.4'

services:
  verdaccio:
    image: verdaccio/verdaccio
    container_name: "verdaccio"
    networks:
      - node-network
    environment:
      - VERDACCIO_PORT=4873
    ports:
      - "4873:4873"
    volumes:
      - "./storage:/verdaccio/storage"
      - "./config:/verdaccio/conf"
      - "./plugins:/verdaccio/plugins"
networks:
  node-network:
    driver: bridge

```

项目根部录下新建config文件夹，config文件夹下新建config.yaml

```text
# 所有包的缓存目录
storage: /verdaccio/storage/
# 插件目录
plugins: /verdaccio/storage/
#开启web 服务,能够通过web 访问
web:
  # WebUI is enabled as default, if you want disable it, just uncomment this line
  enable: true
  title: Sinux-Npm-Register #网站首页进入的正文标题
  # logo: #这里可以给定一个远程连接的图片,注释掉就采用默认的
  # comment out to disable gravatar support
  gravatar: true
  # by default packages are ordercer ascendant (asc|desc)
  # sort_packages: asc  # 包的排序
  # darkMode: true # 黑暗模式
  # scope: "@scope"
auth:
  htpasswd:
    # 用户信息存储目录
    file: ./htpasswd
    #此配置项可以关闭注册功能
    max_users: -1
i18n:
# list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations
  web: zh-CN # 默认是en-US,我们改为默认中文,这个东东支持多语言
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
  yarn:
    url: https://registry.yarnpkg.com/
    timeout: 10s
  taobao:
    url: https://registry.npm.taobao.org/
    timeout: 10s
packages:
  "@*/*":
    # 三种身份,所有人,匿名用户,认证(登陆)用户
    # "$all", "$anonymous", "$authenticated"
    access: $all
    #发布package 的权限
    publish: $all
    proxy: npmjs
  "**":
    access: $all
    publish: $all
    proxy: npmjs yarn  taobao
# To use `npm audit` uncomment the following section
middlewares:
  audit:
    enabled: true
# 监听的端口 ,重点, 不配置这个,只能本机能访问
listen: 0.0.0.0:4873
logs:
  - { type: stdout, format: pretty, level: http }
```

这一步不是必须的，如果config.yaml关闭了注册功能，需要内置用户
config文件夹下新建htpasswd，需要rsa加密，密码生成：https://hostingcanada.org/htpasswd-generator/

```text
// 用户名：密码
ac:{SHA}fEqNCco3Yq9h5ZUglD3CZJT4lBs=
```

最后执行 docker-compose up -d --build完成构建。


## 注册登录

- 将npm服务指向本地：npm set registry http://localhost:4873  
- 注册用户：npm adduser registry http://localhost:4873，根据提示输入用户名，密码，邮箱
- 验证是否添加用户成功： npm who am i
- 在http://localhost:4873/ 页面登录用户

## 发布

- npm  publish
- 发布后想要撤销发布的包：npm unpublish 包名 --force
- 下载发布后的包：npm install --save 包名   

```text
#未注册且私服允许注册的
npm adduser --registry=http://xxx.xxx.x.xx:4873
#输入npm账号用户名、密码和邮箱，如下：
Username: better1025
Password:
Email: (this IS public) xxx@xx.com
Logged in as better1025 on http://xxx.xxx.x.xx:4873/.
#之前已经注册过了，就使用下面的登录命令
npm login --registry=http://xxx.xxx.x.xx:4873
```

- npm version

> npm version 是一个用于管理 Node.js 应用版本的命令行工具。该工具可用于更新 package.json 文件中的版本号以及将这个版本号提交到源代码控制系统中。

npm version 命令有以下几个参数：

major：当你的应用做了不兼容的改动时，使用这个参数来升级主版本号。
minor：当你的应用增加了新功能时，使用这个参数来升级次版本号。
patch：当你的应用进行了 bug 修复时，使用这个参数来升级补丁版本号。
premajor：当你的应用处于一个开发阶段，但是你已经做了一些不兼容的改动时，使用这个参数来升级主版本号，并且为预发行版本打上标记。
preminor：当你的应用处于一个开发阶段，但是你已经增加了新功能时，使用这个参数来升级次版本号，并且为预发行版本打上标记。
prepatch：当你的应用处于一个开发阶段，但是你已经进行了 bug 修复时，使用这个参数来升级补丁版本号，并且为预发行版本打上标记。
prerelease：当你的应用处于一个开发阶段，并且你希望发布一个预发行版本时，使用这个参数来为当前版本号打上标记。





## 项目中使用npm私服的包

### 方式一
需要在根目录下新增.npmrc文件，更改依赖安装地址。这种方式不用手动切换镜像源地址。

```
registry=http://192.168.110.109:4873/
```

然后运行 yarn / npm i 安装依赖

### 方式二

每次安装依赖前需要手动切换。

nrm切换


##### **安装npm包**

1、将本地镜像源切换到对应服务器

```
nrm use aicai  

```

2、再执行yarn/npm安装命令

```
yarn | npm install  
```

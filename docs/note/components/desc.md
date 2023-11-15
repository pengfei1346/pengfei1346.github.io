---
sidebar:
title: 组件库使用
step: 6
isTimeLine: true
date: 2020-09-14
tags:
-
categories:
- 
---
# 新项目使用

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



# npm私有仓库说明

> 备注：
>  目前部署在192.168.110.109，端口为4873
> 	用户名为ac，密码123456，邮箱填写你自己的邮箱
>  服务器配置地址：verdaccio配置目录地址 /usr/npm

[gitlab 地址](https://code.aicaichina.com/aicai/web-components/blob/master/README.md#%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93
)

##  **发布新的npm包**

1、输入npm账号用户名、密码和邮箱，账号： ac	   密码：123456

```
//账号： ac 
//密码：123456
npm adduser --registry=http://192.168.110.109:4873   
```

2、cd 项目目录

```
npm publish --registry=http://192.168.110.109:4873   
```

##### **删除版本**

```
npm unpublish ac-components@x.x.x

```








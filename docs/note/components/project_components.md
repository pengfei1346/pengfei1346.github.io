---
sidebar:
title: 组件库设计
step: 6
isTimeLine: true
date: 2020-09-14
tags:
- 组件库
---

# 搭建组件库

## 目录结构

pnpm + vite

```text
project
├─.husky           # github配置
│  └─workflows      # 自动构建部署配置
├─docs              # 文档内容
│   ├─.vitepress    
│   │  ├─config.ts  # vitepress配置
│   │  ├─cache      # 缓存文件，可忽略提交
│   │  ├─dist       # 构建包，可忽略提交
│   │  └─theme      # 样式和主题
├─package           # 子项目
│   ├─cli           # cli工具
│   ├─shared        # 公共工具库
│   ├─hooks         # hooks库
│   ├─ui            # 组件库
│   │  ├─src        # 存放组件
│   │  ├─demo       # 使用示例
│   │  ├─script      # 存放脚本
│   │  ├─index.ts       # 项目入口文件
│   │  ├─package.json       # 项目依赖
│   │  └─vite.config.ts      # 项目打包配置
│   ├─...   
├─node_modules      # 根依赖目录，可忽略提交
├─.gitignore        # git提交忽略配置
├─pnpm-workspace.yaml        # pnpm配置
├─package.json      # node.js配置
└─README.md         # 工程说明
```

## 说明

- 开启workspace

pnpm-workspace.yaml

```text
packages:
  - packages/*
  - docs

```

- 安装依赖

```shell
pnpm i 
```

- 引用子项目的情况

定义子项目的package.json

```text
 {
  "dependencies": {
    "@ac-repo/shared": "workspace:*", // 其他子项目中package.json中的name，也就是项目名
    "@ac-repo/hooks": "workspace:*"
  }
}
```

- 子项目package.json参考

```text
{
  "name": "@ac-repo/ui-v3", // 包的名称
  "version": "1.0.0", // 版本
  "description": "vue3组件库项目", // 描述
  "main": "lib/index.js", // 包主文件
  "module": "es/index.mjs", // esmodule 的包主文件
  "scripts": { // 命令
    "dev": "vite",
    "build:style": "gulp -f script/build.ts",
    "build": "npm run build:style && vite build ",
    "docs:build": "vite build --mode docs"
  },
  "author": "",
  "license": "ISC",
  "peerDependencies": { 
    "vue": "^3.2.0",
    "element-plus": "^2.2.0"
  },
  "dependencies": {
    "@element-plus/icons-vue": "^2.0.6",
    "@ac-repo/shared": "workspace:*",
    "@ac-repo/hooks": "workspace:*",
    "lodash": "^4.17.21"
  },
  "devDependencies": {// 运行时依赖
    "@vitejs/plugin-vue": "^2.3.3",
    "element-plus": "^2.2.8",
    "vue": "^3.2.36",
    "vue-router": "4"
  }
}
```

## 本地调试

通过script标签引入
新建一个html文档（我们这里是在example文件夹下新建一个index.html），引入打包好的组件库引入。

```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body,#app {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <div id="app">
        <bsd-frame><div>大屏内容</div></bsd-frame>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="../dist/bs-display-umd.js"></script>
<script>
    new Vue({
        el: '#app'
    })
</script>
</html>
```

文字是黑色的，而且被缩小后文字太小了，所以截图中基本上看不到。如果设置：
css复制代码color: #fff;
font-size: 100px;

则能看到有拉伸效果的文字。

### import引入

搭建一个用于测试的vue项目LibTest，或者，更方便快捷一点的，在已有的vue的项目中加一个测试组件，并添加到routes中。
在myLib组件库项目根目录下执行 npm link

bash复制代码cd bs-display

```
npm link
yarn link
pnpm link -g
```

在测试项目根目录下执行npm link bs-display
bash复制代码cd LibTest

```
npm link bs-display  //这个bs-display是在bs-display项目的package.json中定义的"name": "bs-display"
yarn link bs-display 
pnpm link bs-display -g
```

<br/>

然后，就可以和普通npm安装的组件库一样使用了
在测试项目LibTest的入口js中，引入bs-display，执行Vue.use()注册组件
javascript复制代码

```
import { Frame } from 'bs-display'  //按需引入
Vue.use(Frame)
```

<br/>

在LibTest的App.vue中使用组件：

```
<template>
  <div>
    <bsd-frame><div>大屏内容</div></bsd-frame>
  </div>
</template>
```

<br/>

### npm发布

- 注册npm账号
- 在npm官网按照提示注册账号。npm官网
- 登录npm账号
- 在命令行登录npm账号
- 在命令行输入：
  npm login

  就会出现下面的登录界面

如果你的npm源是淘宝镜像，那么需要更换回默认的npm源：


```
npm config set registry https://registry.npmjs.org/
```

<br/>

npm publish
在发布之前，如果你的包引用了第三方包，则需要确保在package.json中的dependencies字段，写入了依赖的包及版本。
修改package.json中的files字段，指定需要上传到npm的文件。

```
json复制代码"files": [
  "dist"  //上传dist文件夹中的所有文件
],

此外，包的名字对应的是package.json中的"name"字段，这里我们将包名改成big-screen-display。
然后，在命令行输入：npm publish。等待发布完成即可。

这是在测试项目中通过

npm i big-screen-display --S
安装到node_modules中的big-screen-display包的内容。

```

<br/>

### npm更新

当包的内容进行了更新，需要再次发布时:
首先，运行npm version patch更新版本，它会修改package.json文件中的version值。
然后，再次运行npm publish，就会上传最新版本的包。

### npm删除

```
npm unpublish big-screen-display@1.0.0     删除指定版本
npm unpublish big-screen-display --force   删除整个包
```

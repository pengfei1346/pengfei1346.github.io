
### 目录结构

```text
jzplp.github.io
├─.github           # github配置
│  └─workflows      # 自动构建部署配置
├─bin               # 发布脚本
├─components        # vue组件
├─docs              # 博客内容
│   ├─.vitepress    
│   │  ├─config.ts  # vitepress配置
│   │  ├─cache      # 缓存文件，可忽略提交
│   │  ├─dist       # 构建包，可忽略提交
│   │  └─theme      # 样式和主题
│   ├─index.md      # 博客首页
│   ├─xxx           # 存放博文
│   ├─...           # 更多博客目录
│   └─public        # 博客使用的静态资源
├─node_modules      # 依赖目录，可忽略提交
├─script            # 存放脚本
├─.gitignore        # git提交忽略配置
├─package.json      # node.js配置
└─README.md         # 工程说明
```

### md配置格式

```md

---
sidebar:
group:
isTimeLine: true
title: title
date: 2022-12-21
tags:
 - js
categories:
 - js
sticky: 1
---

```

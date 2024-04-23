---
sidebar:
title: sentry
isTimeLine: true
date: 2024-03-14
tags:
- 工程化
- CI/CD
categories:
- 工程化
---
# sentry

## sentry 私有部署搭建

### 使用docker
1. docker、docker compose安装 - 略
2. sentry部署安装 - [sentry 私有化部署](/docs/note/system/前端监控.md)

## sentry配置

[Sentry For Vue 完整接入详解](https://blog.51cto.com/u_15168528/3882366)
[前端监控企业级实践——Sentry](https://zhuanlan.zhihu.com/p/589889376?utm_id=0)


### 术语
Event：事件。
每次产生的日志记录，每个event有很多元信息，包括事件级别，项目信息，环境等。可通过点击具体事件对应的“JSON”数据进行查看

Issue：问题。
相同的地方产生的一个异常称为一个Issue（是同一类问题的聚合）。假如在同一个位置发生了两次报错，那么会产生两个Event事件，但是只有一个Issue。

DSN：客户端（具体项目）密钥。
DSN是一个url，包含相关密钥信息，客户端与服务端（sentry服务器）就是通过这个DSN进行通信，上报错误信息的。

Auth Token：授权令牌。
授权令牌允许基于你的账户使用Sentry API，我们主要用到使用@sentry/cli进行上传sourceMap文件等操作时，sentry/cli会基于Auth Token进行调用相应API方法。

Org：组织名称。
对应公司部署的sentry服务器上的组织名称。

Release：版本号。

Project：客户端名称。（接入sentry的具体项目名）

Tag：标签。










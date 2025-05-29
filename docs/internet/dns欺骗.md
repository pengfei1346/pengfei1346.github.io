---
sidebar:
group:
title: dns欺骗
isTimeLine: true
date: 11-10-2023
---
# dns欺骗

## 说明

dns欺骗利用的是dns缓存原理

### 应用
✅ 本地开发环境模拟（hosts文件、dnsmasq）
  ------公众号开发的本地调试
✅ 安全测试（钓鱼模拟、防劫持测试）
✅ 网络调试（代理、故障注入）
✅ 爬虫优化（绕过封锁、缓存加速）
✅ K8s/微服务治理（CoreDNS、Istio流量控制）

### 场景：模拟生产环境域名

在本地开发时，开发者可能需要让 api.example.com 指向本地的 127.0.0.1 或内网测试服务器，而不是真实的生产环境。

```text
//1、vue.config.js修改配置

devserver: {
   port: 80,
   host: 'https://xxx.com'
}

//2、修改本地 hosts 文件（如 C:\Windows\System32\drivers\etc\hosts 或 /etc/hosts）

增加配置：

127.0.0.1  https://xxx.com

//3、刷新dns缓存 使配置生效  （可能需要，我本机不刷新也会生效）

```





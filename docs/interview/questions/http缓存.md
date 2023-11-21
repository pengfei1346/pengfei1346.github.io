---
isTimeLine: true
title: http缓存
date: 2021-11-21
tags:
- http
---
# http缓存

## http缓存

### 缓存类型

**强缓存**

* expires
* cache-control

字段解释

- Cache-Control  
  缓存的最大有效期(max-age），是否可以被共享（public或private），是否可以被修改（no-cache或no-store）

- Cache-Control  
  指定缓存的绝对过期时间


**协商缓存**

> 协商缓存的状态码为304

* Last-Modified/If-Modified-Since
* ETag/If-None-Match

字段解释

- Last-Modified / If-Modified-Since  

  Last-Modified ----  服务器端返回的字段，它表示资源的最后修改时间。   
  If-Modified-Since  ----  客户端发送的字段，它表示资源的上次获取时间。
  

- ETag/If-None-Match

  ETag ----  服务器端返回的字段，它表示资源的唯一标识符。   
  If-None-Match  ----  客户端发送的字段，它表示资源的期望标识符。

**优先级**

1. 强缓存优先级 > 协商缓存优先级
2. cache-control 优先级 > expires 优先级。
3. ETag 优先级 > Last-Modified 优先级

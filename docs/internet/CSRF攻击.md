---
sidebar:
group:
title: CSRF攻击
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# CSRF攻击

CSRF 跨站请求伪造
Cross Site Request Forgery，是指攻击者可以在用户不知情的情况下，窃用其身份在对应的网站进行操作

原理：攻击者诱导受害者进入第三方网站，在第三方网站中向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的身份凭证，达到冒充用户对被攻击的网站执行某项操作的目的。

要点：

利用浏览器在发送 HTTP 请求时会自动带上 Cookie 的原理，冒用受害者身份请求。
攻击一般发生在第三方网站上。
攻击者只能“冒用”受害者的身份凭证，并不能获取。
跨站请求有多种方式，常见的有图片 URL、超链接、Form 提交等。
例子：

攻击者在第三方网站上放置一个如下的 img

<img src="http://hzfe.org/article/delete" />
受害者访问该页面后（前提：受害者在 hzfe.org 登录过且产生了 Cookie 信息），浏览器会自动发起这个请求，hzfe.org 就会收到包含受害者身份凭证的一次跨域请求。

若目标网站没有任何防范措施，那攻击者就能冒充受害者完成这一次请求操作。

防范：

使用 CSRF Token 验证用户身份

原理：服务端生成 CSRF Token （通常存储在 Session 中），用户提交请求时携带上 Token，服务端验证 Token 是否有效。
优点：能比较有效的防御 CSRF （前提是没有 XSS 漏洞泄露 Token）。
缺点：大型网站中 Session 存储会增加服务器压力，且若使用分布式集群还需要一个公共存储空间存储 Token，否则可能用户请求到不同服务器上导致用户凭证失效；有一定的工作量。
双重 Cookie 验证

原 理：利用攻击者不能获取到 Cookie 的特点，在 URL 参数或者自定义请求头上带上 Cookie 数据，服务器再验证该数据是否与 Cookie 一致。
优点：无需使用 Session，不会给服务器压力。
设置 Cookie 的 SameSite 属性可以用来限制第三方 Cookie 的使用，可选值有 Strict、Lax、None。

Strict：完全禁止第三方 Cookie。
Lax：只允许链接、预加载请求和 GET 表单的场景下发送第三方 Cookie。
None：关闭 SameSite 属性。
设置白名单，仅允许安全域名请求

增加验证码验证


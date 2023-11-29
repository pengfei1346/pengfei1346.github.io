---
sidebar:
group:
title: http
isTimeLine: true
date: 2023-11-28
tags:
categories:
sticky: 1
---
# http

https://zhuanlan.zhihu.com/p/488681676

## http 历程


### http1.0

每次请求都需要重新建立tcp连接，请求完后立即断开与服务器连接，这很大程度造成了性能上的缺陷，http1.0被抱怨最多的就是连接无法复用。

### http1.1

引入了长连接（keep-alive），相较于1.0减少了连接和关闭的延迟，提高了效率，但是若干个请求还是需要串行排队处理，如果一旦某个请求超时，后面的就会被阻塞，也就是常说的线头阻塞。

### http2

1.新的二进制格式传输：二进制即0和1的组合，实现方便健壮，而1.x版本是基于文本，解析存在缺陷

2.多路复用：一个连接可以有多个请求，且可以混杂在一起根据requestid来区分不同的请求，提高了连接的利用率，降低了延迟

3.header头部压缩：通讯两方各自缓存了一份 header请求头表，避免了重复的header传输，且缩小了包的体积大小

4.服务端推送功能：可以服务端主动向客户端push消息



### http3

HTTP/3是基于UDP协议实现的HTTP协议版本，它是在HTTP/2的基础上进一步改进的。HTTP/3的主要优点包括：

提高了传输速度：由于HTTP/3基于UDP协议，它能够更快速地传输数据，因为UDP协议的头部开销比TCP协议小，并且没有TCP的拥塞控制机制，可以更好地利用带宽。
更好的安全性：HTTP/3使用了TLS协议来保证通信的安全性，TLS协议可以对通信内容进行加密，防止窃听和篡改。
更好的并发性：HTTP/3引入了多路复用技术，可以同时处理多个请求和响应，提高了并发处理能力，减少了延迟和等待时间。
支持QUIC协议：HTTP/3支持使用QUIC协议进行通信，QUIC是一种基于UDP协议的传输层协议，它能够提供更快的传输速度和更好的安全性。

### HTTP状态码

1XX系列：指定客户端应相应的某些动作，代表请求已被接受，需要继续处理。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。

2XX系列：代表请求已成功被服务器接收、理解、并接受。这系列中最常见的有200、201状态码。

200状态码：表示请求已成功，请求所希望的响应头或数据体将随此响应返回

201状态码：表示请求成功并且服务器创建了新的资源，且其 URI 已经随Location 头信息返回。假如需要的资源无法及时建立的话，应当返回 ‘202 Accepted’

202状态码：服务器已接受请求，但尚未处理

3XX系列：代表需要客户端采取进一步的操作才能完成请求，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。这系列中最常见的有301、302状态码。

301状态码：被请求的资源已永久移动到新位置。服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。301永久永久永久

302状态码：请求的资源临时从不同的URI响应请求，但请求者应继续使用原有位置来进行以后的请求

304状态码:自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。 如果网页自请求者上次请求后再也没有更改过，您应将服务器配置为返回此响应(称为 If-Modified-Since HTTP 标头)。

4XX系列：表示请求错误。代表了客户端看起来可能发生了错误，妨碍了服务器的处理。常见有：401、404状态码。

401状态码：请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。

403状态码：服务器已经理解请求，但是拒绝执行它。与401响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。

404状态码：请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。

5xx系列：代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。常见有500、503状态码。

500状态码：服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器的程序码出错时出现。

502和504的区别

502 bad gateway 顾名思义 网关错误 后端服务器tomcat没有起来，应用服务的问题（前提是接入层7层正常的情况下）。

应用服务问题一种是应用本身问题；另一种是因为依赖服务问题比如依赖服务RT高，依赖的服务有大的读取（mysql慢查，http等），以至于调用方超过超时read时间；服务集群压力大时，也会出现502超时（502理解为不可响应或响应不过来，其实还是不可响应）。

504 gateway time-out 顾名思义 网关超时 一般计算机中的超时就是配置错了，此处一般指nginx做反向代理服务器时，所连接的服务器tomcat无响应导致的。

503状态码：由于临时的服务器维护或者过载，服务器当前无法处理请求。通常，这个是暂时状态，一段时间会恢复



### Header 解释 示例

Accept 指定客户端能够接收的内容类型 Accept: text/plain, text/html,application/json

Accept-Charset 浏览器可以接受的字符编码集。 Accept-Charset: iso-8859-5

Accept-Encoding 指定浏览器可以支持的web服务器返回内容压缩编码类型。 Accept-Encoding: compress, gzip

Accept-Language 浏览器可接受的语言 Accept-Language: en,zh

Accept-Ranges 可以请求网页实体的一个或者多个子范围字段 Accept-Ranges: bytes

Authorization HTTP授权的授权证书 Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

Cache-Control 指定请求和响应遵循的缓存机制 Cache-Control: no-cache

Connection 表示是否需要持久连接。keep-alive（HTTP 1.1默认进行持久连接） Connection: close（1.0）

Cookie HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。 Cookie: $Version=1; Skin=new;

Content-Length 请求的内容长度 Content-Length: 348

Content-Type 请求的与实体对应的MIME信息 Content-Type: application/x-www-form-urlencoded

Date 请求发送的日期和时间 Date: Tue, 15 Nov 2010 08:12:31 GMT

Expect 请求的特定的服务器行为 Expect: 100-continue

From 发出请求的用户的Email From: user@email.com

Host 指定请求的服务器的域名和端口号 Host: www.zcmhi.com

If-Match 只有请求内容与实体相匹配才有效 If-Match: “737060cd8c284d8af7ad3082f209582d”

If-Modified-Since 如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码 If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT

If-None-Match 如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变 If-None-Match: “737060cd8c284d8af7ad3082f209582d”

If-Range 如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为Etag If-Range: “737060cd8c284d8af7ad3082f209582d”

If-Unmodified-Since 只在实体在指定时间之后未被修改才请求成功 If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT

Max-Forwards 限制信息通过代理和网关传送的时间 Max-Forwards: 10

Pragma 用来包含实现特定的指令 Pragma: no-cache

Proxy-Authorization 连接到代理的授权证书 Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

Range 只请求实体的一部分，指定范围 Range: bytes=500-999

Referer 先前网页的地址，当前请求网页紧随其后,即来路 Referer: http://www.zcmhi.com/archives...

TE 客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息 TE: trailers,deflate;q=0.5

Upgrade 向服务器指定某种传输协议以便服务器进行转换（如果支持） Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11

User-Agent User-Agent的内容包含发出请求的用户信息 User-Agent: Mozilla/5.0 (Linux; X11)

Via 通知中间网关或代理服务器地址，通信协议 Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)

Warning 关于消息实体的警告信息 Warn: 199 Miscellaneous warning










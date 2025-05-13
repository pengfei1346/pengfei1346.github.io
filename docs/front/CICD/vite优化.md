---
sidebar:
title: vite优化
isTimeLine: true
date: 2024-03-14
tags:
- 工程化
- CI/CD
categories:
- 打包优化
- 性能优化
---
# vite优化

## 通过 Gzip 和 Brotli 压缩的效果

### 压缩效果对比
* Gzip：

压缩率：30%-70%（取决于文件类型，文本类文件压缩率高，如 HTML、CSS、JS）。
优势：兼容性极佳，所有主流浏览器和服务器均支持。
缺点：压缩效率略低于 Brotli，解压速度稍慢。
* Brotli：

压缩率：20%-25% 高于 Gzip（同等质量下文件更小）。
优势：更高效的压缩算法，适合静态资源（如字体、图片、JS）。
缺点：兼容性略差（IE 不支持，需服务器额外配置）。

### 实际效果
文件体积减小：

假设一个未压缩的 JS 文件大小为 1MB：
* 使用 Gzip 压缩后：300KB-700KB。
* 使用 Brotli 压缩后：250KB-500KB

### vite配置

 配置 Gzip 和 Brotli 压缩

#### 1安装插件：

```shell
npm install vite-plugin-compression --save-dev
```
#### 2 vite配置：

```js
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    viteCompression({
      verbose: true, // 打印压缩日志
      disable: false, // 启用压缩
      threshold: 10240, // 仅对大于 10KB 的文件进行压缩
      algorithm: 'gzip', // 使用 gzip 压缩
      ext: '.gz', // 生成的文件后缀
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress', // 使用 Brotli 压缩
      ext: '.br', // 生成的文件后缀
    }),
  ],
});
```

#### 3 nginx 配置 - 配置服务器支持 Gzip 和 Brotli：
    
```text
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        root /path/to/your/dist;
        index index.html;

        # 启用 gzip 和 brotli 压缩文件的自动选择
        gzip_static on;
        brotli_static on;

        # 开启 gzip 动态压缩（可选，若未生成 .gz 文件时使用）
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
        gzip_min_length 1024;

        # 开启 brotli 动态压缩（可选，若未生成 .br 文件时使用）
        brotli on;
        brotli_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
        brotli_min_length 1024;
    }
}
```




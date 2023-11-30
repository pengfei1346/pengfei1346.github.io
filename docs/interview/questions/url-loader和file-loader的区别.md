---
sidebar:
group:
title: 
isTimeLine: true
date: 11-10-2023
---
# url-loader和file-loader的区别?

## url-loader和file-loader的区别?

file-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。


url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。

url-loader 可以识别图片的大小，然后把图片转换成base64，从而减少代码的体积，如果图片超过设定的现在，就还是用 file-loader来处理





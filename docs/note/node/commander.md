---
sidebar:
title: commander
step: 6
isTimeLine: true
date: 2020-09-14
tags:
 - 
categories:
 - 
---
# commander


## 使用说明

```js
const commander = require("commander"); // 第三方包
const chalk = require("chalk");
 
console.log(chalk.green("====参数的解析和commander的简单使用===="));
commander.name("node"); // 名字介绍
commander.usage("<path file>"); // 使用方式介绍
commander.version("1.0.0"); // 版本
commander.option("-p --port <v>", "设置端口号"); // 参数介绍
commander.option("-c --config <v>", "配置文件"); // 参数介绍
 
// 创建指令 <>表示变量参数
commander
  .command("create <item>")
  .description("创建项目的指令")
  .action((item) => {
    // 行为
    console.log(chalk.red("创建项目 --- " + item));
  });
 
// 格式化参数 返回参数的配置
const args = commander.parse(process.argv);
```

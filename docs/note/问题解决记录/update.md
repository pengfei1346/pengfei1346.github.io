---
sidebar:
title: vue2.x -> vue2.7升级记录
tags:
- vue
---
# vue2.x -> vue2.7记录

## 1、 vue upgrade

```text
vue upgrade
```

## 2
vue-template-compiler 可以删掉了，因为 vue 2.7 中不再需要它
eslint-plugin-vue 需要升级到 9

// "vue": "^2.6.14",
"vue": "^2.7.8",

// "vue-template-compiler": "^2.6.14",

// "eslint-plugin-vue": "^8.6.0",
"eslint-plugin-vue": "^9.0.0",

## 3
$ vue-cli-service serve --mode test
ERROR  Invalid options in vue.config.js: "css.requireModuleExtension" is not allowed
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

Process finished with exit code 1

## 4

删除css.ExtractTextPlugin



```text
ERROR  ValidationError: Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
- options has an unknown property 'disableHostCheck'. These properties are valid:
object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? }

```











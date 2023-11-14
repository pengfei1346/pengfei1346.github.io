---
sidebar:
title: prompts
step: 6
isTimeLine: true
date: 2020-09-14
tags:
-
categories:
- 
---
# prompts

## 说明

prompts 是一个 Node.js npm 包，用来实现命令行问答程序，通常被一些 CLI 程序使用，比如 create-vite 就是使用 prompts 让用户选择哪种模板创建程序的。


## 使用说明

每条 Prompt 都是 PromptObject 类型对象，包含一个 type 属性，用来决定提问类型。

```text
type PromptType = "text" | "password" | "invisible" | "number" | "confirm" | "list" | "toggle" | "select" | "multiselect" | "autocomplete" | "date" | "autocompleteMultiselect"; 
```

* text：文本提问 

```js
console.log(
  await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'Project Name:',
      initial: 'vite-project'
    }
  ])
) 
```

字段含义：

name：指定当前提问在返回对象中的属性名
message：显示给用户看的提问内容
initial：用户在不输入情况下，采用的默认值 


* confirm：确认提问 


```js
const defaultTargetDir = 'vite-project'
let targetDir = defaultTargetDir

console.log(
  await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'Project Name:',
      initial: defaultTargetDir,
      onState: (state) => {
        console.log(state)
        targetDir = state.value
      }
    },
    {
      type: 'confirm',
      name: 'overwrite',
      message: `Target directory "${targetDir}" is not empty. Remove existing files and continue?`,
      initial: true
    }
  ])
) 
```

name：指定当前提问在返回对象中的属性名

message：显示给用户看的提问内容

initial：用户在不输入情况下，采用的默认值。confirm 默认值是 false（对应 N/No），我们改为 true（对应 Y/Yes） 


* select：选择项 

```js
const FRAMEWORKS = [
  {
    name: 'vanilla',
    display: 'Vanilla'
  },
  {
    name: 'vue',
    display: 'Vue'
  },
  {
    name: 'react',
    display: 'React'
  },
  {
    name: 'preact',
    display: 'Preact'
  }
]


console.log(
  await prompts([
    {
      type: 'select',
      name: 'framework',
      message: 'Select a framework:',
      choices: FRAMEWORKS.map(framework => {
        return {
          title: framework.display,
          value: framework
        }
      })
    }
  ])
) 
```

name：指定当前提问在返回对象中的属性名

message：显示给用户看的提问内容

choices：选项列表，是一个数组。成员类型 { title: string, value:any }——title 是选择时展示的文本，value 表示返回值。 


### 配合 kolorist 一起使用
目前选择框架时候，高亮文字都是一样的颜色。为了便于区分，我们可以为不通框架文字展示时显示不通颜色，这里需要借助 kolorist 工具包。 

```shell
pnpm install kolorist 
```

修改 select 案例代码： 
```js
import prompts from 'prompts';
import {
  cyan,
  green,
  magenta,
  yellow,
} from 'kolorist'

const FRAMEWORKS = [
  {
    name: 'vanilla',
    display: 'Vanilla',
    color: yellow
  },
  {
    name: 'vue',
    display: 'Vue',
    color: green
  },
  {
    name: 'react',
    display: 'React',
    color: cyan
  },
  {
    name: 'preact',
    display: 'Preact',
    color: magenta
  }
]


console.log(
  await prompts([
    {
      type: 'select',
      name: 'framework',
      message: 'Select a framework:',
      choices: FRAMEWORKS.map(framework => {
        return {
          title: framework.color(framework.display),
          value: framework
        }
      })
    }
  ])
) 
```










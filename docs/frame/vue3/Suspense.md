---
sidebar:
title: 内置组件 - Suspense
date: 2022-09-14
tags:
- vue3
---
# 内置组件 - Suspense

## 解决什么问题？

假如组件树中有多个嵌套组件，每个子组件都需要处理自己的加载、报错和完成状态。在最坏的情况下，我们可能会在页面上看到三个旋转的加载态，在不同的时间显示出内容。

--》

Suspense -> 在等待整个多层级组件树中的各个异步依赖获取结果时，在顶层展示出加载中或加载失败的状态

```text
<Suspense>
└─ <Dashboard>
   ├─ <Profile>
   │  └─ <FriendStatus>（组件有异步的 setup()）
   └─ <Content>
      ├─ <ActivityFeed> （异步组件）
      └─ <Stats>（异步组件）
```

## 怎么使用

<Suspense> 可以等待的异步依赖有两种：

1. 带有异步 setup() 钩子的组件。这也包含了使用 \<script setup> 时有顶层 await 表达式的组件。
2. 异步组件。

### setup

setup() 钩子可以是异步的

```vue
export default {
  async setup() {
    const res = await fetch(...)
    const posts = await res.json()
    return {
      posts
    }
  }
}
```
顶层 await 表达式会自动让该组件成为一个异步依赖
```vue
<script setup>
const res = await fetch(...)
const posts = await res.json()
</script>

<template>
  {{ posts }}
</template>
```

### 异步组件

如果组件关系链上有一个 \<Suspense>,那么这个异步组件就会被当作这个 <Suspense> 的一个异步依赖 ，
> 这种情况下，加载状态是由 <Suspense> 控制，而该组件自己的加载、报错、延时和超时等选项都将被忽略
> 
> 异步组件也可以通过在选项中指定 suspensible: false 表明不用 Suspense 控制，并让组件始终自己控制其加载状态

## 加载中状态

<Suspense> 组件有两个插槽：#default 和 #fallback

> 都只允许一个直接子节点
> 
> 显示优先级； 默认槽: default > 后备槽: fallback

```vue
<Suspense>
  <!-- 具有深层异步依赖的组件 -->
  <Dashboard />

  <!-- 在 #fallback 插槽中显示 “正在加载中” -->
  <template #fallback>
    Loading...
  </template>
</Suspense>
```

## 事件

<Suspense> 组件会触发三个事件：pending、resolve 和 fallback。pending 事件是在进入挂起状态时触发。resolve 事件是在 default 插槽完成获取新内容时触发。fallback 事件则是在 fallback 插槽的内容显示时触发。

## 错误处理
使用 errorCaptured 选项或者 onErrorCaptured() 钩子，在使用到 <Suspense> 的父组件中捕获和处理异步错误。







---
sidebar:
group:
title: react和vue中hooks的区别
isTimeLine: true
date: 11-10-2023
---
# react和vue中hooks的区别

## vue hook

Vue hook 只会被注册调用一次，因为它是声明在 setup 里，一次组件实例化只调用一次 setup，Vue 之所以能避开这些问题，主要还是得益于数据响应式，不需要链表对 hooks 进行记录，而是直接对数据代理观察，但它也有困扰的地方，就是不得不返回一个包装对象，通过 .value 获取。

因为在 JS 里基础类型只有值，没有引用，或者说只存在栈里，使用完就回收了，无法追踪后续变化，自然做不到数据的代理和拦截

## React hook

React hook 底层是基于链表实现的，每次组件被 render 的时候都会按顺序执行所有 hooks，而且正因为底层是链表，每个 hook 的 next 是指向下一个 hook 的，所以我们写代码是不能在不同的 hooks 调用里使用条件判断/函数嵌套之类的，因为这会导致执行顺序不对，从而出错






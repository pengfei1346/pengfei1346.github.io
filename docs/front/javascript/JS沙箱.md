---
isTimeLine: true
title: 沙箱
date: 2021-11-21
tags:
- js基础
---
# 沙箱

## 沙箱

沙箱(Sandbox)，就是让你的程序跑在一个隔离的环境下，不对外界的其他程序造成影响.

Chrome浏览器打开的每个页面就是一个沙箱，保证彼此独立互不影响

### 应用：

* qiankun的js隔离
* Vue模板表达式的计算是运行在一个沙盒之中的，在模板字符串中的表达式只能获取部分全局对象

如何实现一个 JS 沙箱？

要实现一个沙箱，需要去制定一套程序执行机制，在这套机制的作用下沙箱内部程序的运行不会影响到外部程序的运行

**with**

with的作用：在于改变作用域；with语句将某个对象添加到作用域链的顶部

沙箱要求
要实现这样一个沙箱，要求程序中访问的所有变量均来自可靠或自主实现的上下文环境，而不会从全局的执行环境中取值

```js
// 定义全局变量foo
var foo = "foo1";

// 执行上下文对象
const ctx = {
  func: variable => {
    console.log(variable);
  },
  foo: "f1"
};

// 非常简陋的沙箱
function veryPoorSandbox(code, ctx) {
  // 使用with，将eval函数执行时的执行上下文指定为ctx
  with (ctx) {
    // eval可以将字符串按js代码执行，如eval('1+2')
    eval(code);
  }
}

// 待执行程序
const code = `func(foo)`;

veryPoorSandbox(code, ctx); 
// 打印结果："f1"，不是最外层的全局变量"foo1"

```


**With + Proxy**

```js
var foo = "foo1";

// 执行上下文对象
const ctx = {
  func: variable => {
    console.log(variable);
  }
};

// 构造一个 with 来包裹需要执行的代码，返回 with 代码块的一个函数实例
function withedYourCode(code) {
  code = "with(shadow) {" + code + "}";
  return new Function("shadow", code);
}

// 可访问全局作用域的白名单列表
const access_white_list = ["func"];

// 待执行程序
const code = `func(foo)`;

// 执行上下文对象的代理对象
const ctxProxy = new Proxy(ctx, {
  has: (target, prop) => {
    // has 可以拦截 with 代码块中任意属性的访问
    if (access_white_list.includes(prop)) {
      // 在可访问的白名单内，可继续向上查找
      return target.hasOwnProperty(prop);
    }
    if (!target.hasOwnProperty(prop)) {
      throw new Error(`Not found - ${prop}!`);
    }
    return true;
  }
});

// 没那么简陋的沙箱
function littlePoorSandbox(code, ctx) {
  // 将 this 指向手动构造的全局代理对象
  withedYourCode(code).call(ctx, ctx); 
}
littlePoorSandbox(code, ctxProxy);

// 执行func(foo)，报错： Uncaught Error: Not found - foo!

```
**（iframe）**

> iframe 标签可以创造一个独立的浏览器原生级别的运行环境，这个环境由浏览器实现了与主环境的隔离

```js
// 可以把iframe.contentWindow作为当前沙箱执行的全局对象

// 沙箱全局代理对象类
class SandboxGlobalProxy {
  constructor(sharedState) {
    // 创建一个 iframe 标签，取出其中的原生浏览器全局对象作为沙箱的全局对象
    const iframe = document.createElement("iframe", { url: "about:blank" });
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const sandboxGlobal = iframe.contentWindow; // 沙箱运行时的全局对象

    return new Proxy(sandboxGlobal, {
      has: (target, prop) => {
        // has 可以拦截 with 代码块中任意属性的访问
        if (sharedState.includes(prop)) {
          // 如果属性存在于共享的全局状态中，则让其沿着原型链在外层查找
          return false;
        }
        if (!target.hasOwnProperty(prop)) {
          throw new Error(`Not find - ${prop}!`);
        }
        return true;
      }
    });
  }
}

// 构造一个 with 来包裹需要执行的代码，返回 with 代码块的一个函数实例
function withedYourCode(code) {
  code = "with(sandbox) {" + code + "}";
  return new Function("sandbox", code);
}
function maybeAvailableSandbox(code, ctx) {
  withedYourCode(code).call(ctx, ctx);
}

const code_1 = `
  console.log(history == window.history) // false
  window.abc = 'sandbox'
  Object.prototype.toString = () => {
      console.log('Traped!')
  }
  console.log(window.abc) // sandbox
`;

const sharedGlobal_1 = ["history"]; // 希望与外部执行环境共享的全局对象

const globalProxy_1 = new SandboxGlobalProxy(sharedGlobal_1);

maybeAvailableSandbox(code_1, globalProxy_1);

// 对外层的window对象没有影响
console.log(window.abc); // undefined
Object.prototype.toString(); // 并没有打印 Traped

```






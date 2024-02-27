---
title: history之popState和pushState
date: 2023-09-14
---

# history之popState和pushState

# history

> window.history是只读属性。

使用 history.pushState() 可以改变referrer，它在用户发送XMLHttpRequest请求时在HTTP头部使用，改变state后创建的XMLHttpRequest对象的referrer都会被改变。因为referrer是标识创建XMLHttpRequest对象时 this 所代表的window对象中document的URL。


* pushState()存储当前历史记录点，
* replaceState()替换当前历史记录点
* popstate监听当前历史记录点。-onpopstate

## pushState

```js
history.pushState(stateObject, title, URL);
```

pushState方法可以在不刷新页面的情况下，改变页面的URL，这样就可以实现前端路由的效果。

该方法将新的状态（state）压入浏览器历史记录栈，并且更新页面的URL。该方法接收三个参数：

* stateObject：表示新压入的状态对象，可以是任何JavaScript对象。
* title：新页面的标题，一般传递一个空字符串即可。
* URL：表示新页面的URL地址。


该方法用于监听浏览器的历史记录改变事件，并执行相关的处理。当用户点击浏览器的后退或前进按钮时，就会触发该事件。在事件处理函数中，可以根据event.state属性获取到当前的历史状态，从而进行相应的处理。

```js
window.addEventListener("popstate", function(event) { // 处理历史记录改变事件 });
```


## replaceState

replaceState是对当前状态对象的修改

replaceState(state, title, url)



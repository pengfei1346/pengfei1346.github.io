---
sidebar:
group:
title: dom To vnode
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# vnode

## dom To vnode

真实dom转化为虚拟dom

```js
 // 将真实dom转化为虚拟dom
function domToJson(node) {
  let obj = {};

  // 存储节点名称和节点类型
  obj.nodeName = node.nodeName;
  obj.nodeType = node.nodeType;

  // 存储节点的属性
  if (node.attributes && node.attributes.length > 0) {
    obj.attributes = {};

    for (let i = 0; i < node.attributes.length; i++) {
      let attr = node.attributes[i];
      obj.attributes[attr.nodeName] = attr.nodeValue;
    }
  }

  // 存储节点的子节点
  if (node.childNodes && node.childNodes.length > 0) {
    obj.childNodes = [];

    for (let i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      // nodeType 为1表示元素节点，3为文本节点
      if (child.nodeType === 1) {
        obj.childNodes.push(domToJson(child));
      } else if (child.nodeType === 3) {
        obj.childNodes.push(child.nodeValue);
      }
    }
  }

  return obj;
}
```






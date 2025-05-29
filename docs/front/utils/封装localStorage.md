---
sidebar:
title: 封装localStorage 支持设置过期时间
step: 6
isTimeLine: true
date: 2022-09-14
tags:
- 组件库
---

# 封装localStorage 支持设置过期时间


// 使用
// const storage1 = new Storage(24*60*60*1000);
// storage1.set('name', 'nan');
// storage1.set('age', 18, 60*1000);
// const storage2 = new Storage();
// storage2.set('age', 18, 60*1000);


```js
class Storage {
    constructor (express) {
        this.express = express;
    }
    set(key, value, express) {
        let obj = {
            data: value,
            cTime: Date.now(),
            express: express || this.express
        };
        localStorage.setItem(key, JSON.stringify(obj));
    }
    get(key) {
        let item = localStorage.getItem(key);
        if (!item) {
            return null;
        }
        item = JSON.parse(item);
        let nowTime = Date.now();
        if (item.express && item.express < (nowTime - item.cTime)) {
            this.remove(key);
            return null;
        } else {
            return item.data;
        }
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear(){
        localStorage.clear();
    }
}
```

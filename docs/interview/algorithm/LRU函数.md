---
isTimeLine: true
title: LRU函数
date: 2021-11-21
tags:
- 算法
- 面试
---

# LRU函数


## LRU函数


```js
 class LRUCache {
        constructor(maxLen) {
            this.maxLen = maxLen
            this.cache = new Map()
        }

        get(key) {
            // 判断缓存有没有
            if(!this.cache.has(key)) {
                return -1
            }

            const value = this.cache.get(key)

            this.cache.delete(key)

            this.cache.set(key,value)

            return value
        }

        put(key,value) {
            console.log(this);
            // 判断cache
            if(this.cache.has(key)) {
                this.cache.delete(key)

                return
            }

            // 删除
            if(this.cache.size >= this.maxLen) {

                const keys = this.cache.keys()

                console.log(Array.from(keys));
                // 删除不常用的数据
                const firstKey = [...Array.from(keys)](0)
                this.cache.delete(firstKey)
            }

            this.cache.set(key,value)

        }
    }


    // 测试

    const lRUCache = new LRUCache(2);
    lRUCache.put(1, 1); // 缓存是 {1=1}
    lRUCache.put(1, 1); // 缓存是 {1=1}
    lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
    lRUCache.get(1);    // 返回 1
    lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
    lRUCache.get(2);    // 返回 -1 (未找到)
    lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
    lRUCache.get(1);    // 返回 -1 (未找到)
    lRUCache.get(3);    // 返回 3
    lRUCache.get(4);    // 返回 4

```








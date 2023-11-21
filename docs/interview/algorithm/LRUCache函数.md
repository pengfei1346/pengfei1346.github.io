---
isTimeLine: true
title: LRUCache函数
date: 2021-11-21
tags:

- 算法
- 面试

---

# LRUCache函数

## LRUCache函数

```js
// 一个普通的两数相加函数
function add(a, b) {
    console.log(`执行了， 参数为 ${a}, ${b}`,);
    return a + b;
}

// 将参数的两数 组成一个字符串序列，用来作为缓存 key，生成一个带缓存版本的两数相加
const memoizeAdd = memoize(add, (a, b) => [a, b].join(','), 2);
const Foo = {memoizeAdd};

// 执行多次加法
console.log('结果1：', Foo.memoizeAdd(1, 2));
console.log('结果2：', Foo.memoizeAdd(1, 3));
console.log('结果3：', Foo.memoizeAdd(1, 2));
// console.log('结果4：', Foo.memoizeAdd(1,4));
// console.log('结果5：', Foo.memoizeAdd(1,2));
// console.log('结果6：', Foo.memoizeAdd(1,4));
```


实现

```js
    function memoize(originalFunc, argsIdentifier, maxCacheSize) {
        // 存放缓存
        let memory = new Map()
        // limit
        let limit = maxCacheSize

        return function(a,b) {
            let key = argsIdentifier(a,b)

            if(memory.has(key)) {
                memory.delete(key)
                memory.set(key,result)

                return memory.get(key)
            }

            const result = originalFunc.apply(originalFunc,[a,b])
            // 第一条

            if(memory.size >= limit) {
                const firstKey = [...memory.keys()][0]
                memory.delete(firstKey)
            }

            memory.set(key,result)
            console.log(memory);
            return result
        }
    }

```









---
sidebar:
group:
title: reduce函数
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# reduce函数

## reduce函数参数说明

> reduce(callbackFn, initialValue)
> 
> 1）callbackFn接收4个参数，reduce((pre,cur, index, array) => {})  
> pre累加器、cur当前值、 index当前下标、array用于遍历的数组
> 
>2）initialValue作为reduce方法的初始值  
reduce函数内部判断initialValue是否存在，不存在，需要找到数组中第一个存在的值作为初始值

写法 一：

```js
// 如果提供了initialValue时，则作为pre的初始值，index从0开始； 
// 如果没有提供initialValue，找到数组中的第一个存在的值作为pre，下一个元素的下标作为index

Array.prototype.myReduce = function(fn, initialValue) {
  let pre, index;
  let arr = this.slice();
  if (initialValue === undefined) {
    // 没有设置初始值
    for (let i = 0; i < arr.length; i++) {
      // 找到数组中第一个存在的元素，跳过稀疏数组中的空值
      if (!arr.hasOwnProperty(i)) continue;
      pre = arr[i]; // pre 为数组中第一个存在的元素
      index = i + 1; // index 下一个元素
      break; // 易错点：找到后跳出循环
    }
  } else {
    index = 0;
    pre = initialValue;
  }
  for (let i = index; i < arr.length; i++) {
    // 跳过稀疏数组中的空值
    if (!arr.hasOwnProperty(i)) continue;
    // 注意：fn函数接收四个参数，pre之前累计值、cur 当前值、 当前下标、 arr 原数组
    pre = fn.call(null, pre, arr[i], i, this);
  }
  return pre;
};
console.log([, , , 1, 2, 3, 4].myReduce((pre, cur) => pre + cur)); // 10

```

写法 二：
```js
   function reduce(arr,callback,initValue) {
        let flag = !Array.isArray(arr) || !arr.length || typeof callback !=='function'
        if(flag){
            return []
        }else{
            //  判断有没有初始值
            let isValue = initValue ===0?(!initValue):(!!initValue)
            let reduceValue = isValue?initValue:arr[0]
            //  判断其实相加的值
            for (let index =isValue?0:1; index < arr.length; index++) {
                reduceValue = callback(reduceValue, arr[index],index, arr)
            }
            return reduceValue

        }

    }
    // console.log(reduce([1,3,4,5],(x,y)=>x+y))  //13
```





















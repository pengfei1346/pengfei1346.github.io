---
sidebar:
group:
title: map 函数
isTimeLine: true
date: 11-10-2023
---
# map 函数

## map 函数

写法一：

> map中的第二个参数作为第一个参数的this

注意：需要判断稀疏数组，跳过稀疏数组中的空值

```js
// fn 接受3个参数，element 当前正在处理的元素、index 正在处理的元素在数组中的索引、array 调用了 map() 的数组本身
// map中的第二个参数作为fn函数的this
Array.prototype.selfMap = function(fn, content) {
  if (Object.prototype.toString.call(fn) != '[object Function]') {
    throw new TypeError(`${fn} is not a function `);
  }
  // Array.prototype.map() 函数的第二个参数只有为 null 或 undefined 时，回调函数中的 this 值才会指向全局对象
  if (content === null || content === undefined) {
    content = window;
  }
    let arr = this.slice();
  let list = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    // 跳过稀疏数组
    if (i in arr) {
      // 依次传入this, 当前项，当前索引，整个数组
      list[i] = fn.call(content, arr[i], i, arr);
    }
  }
  return mappedArr;
};
let arr = [1, 2, 3];
console.log(arr.selfMap(item => item * 2)); // [2, 4, 6]

```

写法二：

```js
// map 方法
  function map(arr,callback) {
    //首先检查一下参数
    let flag = !Array.isArray(arr) || !arr.length || typeof callback !=='function'
    if(flag){
      return  []
    }else{
      //每次调用我们都会返回一个新数组
      let newArr = []
        
      // 遍历
      for(let i = 0; i < arr.length; i++){
        newArr[i] = callback(arr[i], i, arr)
      }
      
      return newArr
    }
  }
  let allArr = [1,2,3,4,5]

  console.log(map(allArr,(item)=>item+1))

  // [2, 3, 4, 5, 6]
```

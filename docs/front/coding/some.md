---
sidebar:
group:
title: some
isTimeLine: true
date: 11-10-2023
---
# some

## some

some()方法用于检测数组中的元素是否满足指定条件（函数提供）

如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测；如果没有满足条件的元素，则返回false


```js
Array.prototype.mySome = function(fn) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    // 判断条件是否满足，满足跳出循环
    if (fn(this[i])) {
      result = true;
      break;
    }
  }
  return result;
};
console.log([1, 2, 3, 4].mySome(item => item > 6)); // false
```

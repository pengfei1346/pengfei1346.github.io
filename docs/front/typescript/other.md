---
sidebar:
group:
title: 补充
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# base

### 补充

#### 1、函数重载

为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用

```ts

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```

### 2、泛型

* 让模块可以支持多种类型的数据 - 让类型和值一样可以被传递，使用上更灵活。

```ts

function getScore<T,U> (name: T,scroe: U): T {
    return name + scroe
}

getScore<string,number>('pf',0)

```

### 3、装饰器

tsconfig中开启

```json
{
    'compilerOptions': {
        'target': 'ES5',
        'experimentalDecorators': true
    }
}
```

```ts
// 类装饰器
 function dog(target: Function): void {
    target.prototype.bark = function (): void {
        console('wangwang')
    }
}

// 属性装饰器
// target - 被装饰的类  key - 被装饰类的属性
function nameWarper(target: any,key:string) {
    Object.defineProperty(target,key,{
        
    }) 
}

// 方法装饰器 ...


@dog
class WangCai {
    constructor() {
        // 
    }
    
    @nameWarper
    public name: string
}

```


### reflect-metadata


















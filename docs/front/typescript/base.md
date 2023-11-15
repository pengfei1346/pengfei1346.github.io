---
sidebar:
group:
title: 基础
isTimeLine: true
date: 11-10-2023
tags:
categories:
sticky: 1
---
# base

## ts和js的区别

* JavaScript 属于动态编程语言，而ts 属于静态编程语言。
  * js：边解释边执行，错误只有在运行的时候才能发现
  * ts：先编译再执行，在写的时候就会发现错误了（ts不能直接执行，需要先编译成 js ）

## 作用

对于大型复杂项目来说方便代码的阅读，便于维护，不适用于一些特别灵活的场景-比如低代码。

## 基础类型

* boolean | string | number | array | null | undefined 

```ts
let isEnable: boolean = true
let class:string = 'cat'
let classNum:number = 1
let u:undefined = undefined
let n:null = null
let classArr: Array<string> = ['cat','dog']
```

* tuple - 元组

```ts
let tupleType: [string, boolean]
tupleType = ['cat',1]
```

* enum - 枚举

```ts
 // 数字类枚举- 从零开始，依次递增
enum Score {
    BAD,
    GOOD,
    PERFECT
}

let sco: Score = Score.PERFECT

// 字符串枚举
enum Score1 {
    BAD = 'BAD',
    GOOD = 'GOOD',
    PERFECT = 'PERFECT'
}

let sco1: Score1 = Score.PERFECT

// 反向映射
let scoName = Score[0] // BAD
let scoVal = Score['BAD'] // 0

// 异构
enum Enum {
    A,  // 0
    B,  // 1
    C = 'C', // C
    D = 'D', // D'
    E = 6, // 6
    F,  // 7
}
```

* any ｜ unknown | void

    * any -> 有些情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 使用 any类型来标记这些变量跳过类型检查。
    * Void -> 当一个函数没有返回值时，你通常会见到其返回值类型是 void。**void只能赋予undefined和null**。
    * Null 和 Undefined ->  默认情况下null和undefined是所有类型的子类型；指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
    * Never -> 永不存在的值的类型；never类型是任何类型的子类型，也可以赋值给任何类型，其他类型都不能赋值给never类型


```ts
// any -> 绕过所有的类型检查
// unknown - 绕过赋值检查 - 禁止更改传递 
// void ｜ never
// void - 声明函数的返回值为空或者没有返回值
// never - 永不返回 or 永远返回error
function error(): never {
    throw error()
}
```

* Object

object => 非原始类型，除number，string，boolean，symbol，null或undefined之外的类型


```js
// 手写ts本质 -
let Enum
(function (Enum) {
    
})(Enum || (Enum = {}))

```


## 接口

对行为具体的抽象， 具体行为由类实现

* 属性类接口
* 函数类型接口
* 可索引接口
* 类类型接口
* 接口拓展


```ts
interface Class {
    name: string,
    // 只读
    readonly age: string,
    // 任意可添加属性
    [propName: string]: any
}
```
```ts
// 定义一个函数类型的接口
interface Options {
    (key: string): string
}

let fn1: Options = function (key:string) : string{
    return  '1'
}
fn1('1')



// 定义一个人的属性
interface person {
    readonly id: number, // 只读属性
    name: string,
    age: number,
    hobby?: string, // 可选属性
    money?: number,
    girlFriend?: null | string | string[]
    boyfriend?: null | string | string[],
    wife?: string,
    husband?: string
    // mother: string,
    // father: string,
    [propName: string]: any, // 任意数量的其它属性 -> 额外的属性检查
    func: (options: any ) => void
}

// 定义一个男性未婚，web前端程序员

interface WebFront {

}

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig):any{
    // ...
    return
}

// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);


let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);


// 类型推论
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//可索引的类型   ------ 对数组的约束
// 索引签名： 字符串和数字
//  可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的   子类型
// 解释： 这是因为当使用number来索引时，JavaScript会将它转换成string然后再去索引对象
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

// 错误：name的类型与字符串索引类型不匹配
interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
//  将索引签名设置为只读，防止了给索引赋值
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!


////       类类型
// 重点： 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

// interface Animal {
//     name: string
// }
//
// class BlackDog {
//     // static color: string = 'black'
//     private color: string;
//     constructor(c) {
//         console.log(this);
//         this.color = c
//     }
// }


//  当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
//  我们应该直接操作类的静态部分。 看下面的例子，我们定义了两个接口，ClockConstructor为构造函数所用和ClockInterface为实例方法所用。 为了方便我们定义一个构造函数createClock

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


// implements

//  继承接口
// extends
interface Child1 {
    name: string
}
interface Child2 {
    age: number
}
interface Child extends Child1,Child2 {

}

let cc:Child = {
    name: '111',
    age: 2,
}


// todo ????? 混合类型


```



## 函数类型 

```ts
// 函数定义

// const fn1 = (option: string): void => {
//
// }
// 可选参数
// const fn2 = (option?: string): void => {
//
// }
// 剩余参数
// const fn3 = (...res:number[]): void => {
//
// }

// 函数重载
// 方法是为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if (typeof x == "object") {
        return Math.floor(Math.random() * x.length);
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}


console.log(pickCard(20));


```

### 交叉类型

```ts
interface A {
    a: string
}
interface B {
    a: number
    b: string
}
interface C {
    c: string
}

// 声明一个群体
type ABC = A & B & C
// a: string | number
```

## 













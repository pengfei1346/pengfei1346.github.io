---
sidebar:
group:
title: 基础
isTimeLine: true
date: 11-10-2023
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
* 可索引接口 (自定义属性)
* 类类型接口
* 接口拓展

**可索引接口 (自定义属性)**

```ts
interface RandomKey {
    [propName: string]: string
}

const obj: RandomKey = {
    a: 'hello',
    b: 'lin',
    c: 'welcome',
}

```

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

## 类

### TS 通过 public、private、protected 三个修饰符来增强了 JS 中的类。

**基本写法**

```ts
class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} is speaking`)
    }
}

const p1 = new Person('lin')      // 新建实例  

p1.name                           // 访问属性和方法
p1.speak()
```

**继承**

使用 extends 关键字实现继承，定义一个 Student 类继承自 Person 类。

```ts
class Student extends Person {
    study() {
        console.log(`${this.name} needs study`)
    }
}

const s1 = new Student('lin')

s1.study()

```

**super关键字**

注意，上例中 Student 类没有定义自己的属性，可以不写 super ，但是如果 Student 类有自己的属性，就要用到 super 关键字来把父类的属性继承过来。

比如，Student 类新增一个 grade(成绩) 属性，就要这么写

```ts
class Student extends Person {
    grade: number
    constructor(name: string,grade:number) {
        super(name)
        this.grade = grade
    }
}

const s1 = new Student('lin', 100)

```

**多态**

子类对父类的方法进行了重写，子类和父类调同一个方法时会不一样。

```ts
class Student extends Person {
    speak() {
        return `Student ${super.speak()}`
    }
}

```

**public**

public，公有的，一个类里默认所有的方法和属性都是 public。

比如上文中定义的 Person 类，其实是这样的：

```ts
// public 可写可不写，不写默认也是 public。
class Person {
    public name: string
    public constructor(name: string) {
        this.name = name
    }
    public speak() {
        console.log(`${this.name} is speaking`)
    }
}
```


**private**

private，私有的，只属于这个类自己，它的实例和继承它的子类都访问不到。

将 Person 类的 name 属性改为 private。

```ts
class Person {
    private name: string
    public constructor(name: string) {
        this.name = name
    }
    public speak() {
        console.log(`${this.name} is speaking`)
    }
}
const p1 = new Person('p1')// 实例访问 name 属性，会报错：
//继承它的子类 访问 name 属性，会报错：
```

**protected**

protected 受保护的，继承它的子类可以访问，实例不能访问。

将 Person 类的 name 属性改为 protected。

```ts
class Person {
    protected name: string
    public constructor(name: string) {
        this.name = name
    }
    public speak() {
        console.log(`${this.name} is speaking`)
    }
}
const p1 = new Person('p1')
p1.name // 实例访问 name 属性，会报错：
```

子类可以访问。

```ts
class Studeng extends Person {
    study() {
        console.log(`${this.name} needs study`)
    }
}
```

**static**

static 是静态属性，可以理解为是类上的一些常量，实例和子类都不能访问。

比如一个 Circle 类，圆周率是 3.14，可以直接定义一个静态属性。

```ts
class Circle {
    static pi: 3.14
    public radius: number
    public constructor(radius: number) {
        this.radius = radius
    }
    public calcLength() {
        return Circle.pi * this.radius * 2  // 计算周长，直接访问 Circle.pi
    }
}

const p1 = new Person('p1')
p1.pi // 实例访问 name 属性，会报错：

```

## interface 和 class 的关系

上文中我们说过，interface 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。

interface 同样可以用来约束 class，要实现约束，需要用到 implements 关键字。

**implements** 

```ts
interface MusicInterface {
    playMusic(): void
}

class Cellphone implements MusicInterface {
    playMusic() {}
}
```

定义了约束后，class 必须要满足接口上的所有条件。

如果 Cellphone 类上不写 playMusic 方法，会报错。

**处理公共的属性和方法**

不同的类有一些共同的属性和方法，使用继承很难完成。
比如汽车（Car 类）也有播放音乐的功能，你可以这么做：

用 Car 类继承 Cellphone 类  
找一个 Car 类和 Cellphone 类的父类，父类有播放音乐的方法，他们俩继承这个父类

很显然这两种方法都不合常理。  
实际上，使用 implements，问题就会迎刃而解。

```ts
interface MusicInterface {
    playMusic(): void
}

class Car implements MusicInterface {
    playMusic() {}
}

class Cellphone implements MusicInterface {
    playMusic() {}
}

```
这样 Car 类和 Cellphone 类都约束了播放音乐的功能。

再比如，手机还有打电话的功能，就可以这么做，Cellphone 类 implements 两个 interface。

```ts
interface MusicInterface {
    playMusic(): void
}

interface CallInterface {
    makePhoneCall(): void
}

class Cellphone implements MusicInterface, CallInterface {
    playMusic() {}
    makePhoneCall() {}
}

```

这个 CallInterface 也可以用于 iPad 类、手表类上面，毕竟他们也能打电话。

interface 来约束 class，只要 class 实现了 interface 规定的属性或方法，就行了，没有继承那么多条条框框，非常灵活。


**约束构造函数和静态属性**

使用 implements 只能约束类实例上的属性和方法，要约束构造函数和静态属性，需要这么写。

以我们上文提过的 Circle 类为例：

```ts
interface CircleStatic {
    new (radius: number): void
    pi: number
}

const Circle:CircleStatic = class Circle {
    static pi: 3.14
    public radius: number
    public constructor(radius: number) {
        this.radius = radius
    }
}

```

















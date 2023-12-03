---
isTimeLine: true
title: webpack
date: 2023-11-21
tags:
- webpack
---
# webpack

# webpack

微内核服务架构

## input
项目入口
## output
打包出口
## loader

webpack是个模块打包器。但是webpack只能处理js和json文件。

> loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。

loader本质上是一个导出函数的JS模块，函数的入参和出参可以理解为文件流(String或Buffer类)，函数对传入的文件流进行处理，然后返回处理后的新文件流。

loader支持**同步**和**异步**；两种方式，官方推荐异步方式

```js
// 同步方式
module.exports = function (content, map, meta) {
    // content就是传进来的文件内容
    // 对content进行处理
    const newContent = doSomething(content);
    return newContent; // 返回处理后的文件内容
};

// 异步方式
module.exports = function (content, map, meta) {
    const callback = this.async(); // 获取到callback函数
// 对content进行处理
    const newContent = doSomething(content);
// callback的参数有4个，按顺序分别是：
// 1. 错误参数Error或null，必传
// 2. String/Buffer类型的content，必传
// 3. 可选参数sourceMap
// 4. 可选参数meta
    callback(null, newContent, map, meta);
};
```

**使用示例：**

```js
// webpack.config.js配置loader
// 
module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
    }]
}
```
rules规则数组用于指定对模块应用哪些loader
* 「test」属性的值是个正则表达式，用于进行文件类型匹配，这里匹配的是以.css或.CSS结尾的文件；
* 「use」属性的值是一个loader数组，指明要对这些css文件执行哪些loader操作。这里多个loader会「**从右到左**」进行「**链式调用**」，比如上面的配置中，会先执行css-loader，再执行style-loader。和gulp的task有点类似，但是执行顺序不一样，gulp是从左到右顺序执行；而loader更像是复合函数，从右往左执行。

### 实现自己的loader

**官方推荐的开发准则**
1. 保持简单，一个loader只作一件事
2. 利用链式调用
3. 模块化
4. 无状态，每次运行都与之前的运行结果无关
5. 利用loader-utils包
6. 用addDependency标明使用的外部文件
7. 需要解决代码中的模块依赖问题，比如css中的 @import，可以转换成require方式等
8. 提取公共代码
9. 避免绝对路径
10. 使用 peerDependency

**实现：**
```js
// my-loader/index.js
module.exports = function (content, map, meta) {
    const callback = this.async();
    console.log('my loader is running');
    callback(null, content, map, meta);
}
```
**使用：**  
```js
//webpack.config.js
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [{
                loader: path.resolve("../my-loader/index.js"),
            },
            ],
        },
        ],
    },
};
```


 ---

## plugin

> plugin (插件)，是一个具有 apply 方法的 JavaScript 对象

Compiler类提供了很多hook函数(钩子函数)：
![img.png](img.png)

**plugin工作流程**

* plugin是：「一个具有 apply 方法的 JavaScript 对象」；
* webpack启动后就会创建Compiler实例对象；
* 然后调用plugin.apply(compiler)，把当前Compiler实例对象传给plugin；
* 最后在webpack运行的生命周期里通过hooks.钩子函数名.call来调用钩子函数中的回调函数。
* 无论打包成功或失败，钩子函数afterDone都会在最后被调用

**一个webpack插件包括**：

* 一个JS函数或JS类；
* 定义apply方法；
* 利用钩子函数的tap方法
* 在钩子函数的回调里处理webpack内部实例数据(compilation/stats等)
* 如果是异步的tapAsync/tapPromise，在处理完成后需调用callback回调函数。

### 实现一个自己的plugin

```js
class myPlugin{
    constructor(options) {
        console.log('插件被使用了')
        console.log(options)
        this.options = options
    }
    // 这里的compiler是Compiler类的一个实例对象；而Compiler类『扩展(extend)自Tapable类，用来注册和调用插件
    apply (compiler) {
        console.log("我运行了！myPlugin");
        // compiler -》 实例对象
        // --监听：hooks.钩子函数.tap(name, callback)，name是监听的事件名称，一般与plugin同名；callback是个函数，当钩子函数被触发(call)时会调用callback函数
        
        //初始化 
        compiler.hooks.initialize.tap('myPlugin', () => {
            // --触发：hooks.钩子函数.call([args])
            // 在这里自定义操作，当钩子函数被call时，就会执行
            // 可以通过hooks.initialize.call来查看钩子函数在源码中的运行时机
        });

        // 打包完毕都会运行 afterDone
        compiler.hooks.afterDone.tap('myPlugin', (stats) => {
            const { name } = this.options;
            console.log(name);
            if (name !==  '张三') {
                console.log("我不认识你，你走吧！");
            } else if (stats) {
                const subject = stats.hasErrors() ? "[ERROR]webpack打包失败" : "[SUCCESS]webpack打包成功";
                const html = stats.toString() + `<br><div>${"打包时间：" + new Date(stats.startTime).toLocaleString() + "-" + new Date(stats.endTime).toLocaleString()}</div>`;
                console.log('打包完毕了，干点啥呗');
            }
        });
    }
}

module.exports = myPlugin;
```
**如何使用** - webpack.config.js
```js
const MyPlugin = require(path.resolve("../my-plugin")); // 这里用的是本地的相对路径引入
module.exports= {
    // ...省略一万字
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack~",
        }),
        new MyPlugin({
            name: '张三'
        }) // 使用我们的自定义插件
    ],
}
```














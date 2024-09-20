---
hidden: true
---
# Web Worker

## Web Worker

Web Worker 有三种类型：

* Dedicated Worker（专用 Worker）：由主线程实例化且只能与它通信，不能访问别的环境。
* Shared Worker（共享 Worker）：所有 Shared Worker 实例共享一个全局环境，多个页面可以用 Shared Worker 互相通信，可以处理多个连接。
* Service worker（服务 Worker）：具有 Shared Worker 的特点、通过事件驱动，可以随时关闭再重启、不需要任何页面也能工作，只支持 https 和 localhost。多用于离线场景

平常使用最多，最常见的就是 Dedicated Worker，并且 Dedicated Worker 兼容性较好

### 让前端拥有后端的计算能力

在HTML5的新规范中，实现了 Web Worker 来引入 js 的 多线程 技术, 可以让我们在页面主运行的js线程中，加载运行另外单独的一个或者多个 js线程

Web Worker专门处理复杂计算的，从此让前端拥有后端的计算能力

### 页面大量计算，造成假死

浏览器有GUI渲染线程与JS引擎线程，这两个线程是互斥的关系

当js有大量计算时，会造成 **UI 阻塞**，出现界面卡顿、掉帧等情况，严重时会出现页面卡死的情况，俗称**假死**

### Web Worker使用案例

计算十万条数据，计算时长从35s变成6s，并且全程无卡顿

[在Vue中 使用 Web Worker](https://juejin.cn/post/7137728629986820126#heading-3)

### web worker提高Canvas运行速度

web worker除了单纯进行计算外，还可以结合离屏canvas进行绘图，提升绘图的渲染性能和使用体验

[web worker 提高Canvas运行速度](https://juejin.cn/post/7137728629986820126#heading-8)

### 计算时长超过多久适合用Web Worker

原则：

运算时间超过50ms会造成页面卡顿，属于Long task，这种情况就可以考虑使用Web Worker  
但还要先考虑通信时长的问题，假如一个运算执行时长为100ms, 但是通信时长为300ms, 用了Web Worker可能会更慢

**最终标准：**  
计算的运算时长 - 通信时长 > 50ms，推荐使用Web Worker

[如何让前端拥有后端的计算能力？一文彻底了解Web Worker](https://juejin.cn/post/7137728629986820126)







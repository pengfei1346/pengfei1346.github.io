


```js
export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    // 让中间件函数传入 midApi 执行一遍
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    // 组合函数
    dispatch = compose(...middlewareChain)(store.dispatch);
    return {
      ...store,
      // 加强版的dispatch
      dispatch
    };
  };
}

// compose
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

```

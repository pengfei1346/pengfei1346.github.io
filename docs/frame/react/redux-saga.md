---
sidebar:
title: redux-saga
date: 2023-09-14
tags:
- react
- redux-saga
---
# redux-saga

todo: 不是很理解

```js
// yarn add redux-saga

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// 创建saga middleware
const sagaMiddleware = createSagaMiddleware()
// 通过applyMiddleware将redux-saga注册到store中
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
// 运行saga
sagaMiddleware.run(mySaga)
```



























## React Router
React Router包含四个包

> React中主要使用react-router-dom

* react-router：React Router核心API
* react-router-dom：React Router 的DOM绑定，在浏览器中运行不需要额外安装react-router
* react-router-native：React Native 中使用，实际应用中不会使用这个
* react-router-config：静态路由配置

## v6


### 1.路由组件

```text
 (1-1) v6 方式一 react-router-dom 常规
 (1-2) v6 方式二 react-router-dom 使用 useRoutes
```

#### 方式一

```js
// v6 方式一
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routers from './routers';

const App = () => {
  return (
    <Router>
      <Routes> // 不是老版本的：Switch
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              element={<item.component />} // 不是老版本的：component 或 render
              // onEnter、onBeforeMount、onMounted事件，会在组件初始化时执行一次，切换路由不执行
              // 若 修改 document.title 查看文档：https://blog.csdn.net/weixin_44461275/article/details/122843160
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;


//v5
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routers from './routers';

const App = () => {
  return (
    <Router>
      <Switch>
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              render={() => { // 推荐使用 render 不用 component
              	document.title = item.title;
                return <item.component />;
              }}
              //或：
              //component={<item.component />}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
```

#### 方式二 react-router-dom + 使用 useRoutes

```js
//路由json组件
import Layout from '../layout'
import About from '../views/About'
import Home from '../views/Home'
import AboutIndex from '../views/About/Component/AboutIndex'
import AboutList from '../views/About/Component/AboutList'
import Error404 from '../views/Error404'

const routes = [
    {
        path: "/",
        element: <Layout />, 
        children: [
            {
                index : true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    { index : true, element: <AboutIndex />},
                    { path : "/about/:id", element :<AboutList />}
                ]
            },
        ]
    },
    {
       path: "*",
       element: <Error404 />,
    }
]

export default routes

//app.js
import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routers from '../routers';

function App() {
  const GetRoutes = () => useRoutes(routers); //一定要是函数内
  
  return (
    <Router>
      <GetRoutes />
    </Router>
  );
}

export default App;
```

### 2.页面跳转

1. Link 组件跳转
2. useNavigate hooks跳转，代替useHistory

```js
// 1.
import React from "react";
import { Link } from "react-router-dom";

function DEMO() {
  return (
    <Link to="/aaa">点击跳转页面</Link>
  );
}

export default DEMO;

// 2.
import React from "react";
import { useNavigate } from "react-router-dom";

function DEMO() {
    const navigate = useNavigate();

    // 点击跳转页面
    function hrefAaa() {
        navigate('/aaa')
    }

    // history replace模式
    function hrefReplace() {
        navigate("/aaa", { replace: true });
    }

    // history.go(-1)
    function historyBack() {
        navigate(-1);
    }

    // 跳转带参数
    function hrefState() {
        navigate("/test", {
            state: { test: 111 },
        });
    }

    return (
        <>
            <div onClick={hrefAaa}>点击跳转页面</div>
            <div onClick={hrefReplace}>history replace模式</div>
            <div onClick={historyBack}>返回上一个页面</div>
        </>
    );
}

export default DEMO;
```

### 3.获取路由的参数
```text
 (3-1) useParams 获取动态路由的值
 (3-2) useSearchParams 获取查询字符串的值
 (3-3) useLocation 获取上一个页面传递进来的 state 参数 v5、v6一样
```

```js
import React,{ useEffect } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";

export default function GoodsDetail() {
  const params = useParams(); // 获取动态路由的值
  const [searchParams, setSearchParams] = useSearchParams(); // 获取查询字符串的值
  const location = useLocation(); // 获取上一个页面传递进来的 state 参数
  
  useEffect(() => {
    // 一个对象，key 为动态字符串的 key
    console.log(params); // {id: '123'}

	console.log(location.state); // { test: 111 }  上一个页面带参获取 非url上面的search

    // 输入 http://localhost:3000/goods/123?name=1111
    console.log(searchParams.get("name")); // 111
  }, []);

  const handleSetSearch = () => {
    // 新增-修改
    setSearchParams({
      keyName: 2222
    }); // /aaa?keyName=2222
  };
  
  return (
    <div onClick={handleSetSearch}>Page</div>
  );
}

```

基础demo
```js
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```


## v6 与 v5

> react-router-dom v6 整体体验相对于 v5 ，体验要好更多，最大的一个改变，就是曾经的 Route 不可嵌套，整个路由配置必须拆分成若干小块，除非通过 react-router-config 这种插件，才可以实现对整个路由的管理，然而现在，不需要任何插件就可实现对路由配置的管理。


BrowserRouter：引用不变
Routes：替换 v5 的 Switch 组件
Route：引用不变。参数 element 替换 v5 的 component、render 组件
















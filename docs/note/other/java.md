---
sidebar:
title: mac搭建java开发环境
step: 6
isTimeLine: true
date: 2020-09-14

---
# mac搭建java开发环境


## 安装jdk@17

```text
cd "$(brew --repo)"
git fetch
git reset --hard origin/master
brew update： 执行时间较长，耐心等待
brew upgrade

brew install openjdk@17

echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc

source ~/.zshrc

java --version
```

## 安装maven

```text
brew install maven

mvn -v
```


## 安装mysql

```text
 brew search mysql
 brew install mysql@8.0
```

### [使用教程](https://www.jianshu.com/p/1def4f9c4ecf)



## 安装 redis


```text
 brew search redis
 brew install redis@3.0.504
```












---
sidebar:
group:
title: stable diffusion部署
date: 2023-12-10
sticky: 1
---
# stable diffusion部署


## 前言

最近在看ai方面的知识，工具主要有 mj、sd、lora等，因为mj收费的原因，所以决定先本地部署一个sd试一下，这里记录一下本地部署的过程。

## sd本地部署

本地部署比较吃电脑配置，有条件的也可以使用云服务器部署（网上有白嫖三个月的教程）。

我的电脑配置：

win：1060显卡，6G显存，16G内存，一块521G的固态硬盘。
mac：
![img.png](img.png)

安装教程：

[Stable Diffusion 安装教程（附安装包）](https://blog.csdn.net/A2421417624/article/details/137766693)
[一学就会，Macpro本地部署 Stable Diffusion](https://zhuanlan.zhihu.com/p/652700145)
[Mac一键本地部署sd](http://www.hnbyed.com/news/4875.html)



### mac部署

1、安装homebrew

这一步巨慢无比，午饭都吃完了还没更新完

brew安装&更新慢：[更换国内镜像源](https://blog.csdn.net/itguangit/article/details/122192858)

2、执行以下命令来一次性安装所有必要的依赖：

brew install cmake protobuf rust python@3.10 git wget

3、安装Python

有两种方式来安装Python，你可以根据自己的需求选择其中一种

方式一：使用命令行直接安装
执行以下命令来一次性安装所有必要的依赖：

brew install cmake protobuf rust python@3.10 git wget

方式二：使用Anaconda来创建虚拟环境（推荐）

conda可以将各个环境隔离出来，库和包也互不影响


```text

安装conda
brew install --cask anaconda

配置环境变量， ~/.zshrc追加配置
export PATH="/opt/homebrew/anaconda3/bin:$PATH"

创建一个名为sdwebui的虚拟环境，指定Python版本为3.10.6
conda create -n SDWEBUI python=3.10.6

#激活，进入SDWEBUI环境
conda activate SDWEBUI


```











### windows部署

没有按照官网部署的教程，用了网上找的一个整合包（秋叶整合包），用整合包的原因还是觉得配置环境和模型太麻烦，比较喜欢傻瓜式安装，但是使用整合包后续升级可能不方便，可以自行取舍。
















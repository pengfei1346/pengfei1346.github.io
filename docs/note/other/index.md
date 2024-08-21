---
hidden: true
---
# 简介

#添加useraaa用户，切换用户，并进入到用户目录
useradd useraaa
su useraaa
cd /home/useraaa
#添加.ssh目录和authorized_keys文件
#特别注意！！！！！！！！！！！！
#下面步骤不能乱，先给权限在去写入authorized_keys文件，否则不会生效
#特别注意！！！！！！！！！！！！
mkdir .ssh
chmod 700 .ssh
cd .ssh
touch authorized_keys
chmod 700 authorized_keys
#把公钥追加到authorized_keys文件里面去
cat 你的公钥 >> authorized_keys


## 目录
* [URLScheme](./URLScheme.md)
* [公众号H5调试](./公众号H5调试.md)
* [linux添加用户配置免登](./添加用户配置免登.md)
* [前沿技术盘点](./前沿技术盘点.md)




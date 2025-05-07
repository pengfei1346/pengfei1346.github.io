---
hidden: true
---
# 记录


## 1，git push之后如何撤销

```shell
#1,使用 git revert用于撤回已推送的代码而不会改变项目的提交历史。这个命令会创建一个新的提交，实际上是对之前某次提交的反向操作。这种方法适合于第一次推送后，希望撤回某个错误提交的情况。
git log
git revert HEAD
git push
#2,使用 git reset 撤销提交 -慎用 使用该命令后，提交历史将被重写
git reset --hard abcd1234^ # 撤回到 abcd1234 之前的状态
git push origin main --force
```



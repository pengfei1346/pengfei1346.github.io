### 说明

今天学习了github + vitepress搭建博客


### vitepress创建项目

> 网上教程很多

### 创建GitHub仓库

1、 在GitHub上创建仓库，对于名称有特殊要求，为用户名.http://github.io。例如我的用户名为xxx，仓库名称则为http://xxx.github.io。

2、上传工程代码

```text
git add .
git commit -m "创建博客工程"
git push
```

3、构建和上传dist

> 上一步我们上传的仅仅是工程的源代码。还需要上传构建成果，才能发布博客网站

```shell
pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/pengfei1346/pengfei1346.github.io.git master:gh-pages
```

4、发布博客网站

我们进入你创建的GitHub仓库的配置，具体位置在Settings -> Pages -> Build and deployment -> Source。来源选择Deploy from a branch，即选择一个分支。

选择我们刚刚上传的gh-pages分支，根目录，然后保存。

网站地址即是我们刚刚建立的仓库名称，即是用户名.http://github.io。例如我的网站是http://xxx.github.io。

5、使用GitHub Actions进行自动构建和发布

> .github/workflows/deploy.yml

```yaml
name: Deploy

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["master"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: pnpm
      - run: pnpm install
      - name: Build
        run: pnpm run docs:build
      - uses: actions/configure-pages@v2
      - uses: actions/upload-pages-artifact@v1
        with:
          path: docs/.vitepress/dist
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v1
```

6、GitHub配置

> 这时候我们每次写完博客，将工程代码push到GitHub仓库之后，GitHub会自动触发构建和发布流程，更新博客网站。上一节中的手动构建和上传dist步骤就不需要执行了

> 注意这里分支要改成gh-pages分支

打开GitHub配置，位置依旧在Settings -> Pages -> Build and deployment -> Source。将之前设置的Deploy from a branch，修改为GitHub Actions。


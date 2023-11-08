call pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/pengfei1346/pengfei1346.github.io.git master:gh-pages


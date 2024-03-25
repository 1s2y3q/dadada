#!/usr/bin/env sh
###
 # @Author: 22017365 sunyuanquan@haier.com
 # @Date: 2024-03-25 15:31:09
 # @LastEditors: 22017365 sunyuanquan@haier.com
 # @LastEditTime: 2024-03-25 15:35:50
 # @FilePath: \vitepress\docs\vitepress-starter\deploy.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# Jacqueline712/mondaylab-blog 替换为自己的用户名和对应的仓库名
# 意思为将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -f https://github.com/1s2y3q/mondaylab-demo-blog.git main:gh-pages

cd -

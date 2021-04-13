---
title: Delete `␍`eslint(prettier/prettier) 错误的解决方案
tags: [eslint, 格式化, vscode]
categories: 错误集
date: 2021-04-13 14:09:01
---
## 问题
在vscode中，格式问题，出现Delete `␍`eslint(prettier/prettier) 错误

### 一、配置.prettierrc文件

在项目根目录下，创建.prettierrc文件，写入{"endOfLine": "auto"}

### 二、配置.eslintrc文件
在项目的根目录下，创建.eslintrc文件，
```text
module.exports = {
    rules: {
        "prettier/prettier": ["error", {
        "endOfLine":"auto"
      }],
    }
}
```
### 三、切换右下角的行尾序列
弊端：只能修复一个当前文件，不能 修改所有文件
<img src=/project/static/img/LR.jpg />

参考：https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier
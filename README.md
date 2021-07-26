<!--
 * @Author: KeMull
 * @Date: 2021-07-23 12:04:02
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-26 18:03:50
-->
# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
## prettier
```bash
$ yarn prettier
按照配置的 prettier 规则进行修复代码
```
## lint-staged
```bash
scripts:
"lint-staged": "lint-staged"

执行这个脚本
"lint-staged": {
    "**/*.less": "stylelint --syntax less", 使用stylelint格式化less
    "*.{js,jsx,less,md,json}": [ 使用prettier格式化这些后缀的文件,进行git add
      "prettier --write",
      "git add"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write" 使用prettier格式化ts tsx文件
    ]
  },
```
## gitHooks
```bash
$ git 提交时的hook
$ "pre-commit": "lint-staged"
$ 等同于 git commit 时执行 npm run lint-staged 这个命令
```
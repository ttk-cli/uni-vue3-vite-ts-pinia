---
# 主题列表: juejin (默认主题),github,smartblue,cyanosis,channing-cyan
# 高亮列表: vs2015,vs,atom-one-dark,atom-one-dark-reasonable,monokai-sublime
theme: channing-cyan
highlight: atom-one-dark
---

# uni-vue3-vite-ts-pinia 项目工程化搭建

## 简介

`uni-app + vue3.x` 项目工程化搭建，集成 `ESLint`、`Prettier`、`Stylelint`、`husky`、`lint-staged` 、`commitlint`等，同时实现了 pinia 在 uniapp 中的持久化插件[pinia-plugin-persist-uni](https://github.com/Allen-1998/pinia-plugin-persist-uni)。

[相关文章 - uni-vue3-vite-ts-pinia 项目工程化搭建](https://juejin.cn/post/7081243515459485704/)

[相关文章 - pinia-plugin-persist-uni 在 uni-app 中持久化存储 pinia](https://juejin.cn/post/7081275565008748552/)

欢迎使用和点亮小星星。

## 所用技术栈

- 小程序框架： [uni-app](https://uniapp.dcloud.io/)
- 构建工具： [Vite](https://vitejs.dev/)
- 前端框架： [Vue3.x](https://v3.cn.vuejs.org/)
- 编程语言： [TypeScript](https://www.typescriptlang.org/)
- 代码规范：
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Stylelint](https://stylelint.io/)
- 提交规范：
  - [husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [commitlint](https://commitlint.js.org/#/)
- css 预处理器： [scss](https://sass-lang.com/)
- 状态管理工具：[pinia](https://pinia.vuejs.org/)
- pinia 数据持久化插件：[pinia-plugin-persist-uni](https://allen-1998.github.io/pinia-plugin-persist-uni/)
- vite 插件：
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
  - [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
  - [unocss](https://github.com/unocss/unocss)

## 工程目录

```shell
.
├── .husky
│   ├── _
│   ├── commit-msg commit信息校验钩子
│   ├── pre-commit commit前置钩子
├── .vscode
│   ├── extensions.json vscode工作区插件推荐
│   ├── settings.json vscode工作区设置
├── auto
│   ├── addPage.ts 根据pages.json自动生成页面
├── src
│   ├── api 请求中心
│   ├── components 项目组件
│   ├── config 全局配置
│   ├── hooks hooks函数
│   ├── pages 页面目录
│   ├── static 静态资源、css
│   ├── store 状态管理
│   └── utils 工具包
│      ├── index.ts 入口文件
│      ├── platform.ts 获取运行环境
│      ├── request.ts 请求方法封装
│      ├── router.ts 路由跳转封装
│      ├── shared.ts 基础公共方法
│      ├── uniAsync.ts async调用异步方法
│      └── urlMap.ts 获取页面类型
│   ├── App.vue 入口文件
│   ├── auto-imports.d.ts 自动导入vue-composition-api(自动生成)
│   ├── components.d.ts 自动导入组件(自动生成)
│   ├── env.d.ts 全局声明
│   ├── main.ts 主入口
│   ├── manifest.json 应用配置文件
│   ├── pages.json 全局配置文件
│   └── uni.scss uni-app内置的常用样式变量
├── .eslintignore eslint忽略配置
├── .eslintrc.js eslint配置
├── .gitignore git忽略配置
├── .lintstagedrc.json lint-staged配置
├── .prettierignore prettier忽略配置
├── .stylelintrc.js stylelint配置
├── commitlint.config.js commitlint配置
├── FAQ.md
├── index.html 项目入口
├── LICENSE MIT说明
├── package-lock.json
├── package.json
├── prettier.config.js prettier配置
├── README.md
├── TODO.md
├── tsconfig.json ts配置
├── unocss.config.ts unocss配置
└── vite.config.ts vite配置
```

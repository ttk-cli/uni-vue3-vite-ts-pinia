# uni-app + vue3.x  项目工程化搭建

## 简介

`uni-app + vue3.x` 项目工程化搭建，集成 `ESLint`、`Prettier`、`Stylelint`、`husky`、`lint-staged` 、`commitlint`等，同时实现了 pinia 在 uniapp 中的持久化插件[pinia-plugin-persist-uni](https://github.com/Allen-1998/pinia-plugin-persist-uni)以及 storeToRefs 增强插件[pinia-auto-refs](https://github.com/Allen-1998/pinia-auto-refs)。

[相关文章 - pinia-plugin-persist-uni 在 uni-app 中持久化存储 pinia](https://juejin.cn/post/7081275565008748552)

[相关文章 - 受够了手动 storeToRefs？来试试这个 vite 插件吧](https://juejin.cn/post/7097893752030625828)

[仓库地址 - uni-vue3-vite-ts-pinia](https://github.com/Allen-1998/uni-vue3-vite-ts-pinia)

欢迎使用和点亮小星星。

## 所用技术栈

- 依赖管理：node v16.x, 如果你已经使用 nvm，可以参考 [Github: nvm](https://github.com/nvm-sh/nvm#deeper-shell-integration) 来实现 node 版本的自动切换
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
  - [pinia-auto-refs](https://github.com/Allen-1998/pinia-auto-refs)
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
  - [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
  - [unocss](https://github.com/unocss/unocss)
  - [auto-import-types](https://github.com/Allen-1998/auto-import-types)

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
│   ├── @types ts类型定义
│   ├── api 请求中心
│   ├── components 项目组件
│   ├── config 全局配置
│   ├── @helper storeToRefs 增强(pinia-auto-refs自动生成)
│   ├── hooks hooks函数
│   ├── pages 页面目录
│   ├── static 静态资源、css
│   ├── store 状态管理
│   └── utils 工具包
│      ├── platform.ts 获取运行环境
│      ├── request.ts 请求方法封装
│      ├── router.ts 路由跳转封装
│      ├── shared.ts 基础公共方法
│      ├── uniAsync.ts async调用异步方法
│      └── urlMap.ts 获取页面类型
│   ├── App.vue 入口文件
│   ├── auto-imports.d.ts 自动导入vue-composition-api(unplugin-auto-import自动生成)
│   ├── components.d.ts 自动导入组件(unplugin-vue-components自动生成)
│   ├── env.d.ts 全局声明
│   ├── main.ts 主入口
│   ├── manifest.json 应用配置文件
│   ├── pages.json 全局配置文件
│   └── uni.scss uni-app内置的常用样式变量
├── .cz-config.js cz提交信息提示配置
├── .czrc cz规则配置
├── .editorconfig 编辑器配置
├── .eslintignore eslint忽略配置
├── .eslintrc-auto-import-types.json 自动挂载@types下.d.ts文件定义的类型到global(auto-import-types自动生成)
├── .eslintrc-auto-import.json 自动挂载 unplugin-auto-import 的类型到global(unplugin-auto-import自动生成)
├── .eslintrc.js eslint配置
├── .gitignore git忽略配置
├── .lintstagedrc.json lint-staged配置
├── .npmrc npm配置
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

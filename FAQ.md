# 常见问题

## vetur 提示组件引入报错

**原因：**

vue3 配套的 vscode 插件为 volar,vetur 会存在冲突

**解决方法：**

在扩展中搜索 volar 安装,然后搜索 vetur 设置禁用工作区

## git commit 保存代码被拦截

**原因：**

为了规范`git`提交规范，制定了`commitlint`规范。

**解决方法：**

按照 `commitlint.config.js` 文件中定义的规则进行`git commit`操作
示例:`git commit -m 'feat: xxxxxx'`

## 如何根据快速定义 ts 接口类型

**原因：**

ts 类型声明在带来类型提示，减少编程过程中 bug 率的同时，也带来了需要声明很多数据类型的心智负担，手动一个一个去声明的话无疑会增加很多的开发成本。

**解决方法：**

将接口返回的`JSON`数据通过`json2ts`进行解析，然后直接 cv 即可。

[相关链接](http://json2ts.com/)

## husky 未执行

**原因：**

`pre-commit`,`commit-msg`自定义的钩子在执行中权限不足，无法被执行。

**解决方法：**

- 增加文件的执行权限。

  ```shell
  chmod +x ./.husky/pre-commit
  chmod +x ./.husky/commit-msg
  ```

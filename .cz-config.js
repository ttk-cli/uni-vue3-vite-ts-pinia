module.exports = {
  types: [
    { value: 'feat', name: 'feat: 一个新的特性' },
    { value: 'fix', name: 'fix: 修复一个Bug' },
    { value: 'docs', name: 'docs: 变更的只有文档' },
    { value: 'refactor', name: 'refactor: 代码重构，注意和特性、修复区分开' },
    { value: 'test', name: 'test: 添加一个测试' },
    { value: 'build', name: 'build: 修改项目构建系统配置' },
    { value: 'ci', name: 'ci: 修改项目继续集成流程' },
    { value: 'chore', name: 'chore: 改变构建流程、或者增加依赖库、工具等' },
    {
      value: 'improvement',
      name: 'improvement: 用于对当前实现进行改进而没有添加新功能或修复错误的提交',
    },
    { value: 'merge', name: 'merge: 仅进行分支合并' },
    { value: 'revert', name: 'revert: 回滚到上一个版本' },
  ],

  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: '模块名称:',
    subject: '描述:',
    body: '长描述，使用"|"换行(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue:例如:#1, #2(可选):\n',
    confirmCommit: '确定提交?',
  },

  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['customScope', 'body', 'breaking', 'footer'],
  subjectLimit: 100,
}

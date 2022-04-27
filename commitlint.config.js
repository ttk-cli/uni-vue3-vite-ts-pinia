module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'subject-case': [0, 'never'],
    'type-enum': [
      2, //代表必须输入
      'always',
      [
        'feat', // 一个新的特性
        'fix', // 修复一个Bug
        'docs', // 变更的只有文档
        'refactor', // 代码重构，注意和特性、修复区分开
        'test', // 添加一个测试
        'build', // 修改项目构建系统配置
        'ci', // 修改项目继续集成流程
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'improvement', // 用于对当前实现进行改进而没有添加新功能或修复错误的提交
        'merge', // 仅进行分支合并
        'revert', // 回滚到上一个版本
      ],
    ],
  },
}

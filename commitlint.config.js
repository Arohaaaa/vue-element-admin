module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  rules: {
    // type的类型定义，标识git提交的type必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test']
    ],
    // subject大小写不做校验
    'subject-case': [0]
  }
}

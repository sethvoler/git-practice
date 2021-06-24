module.exports = {
  settings: {
    react: {
      version: 'detect'
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
    'no-func-assign': 2, //禁止重复的函数声明
    'no-trailing-spaces': 1, //一行结束后面不要有空格
    'no-undef': 2, //不能有未定义的变量
    'quotes': [1, 'single'], //引号类型 `` "" ''
    'semi': [2, 'always'], //语句强制分号结尾
    'no-unused-vars': 2, // 定义未使用
  },
};

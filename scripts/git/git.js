const shell = require('shelljs');
const inquirer = require('inquirer');

const { exec } = shell;

exec('git add .');

const headers = [
  'feat: 新增功能',
  'fix:  修复缺陷',
  'build: 发布版本',
  'chore: 改变构建流程、或者增加依赖库、工具等',
  'ci: 持续集成修改',
  'docs: 文档修改',
  'perf: 优化相关，比如提升性能、体验',
  'refactor: 代码重构',
  'revert: 回退版本',
  'style: 样式修改',
  'test: 测试用例修改',
  'merge: 分支合并'
];

const gitCommit = async () => {
  const header = (await inquirer.prompt([
    {
      type: 'list',
      name: 'header',
      message: '请选择 commit header',
      choices: headers,
      default: 'feat: 新增功能',
    }
  ])).header.split(' ')[0];
  const desc = (await inquirer.prompt([
    {
      type: 'input',
      name: 'desc',
      message: '请输入 commit',
      default: '',
    }
  ])).desc.trim();
  exec(`git commit -m "${header} ${desc}"`);
};

gitCommit();

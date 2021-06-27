/* eslint-disable */
const shell = require('shelljs');
const inquirer = require('inquirer');
const { exec } = shell;

const versions = [
  'prepatch 预备补丁版本号 如：v1.0.1-0',
  'prerelease 预发布版本号 如：v1.0.1-1',
  'patch 补丁版本号 如：v1.0.2',
  'preminor 预备次版本号 如：v1.1.0-0',
  'minor 次版本号 如：v1.1.0',
  'premajor 预备主版本号 如：v2.0.0-0',
  'major 主版本号 如：v2.0.0',
];
const gitVersion = async () => {
  const version = (
    await inquirer.prompt([
      {
        type: 'list',
        name: 'version',
        message: '请选择要更改的版本方式',
        choices: versions,
        default: 'patch 补丁版本号 如：v1.0.2',
      },
    ])
  ).version.split(' ')[0];
  exec(`npm version ${version} -m "build: upgrade to %s for reasons"`);
  exec(`npm run changelog && git add CHANGELOG.md`);
  exec(`git commit -m "docs: changelog"`);
};
gitVersion();

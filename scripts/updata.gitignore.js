const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const inquirer = require('inquirer');

const { exec } = shell;

exec('git rm -r --cached .');

inquirer.prompt([
  {
    type: 'input',
    name: 'addTexts',
    message: '请添加需要被 git 忽略的文件，多个文件请用空格隔开',
    default: '',
  }
]).then(({ addTexts }) => {
  const gitignore = path.resolve('.gitignore');
  addTexts.split(' ').forEach((file, index) => {
    if (file) {
      const value = index ? `\n${file}` : file;
      fs.appendFile(gitignore, value, 'utf-8', function (err) {
        if (err) {
          console.log(err);
          return false;
        }
      });
    }
  });
  exec('git add .');
  exec('git commit - m "docs: update .gitignore"');
});


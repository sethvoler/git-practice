# GIT-PRACTICE

这是一个用于对开源项目进行代码提交的练习项目
## 更新 .gitignore

### 手动更新步骤

- 去掉已经托管的文件 `git rm -r --cached .`
- 修改 `.gitigonre` 文件内容
- `git add . && git commit -m "docs: update .gitignore"`

### 自动化更新命令

- `npm run u1`
- 为了让命令简单将语义化的命令重命名了
- 具体脚本参考 `scripts/update.gitignore.js`

## 快捷 git 提交命令

- `npm run gc`
- 具体脚本参考 `scripts/git.js`

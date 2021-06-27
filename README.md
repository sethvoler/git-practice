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
- 具体脚本参考 `scripts/git/update.gitignore.js`

## 快捷 git 提交命令

- `npm run gc`
- 具体脚本参考 `scripts/git/git.js`
- 也可以用第三方的 `commitizen` 处理，本项目使用自定义脚本

## 自动化版本更新命令

- `npm run vc`
- 该命令必须在执行 `npm run gc` 后执行
- 该命令执行后会自动更新 `CHANGELOG.md`

## 为该项目做贡献的步骤

- `fork` 该项目的副本
- 克隆副本到本地，`git clone ...`
- 安装 `EditorConfig for VS Code` 插件
- 进入项目创建开发分支，`git checkout -b <你的开发分支名>`
- 安装依赖，`npm i`
- 查看 `package.json` 的 `scripts` 命令，熟悉项目并开发
- 在本地提交，`npm run gc`
- 合并原始仓库
  - 查看远程仓库，`git remote -vv`
  - 添加原始仓库，`git remote add <你给原始仓库取的别名> <远程仓库git地址>`
  - 本地切换到 master 分支，`git checkout master`
  - 获取原始仓库上的 `master` 分支，`git fetch <你给原始仓库取的别名> master`
  - 本地切换到开发分支，`git checkout <你的开发分支名>`
  - 使用 `rebase` 模式合并本地的开发分支和原始仓库的 `master` 分支，`git rebase <你给原始仓库取的别名>/master`
- 推送到副本仓库，`git push origin <你的开发分支名>`
- 发起合并请求
  - 在副本仓库的页面点击你更新的分支，再点击 `New pull Request`
  - 出现 `New pull Request` 操作界面后，再点击 `Create pull request` 后填写一些信息
- 之后等待原始项审核即可

## TODO

- `npm run vc` 命令优化，使其不会因为没有 `npm run gc` 而中断
- `vite` 配置优化
- `mobx store` 组织
- 添加持续集成

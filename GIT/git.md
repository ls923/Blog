## Git 基础
### 获取 Git 仓库
两种 获取 Git 项目仓库的方式
1. 将尚未进行版本控制的本地目录转换为 Git 仓库;
2. 从其他服务器 **克隆** 一个已存在的 Git 仓库

##### 1.初始化仓库
**`git init`**

##### 2.克隆现有的仓库
**`git clone <url> (<direct>)`**

example:
**`git clone https://github.com/libgit2 libgit2 mylibgit`** 
通过额外的参数指定新的目录名:

### 记录每次更新到仓库
文件分为两种状态: **已跟踪** / **未跟踪**

![状态图](https://git-scm.com/book/en/v2/images/lifecycle.png "状态图")
##### 检查当前文件状态
**`git status`**
##### 跟踪新文件/暂存已修改的文件
**`git add <fileName>/<folderName>`**
##### 状态简览
**`git status -s`**
##### 忽略文件
在 **`.gitignore`** 文件添加
##### 查看具体修改
**`git diff`**
##### 提交更新
**`git commit`**

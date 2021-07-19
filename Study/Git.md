## [1]Git 基础

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

### [2]记录每次更新到仓库

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

##### 跳过使用暂存区域

**`git commit -a -m`**

##### 移除文件

**`git rm`**

### [3]查看提交历史

##### 查看提交历史

**`git log`**

---

##### Git恢复版本

> 出现错误提交或者需要撤销提交操作时，可以使用 **`git reset`** 以及 **`git revert`** 命令进行版本的回退

**`git  reset`** 

回滚**到**某个 **commit**，修改 `HEAD` 的位置，适用于恢复到之前某个提交的版本，且到**需要恢复版本**之后提交的版本都不要了。

step1.`git log` 查看提交记录 

step2. 使用 `git reset --hard 目标版本号` 将版本回退

step3. 使用 `git push -f` 强制推送至远程仓库



**`git  revert`** 

反做某一个版本，example(v1,v2,v3)，不需要v2，但是不想撤销v3的提交，使用 `git revert`命令反做v2，生成新的v4，v4保留了v3但是撤销了v2

step1. `git log` 查看提交记录

step2. `git revert -n 版本号` 回滚某个**commit**，这里可能会出现冲突，需要手动解决冲突，然后 `git add`、`git commit -m ***` 

step3. `git push` 推送至远程仓库

---

### 


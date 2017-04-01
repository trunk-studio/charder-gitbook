# NPM 套件管理

### 安裝套件

* [install | npm Documentation](https://docs.npmjs.com/cli/install)
* 別名 i
* 補充：[nodemon](https://nodemon.io/)

**參數**

* -g：表示全域安裝
* --save：production
* --save-dev：development (預設)
* 什麼都沒加的情況

<!-- 示範有 -g -S 的情況，及沒有加 --save 的情況。 -->

**安裝專案下所有的套件**

```
cd your-project-folder

npm install
// 或
npm install --production
// 或
NODE_ENV=production npm install
```

**安裝指定套件到全域**

* 常用於安裝工具型套件

```
npm install -g nodemon
```

**安裝到專案，並將依賴寫入 package.json 的 dependencies**

```
npm install --save nodemon
npm install -S nodemon
```

**安裝到專案，並將依賴寫入 package.json 的 devDependencies**

```
npm install --save-dev nodemon
npm install --D nodemon
```

**安裝指定版本或 指定tag 的套件**

* @latest：表示最新​​版本

```
npm install npm@latest -g
npm i nodemon@1.6.0
```

**安裝沒有 release 到 NPM，但原始碼放在 github 的套件**

```
npm i https://github.com/expressjs/express.git
```

### 移除套件

```
npm uninstall -g nodemon
npm uninstall --save nodemon
npm uninstall --dev-save nodemon
```

* [uninstall | npm Documentation](https://docs.npmjs.com/cli/uninstall)
* 別名：remove、rm、r、un、unlink

### 更新套件

```
npm update
npm update nodemon
```

* 它會先到 remote repo 確認最新版本，然後確認 local 版本，如果 local 版本不存在，或 remote repo 版本較新，就會開始安裝套件。

**練習題**

使用 NPM 安裝 Bootstrap 套件至 package.json 的 dependencies。


### 查看套件詳細資訊

 * [view | nam Documentation](https://docs.npmjs.com/cli/view)
 * 別名有 info, show, v

**範例**

```
npm view color
npm view color name version engines description license keywords author maintainers homepage repository
```

### 查看所有套件

**查看專案下安裝的套件**

```
npm list
```

**查看全域下安裝的套件**

```
npm list -global
```

**查看專案下指定安裝的套件**

```
npm list underscore
```

### 連結套件

* 使用情境：安裝放在 local 的套件

```
npm link sandbox /Users/ailinliu/sandbox-module
```

# NPM

<svg viewBox="0 0 18 7">
	<path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path>
	<path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path>
</svg>

* [npm - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/Npm)
* [NPM - npm is the package manager for JavaScript ](https://www.npmjs.com/)
* 全名叫 Node Package Manager 是 Node.js 預設的軟體套件管理系統。但現在不只有 Node.js 的套件會放在上面（例如 [Pure](https://www.npmjs.com/package/purecss) ），基本已經變成了 JS Open Source 軟體套件集散地。
* 只要是 Public packages，使用者都可以免費發佈在 NPM。

**使用情境**

* 管理專案中使用的錯綜複雜的外部套件，主要以後端和工具為主。

## 查看常用指令

**查看 NPM 命令列表**

```
npm help
```

**查看各個命令的簡單用法**

```
npm -l
```
**查看 NPM 的版本**

```
npm -v
```

## 初始化 NPM

* 如果你加了 `-y` 或 `-f` 參數，代表你將認同使用預設的設定值來產生 `package.json` 檔。
* [init | nam Documentation](https://docs.npmjs.com/cli/init)

**語法**

```
npm init [-f|--force|-y|--yes]
```

**範例**

```
npm init
npm init -y
npm init -f
```

**練習題**

使用 `npm init` 指令新增一個專案

## 設置環境變數

**設定**

* config 關鍵字可省略

```
npm config set init-author-name 'alincode'
npm config set init-author-email 'alincode@gmail.com'
npm config set init-author-url 'http://yourdomain.com'
npm config set init-license 'MIT'

// 鎖死版本號
npm config set save-exact true
```

**取得**

* config 關鍵字可省略

```
npm config get init-author-name
```

**刪除**

npm config delete init-author-name

**查看全域 NPM 的配置**

```
npm config list -l
```

**查看使用者 NPM 的配置**

```
npm config list
```

**在編輯器開啟設定檔**

```
npm config edit
npm config edit -g
npm config edit --global
```

**練習題**

設定環境變數，將初始化作者信箱 `init-author-email` 跟初始化作者名稱 `init-author-name`，改成專屬於自己的值，並新增一個專案。

### 搜尋套件

<!--
例如 npm search sails
-->

* [search | nam Documentation](https://docs.npmjs.com/cli/search)
* 別名有 s, se, find
* 可用正則表達式

```
npm search express
```

### 查看套件詳細資訊

 * [view | nam Documentation](https://docs.npmjs.com/cli/view)
 * 別名有 info, show, v

```
npm view color
npm view color name version engines description license keywords author maintainers homepage repository
```

### 列出套件

```
// 列出專案下安裝的套件
npm list

// 列出全域下安裝的套件
npm list -global

// 列出專案下指定安裝的套件
npm list underscore
```

### 安裝套件

* [install | npm Documentation](https://docs.npmjs.com/cli/install)
* 別名 i
* [nodemon](https://nodemon.io/)

```
cd project-folder && npm install

// 安裝到全域
npm install -g nodemon

// 安裝到專案，並將依賴寫入至 dependencies
npm install --save nodemon
npm install -S nodemon

// 安裝到專案，並將依賴寫入至 devDependencies
npm install --save-dev nodemon
npm install --D nodemon

// version or tag
npm i nodemon@1.6.0

// from remote repo
npm i https://github.com/expressjs/express.git
```

**參數**

* -g
* --save：production
* --save-dev：development (預設)
* 什麼都沒加的情況

<!-- 示範有 -g -S 的情況，及沒有加 --save 的情況。 -->

```
npm install --production
// or
NODE_ENV=production npm install
```

### 移除套件

* [uninstall | npm Documentation](https://docs.npmjs.com/cli/uninstall)
* 別名：remove、rm、r、un、unlink

```
npm uninstall -g nodemon
npm uninstall --save nodemon
npm uninstall --dev-save nodemon
```

### 更新套件

* 它會先到 remote repo 確認最新版本，然後確認 local 版本，如果 local 版本不存在，或 remote repo 版本較新，就會開始安裝套件。

```
npm update
npm update nodemon
```

**練習題**

使用 NPM 安裝 Bootstrap

### 連結套件

* 使用情境：安裝放在 local 的套件

```
npm link sandbox /Users/ailinliu/sandbox-module
```

<!-- 省略了發佈 npm 的部分，等到上 NodeJS 的時候在教。 -->

### 解決全域安裝權限問題

* 檢查 prefix 指定的位置：`npm config list -l`
* 編輯設定檔，更改 prefile 指定的位置：`npm config edit`

```
prefix = "/Users/ailinliu/.nvm/versions/node/v6.9.4"
```

### 更新 NPM 到最新版

* @latest：表示最新​​版本
* -g：表示全域安裝

```
npm install npm@latest -g
```

### 參考資料

* [npm 基本用法和实用技巧](https://github.com/theicebear/npm-basic-usage)

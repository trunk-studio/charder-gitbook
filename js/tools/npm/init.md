# NPM 初始化專案

**語法**

```
npm init [-f|--force|-y|--yes]
```

* 如果你加了 `-y` 或 `-f` 參數，代表你將認同使用預設的設定值來產生 `package.json` 檔。
* [init | nam Documentation](https://docs.npmjs.com/cli/init)

**範例**

```
npm init
npm init -y
npm init -f
```

**package.json**

* [package.json | nam Documentation](https://docs.npmjs.com/files/package.json)

<!-- 
* 說明 package.json 的用途
-->

```
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "license": "ISC"
}
```

**練習題**

使用 `npm init` 指令新增一個專案
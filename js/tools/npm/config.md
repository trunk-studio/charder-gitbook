# config

```
npm help config
```

* 當執行 set 和 get 時，config 關鍵字可省略。

**語法**

```
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
```

**設定 config 值範例**

```
npm config set init-author-name 'alincode'
npm config set init-author-email 'alincode@gmail.com'
npm config set init-author-url 'http://yourdomain.com'
npm config set init-license 'MIT'

npm config set save-prefix='~'
// 預設每次安裝都用精確版號
npm config set save-exact true
// 自訂變數
npm config set demo:port 80
```

```
{
  "name":"demo",
  "config":{ "port" : "8080" }
}
```

**讀取 config 值範例**

```
npm config get init-author-name
```

```
console.log(process.env.npm_package_name);
console.log(process.env.npm_package_version);
console.log(process.env.npm_package_config_port);
```

**刪除 config 值範例**

```
npm config delete init-author-name
```

**查看 config 列表**

```
// 全域 config
npm config list -l

// 使用者 config
npm config list
```

**在編輯器開啟設定檔**

```
npm config edit
npm config edit -g
```

**練習題**

1. 設定環境變數，將初始化作者信箱 `init-author-email` 跟初始化作者名稱 `init-author-name`，改成專屬於自己的值，並新增一個專案。
1. 新增一個 npm config 的變數叫 port，port 的值為 8080，接著寫一個可以列印出 port 值得小程式 並執行。
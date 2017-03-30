# Bower

* 是 Twitter 團隊開發的一套前端套件管理工具
* 預設目錄在 bower_components

<!-- bowerbrid -->

**使用情境**

* 管理專案中使用的錯綜複雜的外部套件，主要以前端用的 HTML、JS、CSS 為主。

**npm vs bower**

| 名稱   | 主要支援  | 結構 |
| ----- | -------- | ------ |
| bower | 前端 JS | 扁平化 |
| npm   | 後端 JS | 樹狀   |

**安裝 bower**

```
npm install bower -g
```

### 常用指令

* [Bower - Commands](https://bower.io/docs/api/)

```
bower init
bower install
bower install bootstrap
// 離線安裝
bower install bootstrap --offline
bower uninstall bootstrap
bower update bootstrap
bower search bootstrap
bower lookup bootstrap
bower list
bower -help
bower -v
bower cache list
bower cache clean
```

### bower.json

專案有關的配置

```json
{
  name: 'xx',
  authors: [
    'alincode <alincode@gmail.com>'
  ],
  description: '',
  main: '',
  license: 'MIT',
  homepage: '',
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'test',
    'tests'
  ]
}
```

### .bowerrc

環境有關的配置

* directory
* scripts
* [resolvers](https://bower.io/docs/pluggable-resolvers/)

```json
{
  "cwd": "~/.my-project",
  "directory": "bower_components",
  "registry": "https://bower.herokuapp.com",
  "shorthand-resolver": "git://github.com//.git",
  "proxy": "http://proxy.local",
  "https-proxy": "http://proxy.local",
  "ca": "/var/certificate.pem",
  "color": true,
  "timeout": 60000,
  "save": true,
  "save-exact": true,
  "strict-ssl": true,
  "storage": {
    "packages" : "~/.bower/packages",
    "registry" : "~/.bower/registry",
    "links" : "~/.bower/links"
  },
  "interactive": true,
  "resolvers": [
    "mercurial-bower-resolver"
  ],
  "shallowCloneHosts": [
    "myGitHost.example.com"
  ],
  "scripts": {
    "preinstall": "",
    "postinstall": "",
    "preuninstall": ""
  },
  "ignoredDependencies": [
    "jquery"
  ]
}
```

**練習題**

* 更改安裝路徑

### 前端使用方式

```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
```

# Bower

* 前端套件管理工具
* 預設目錄在 bower_components
* bower.json
* .bowerrc

<!-- bowerbrid -->

**使用情境**

* 管理專案中使用的錯綜複雜的外部套件，主要以前端用的 HTML、JS、CSS 為主。

**npm vs bower**

| 名稱   | 主要支援  | 結構 |
| ----- | -------- | ------ |
| bower | 前端 JS | 扁平化 |
| npm   | 後端 JS | 樹狀  |


**安裝 bower**

```
npm install bower -g
```

### 常用指令

```
bower init
bower install
bower install bootstrap
bower uninstall bootstrap
bower update bootstrap
bower search bootstrap
bower list
bower -help
bower -v
```

### bower.json

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

```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
```

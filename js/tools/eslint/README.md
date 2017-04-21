# ESlint

* JavaScript 程式碼檢查工具
* 用途：改善程式碼品質
* ESLint 完全可以自行決定是否套用特定規則，以及套用到何種程度。

<!-- 
如何可以減少 bug 的產生？

* 使用指名的外部套件
* 代碼檢查，檢查是否有隱藏錯誤用法，例如沒事前宣告。
* 撰寫通用 Coding Style，避免踩到雷。
-->

**起源**

大多數需編譯的語言來說在編譯程序時，就會檢查程式碼，但 JavaScript 不需要編譯，透過使用 ESLint 這樣的工具，可以補足這一塊缺點。

**原理**

掃描程式碼，找出可能發生的問題。

**好處**

避免在執行過程才發現問題，提升程式碼的品質。

**常用指令**

```
// 安裝
npm install eslint -g
// 初始化
eslint --init
// 掃描原始碼
eslint demo.js
eslint folder1
eslint folder1 folder2 demo.js
```

### 設定檔檔案格式

* JavaScript - use .eslintrc.js and export an object containing your configuration.
* YAML - use .eslintrc.yaml or .eslintrc.yml to define the configuration structure.
* JSON - use .eslintrc.json to define the configuration structure. ESLint’s JSON files also allow JavaScript-style comments.
* Deprecated - use .eslintrc, which can be either JSON or YAML.
* package.json - create an eslintConfig property in your package.json file and define your configuration there.

```
.eslintrc.js
.eslintrc.yaml
.eslintrc.yml
.eslintrc.json
.eslintrc
package.json
```

**.eslintrc.js**

```js
module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "angular": true,
        "_": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ]
    }
};
```

### Globals

讓 eslint 知道這個全域變數是有被 define 過

```json
{
  "globals": {
    "angular": true,
    "_": true
  }
}
```

### Environments

* 設定環境，不同的環境會有不同的全域變數組合。

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  }
}
```

```js
import _ from 'lodash';
var _ = require('lodash');
```

**[環境列表](http://eslint.org/docs/user-guide/configuring#specifying-environments)**

* browser - **browser global variables.**
* node - **Node.js global variables and Node.js scoping.**
* commonjs - **CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).**
* shared-node-browser - Globals common to both Node and Browser.
* es6 - **enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).**
* worker - web workers global variables.
* amd - defines require() and define() as global variables as per the amd spec.
* mocha - **adds all of the Mocha testing global variables.**
* jasmine - adds all of the Jasmine testing global variables for version 1.3 and 2.0.
* jest - Jest global variables.
* phantomjs - PhantomJS global variables.
* protractor - Protractor global variables.
* qunit - QUnit global variables.
* jquery - **jQuery global variables.**
* prototypejs - Prototype.js global variables.
* shelljs - ShellJS global variables.
* meteor - Meteor global variables.
* mongo - MongoDB global variables.
* applescript - AppleScript global variables.
* nashorn - Java 8 Nashorn global variables.
* serviceworker - Service Worker global variables.
* atomtest - Atom test helper globals.
* embertest - Ember test helper globals.
* webextensions - WebExtensions globals.
* greasemonkey - GreaseMonkey globals.

### Rules

* 啟用的規則，指定要遵守哪些規則及各自的錯誤層級 (error level)
* [List of available rules - ESLint中文](http://eslint.cn/docs/rules/#best-practices)

**每條規則:**

* 各自獨立
* 可以開啟或關閉（沒有什麼可以被認為 「太重要所以不能關閉」）
* 可以將結果設置成警告或者錯誤

另外:

* ESLint 並不推薦任何編碼風格，規則是自由的
* 所有內置規則都是泛化的

```json
{
  "rules": {
    // 縮排是四個空格
    "indent": [
      "error",
      4
    ],
    // 使用單引號
    "quotes": [
      "error",
      "single"
    ]
  }
}
```

**error level**

* "off" or 0 - 關閉規則
* "warn" or 1 - 將規則視為一個警告（不會影響退出碼）
* "error" or 2 - 將規則視為一個錯誤 (退出碼為 1)

### Plugins

**所有都是可拔插的**

* 內置規則和自定義規則共用一套規則 API
* 內置的格式化方法和自定義的格式化方法共用一套格式化 API
* 額外的規則和格式化方法能夠在運行時指定
* 規則和對應的格式化方法並不強制捆綁使用


* <https://www.npmjs.com/search?q=eslint-plugin>
* eslint-plugin-*
    * eslint-plugin-react
    * eslint-plugin-promise
* <https://www.npmjs.com/package/eslint-plugin-promise>

```json
{
  "plugins": [
    "promise"
  ],
  "rules": {
    // 插件名稱 / 規則ID
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn"
  }
}
```

### Extend

<https://www.npmjs.com/package/eslint-plugin-promise>

```json
{
  "plugins": [
    "promise"
  ],
  "extends": [
    "plugin:promise/recommended"
  ]
}
```

```json
{
  "extends": [
    "extends": "eslint:recommended"
  ]
}
```

### 範例

![](assets/eslint-error.png)

```js
function greet(firstname, lastname){
    console.log('hi ' + firstname + ', your nickname is ' + nickname);
}

greet('ailin');
```

### 工具

* [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [eslint - ATOM](https://atom.io/packages/eslint)

### 參考資料

* <http://eslint.org/>
* <http://eslint.cn/>
* [List of available rules - ESLint - Pluggable JavaScript linter](http://eslint.org/docs/rules/)

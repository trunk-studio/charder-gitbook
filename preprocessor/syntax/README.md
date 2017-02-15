# 語法 (Syntax)

提供原生 CSS 不足的語法，以達到易閱讀和可維護性。

### 變數 (Variables)

用 `$` 符號自訂變數

```
$primary-color: #333;

body {
  background: $primary-color;
}
```

**使用情境**

* 重複性的值

**練習題 ex01: 定義五個網站主要配色的變數，並建立 5 個相對應的 Button 類別。**

![](assets/ex01.png)

```html
<button class="btn-primary">primary</button>
<button class="btn-success">success</button>
<button class="btn-info"/>info</button>
<button class="btn-warning">warning</button>
<button class="btn-danger">danger</button>
```

### 繼承 (Extend/Inheritance)

**SCSS**

```
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

**CSS**

```
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

**練習題 ex02**

定義一個 btn 類別，值為

```css
padding: 10px;
font-size: 14px;
border-radius: 4px;
```

讓之前建立的五個 Button 都繼承 btn。

### 混合 (Mixins)

跟 Extend 類似，但可以帶入參數。

**SCSS**

```
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

**CSS**
```
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

**練習題 ex03:支援所有 browser**

### 巢狀 (Nesting)

**SCSS**

```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

**CSS**

```
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

### Partials

```
// _simple.scss

@import 'reset';
@import 'colors'; //  _colors.scss
@import 'fonts'; //  _fonts.scss
```

```
// _jumbotron.scss
@import 'reset';
@import 'colors'; //  _colors.scss
@import 'fonts'; //  _fonts.scss
@import 'margin'; //  _margin.scss
```

### 合併 (Import)

* 在檔案名稱前面加個下底線 (_)，就不會轉成獨立的 CSS。

```
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```

```
// style.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

**使用情境**

* 將檔案切割細分，以利維護。

### 運算 (Operators)

**SCSS**

```
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

**CSS**

```
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complementary"] {
  float: right;
  width: 31.25%;
}
```

**練習題 ex04**

* 新增 btn-danger-light 跟 btn-danger-dark 兩種類別，btn-danger-light 的色碼是 btn-danger 乘 2，btn-danger-dark 的色碼是 btn-danger 乘 0.5。

<!--## 函示 (function)

**SCSS**

```
#main {
  background: mix(red, yellow);
}
```

**CSS**

```
#main {
  background: #ff8000;
}
```-->

### 延伸閱讀

* [SASS Guide](http://sass-lang.com/guide)
* [SASS 官方文件](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)


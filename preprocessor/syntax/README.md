# 語法 (Syntax)

提供原生 CSS 不足的語法，以達到易閱讀和可維護性。

## 變數 (Variables)

用 `$` 符號自訂變數

**使用情境**

* 重複性的值

```
$primary-color: #333;

body {
  background: $primary-color;
}
```

### 練習題

* ex01: 使用變數功能，將 CSS 改成彈性比較高的 SCSS 語法

![](assets/ex01.png)

**HTML**

```html
<button class="btn-primary">primary</button>
<button class="btn-success">success</button>
<button class="btn-info"/>info</button>
<button class="btn-warning">warning</button>
<button class="btn-danger">danger</button>
```

**CSS**

```css
.btn-primary {
  background: #286090; }

.btn-success {
  background: #449d44; }

.btn-info {
  background: #31b0d5; }

.btn-warning {
  background: #ec971f; }

.btn-danger {
  background: #c9302c; }
```

## 繼承 (Extend/Inheritance)

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

### 練習題

* ex02：定義一個 btn 類別，值為

```css
.btn {
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
}
```

讓之前建立的五個 Button 都繼承 btn。

## 混合 (Mixins)

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

### 練習題

* ex03:讓將 border-radius 加入前綴瀏覽器支援

## 巢狀 (Nesting)

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

**SCSS**

```
li {
  font: {
    family: serif;
    weight: bold;
    size: 1.3em;
  }
}
```

**CSS**

```css
li {
  font-family: serif;
  font-weight: bold;
  font-size: 1.3em;
}
```

## Partials

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

```
// normal-layout.css
@import 'simple'; //  _simple.scss
```

```
// jumbotron-layout.css
@import 'jumbotron'; //  _jumbotron.scss
```

## 合併 (Import)

* 在檔案名稱前面加個下底線 (_)，就不會轉成獨立的 CSS。

**使用情境**

* 將檔案切割細分，以利維護。

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

## 運算 (Operators)

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

### 練習題

* ex04：新增 btn-danger-light 跟 btn-danger-dark 兩種類別，btn-danger-light 的色碼是 btn-danger 乘 2，btn-danger-dark 的色碼是 btn-danger 乘 0.5。

## 函示 (function)

* mix

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
```

## if

```
@if lightness($color) > 30% {
  background-color: black;
}
@else {
  background-color: white;
}
```

## For Loop

* @for
* @each
* @while

```
@for $i from 1 through 3 {
  span:nth-child(#{$i}) {
    color:red;
  }
}
```

```css
span:nth-child(1) {
  color: red;
}

span:nth-child(2) {
  color: red;
}

span:nth-child(3) {
  color: red;
}
```

### 符號 (Ampersand)

[The Sass Ampersand | CSS-Tricks](https://css-tricks.com/the-sass-ampersand/)

#### 用法一

**SCSS**

```scss
.btn-danger {
  color: blue;

  &.disabled {
    color: red;
  }
}
```

**CSS**

```css
.btn-danger {
  color: blue;
}
.btn-danger.disabled {
  color: red;
}
```

#### 用法二

**SCSS**

```scss
.button {
  .page-about & { 
    background: red;
  }
}
```

**CSS**

```css
.page-about .button {
  background: red;
}
```

### 用法三

**SCSS**

```scss
.btn {
  &-primary {}
  &-secondary {}
}
```

**CSS**

```css
.btn-primary {}
.btn-secondary {}
```

## 練習題

```
<button class="btn-primary">primary</button>
<button class="btn-success">success</button>
<button class="btn-info"/>info</button>
<button class="btn-warning">warning</button>
<button class="btn-danger">danger</button>
<button class="btn-danger-light">danger light</button>
<button class="btn-danger-dark">danger dark</button>
```

* ex01: 將 background 的值，變成獨立的變數，讓其他類別也可以使用。

```
.btn-primary {
  background: #286090;
}
.btn-success {
  background: #449d44;
}
.btn-info {
  background: #31b0d5;
}
.btn-warning {
  background: #ec971f;
}
.btn-danger {
  background: #c9302c;
}
```

* ex02: 使用 Mixins 將 border-radius 的程式碼解構。

```
.btn, .btn-primary, .btn-success, .btn-info, .btn-warning, .btn-danger {
  padding: 10px;
  font-size: 14px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
```

* ex03: 使用繼承功能，將 btn 之間的關係解構。
* ex04: btn-danger-light 和 btn-danger-dark 類別，他們的顏色是從 btn-danger 的色碼計算而來。
* ex05: 使用符號 ＆，將諸多類別名稱之間的關聯解構。

## 延伸閱讀

* [SASS Guide](http://sass-lang.com/guide)
* [SASS 官方文件](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)


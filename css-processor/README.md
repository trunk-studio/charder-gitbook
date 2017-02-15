# CSS 處理器

**CSS 預處理器框架**

預處理器可把含語法糖的程式碼，轉換成正常 CSS 格式。

* SASS

透過換行與縮排來表現這種層次結構

```
$primary-color: #333

body
  color: $primary-color
```

* SCSS

SASS (Syntactically Awesome Stylesheets) 是由 Hampton Catlin 設計，然後由 Natalie Weizenbaum 實作的一種樣式語言。

```
$primary-color: #333;

body {
  color: $primary-color;
}
```

* LESS

```
@primary-color: #4D926F;
 
body {
  color: @primary-color;
}
```

* Stylus

**CSS 後處理器**

* CSS 壓縮工具

**問答題**

* CSS 常見的問題是？
* 如何優化舊專案的 CSS？

<!--
CSS 並不是一個語言，沒有變數跟迴圈，難維護

自訂 component 命名
自訂 help 類別
自訂 grid 類別
-->

**延伸閱讀**

* [Bootstrap - Grid less](http://getbootstrap.com/css/#grid-less)
* [LESS vs SASS？選擇哪種CSS样式編程語言? _人人IT網](http://fanli7.net/a/bianchengyuyan/20160726/570351.html)
* [程式人雜誌 - CSS 的變種： LESS 與 SASS](http://programmermagazine.github.io/201409/htm/focus2.html)
* [gonsakon - Sass & Susy教學手冊](https://github.com/gonsakon/Learn-Sass-in-90-days)
* [30天掌握Sass語法 - (1)什麼是SASS？它真的能加速我寫CSS的效率嗎？](http://ithelp.ithome.com.tw/articles/10126703)
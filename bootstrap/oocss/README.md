# 物件導向 CSS

### 程式語言中的物件導向

* 邏輯與結構抽離
* 提高維護性
* class & instance

```js
var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

// 呼叫 Person sayHello 方法。
person1.sayHello(); // "Hello, I'm Alice"
person2.sayHello(); // "Hello, I'm Bob"
```

資料來源：[JavaScript 物件導向介紹 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

### CSS 中的物件導向

**兩大原則(p25)**

* 結構與外觀分離
  * 結構
    * media
    * media-img
    * media-body
  * 外觀
    * media-no-border
    * media-shadow
* 容器與內容分離

**注意事項**

* 減少使用子選擇器

### 在 Bootstrap 的世界裡

```html
<h1>title</h1>
```

或

```html
<div class="h1">title</div>
```

會套用同樣的 style

* 什麼情境會需要用這個？

<!--
  需要有 h1 一樣的顯示效果，但內容物並不是與 h1 相同含義
-->

<!--看 Bootstrap css 原始碼-->

### 延伸閱讀

* [漫談 CSS 架構方法 - 以 OOCSS, SMACSS, BEM 為例](http://www.slideshare.net/kurotanshi/css-oocss-smacss-bem)
* [Pure CSS framework](https://purecss.io/)：只有 CSS，沒有含 JS。
* [劣以為的 OOCSS 和 SMACSS 以及其他 CSS 規範 - @ChingHanHo](http://blog.chh.tw/posts/oocss-smacss-and-css-guidelines/)
* [如何逐步提升CSS的可利用性、模組化](http://www.slideshare.net/sfismy/css-21022273)

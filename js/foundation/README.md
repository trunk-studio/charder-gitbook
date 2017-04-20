# Javascript

Javascript 是一個神奇的語言，很多人程式設計師都在不是很了解這個語言的情況下，開始使用這個語言完成他們工作。

### 我們將會學到什麼？

* 理解 JavaScript 的運作機制與基本概念
* 避免一般開發者會犯的 JavaScript 陷阱和錯誤，寫出優良穩定的 JavaScript 程式碼。
* 瞭解進階觀念，像是 Closure、原型繼承、立即函式

### 非它不可？

* Javascript 是所有瀏覽器唯一共同支援的語言。
* 可以用來撰寫 Hybrid App 程式，Hybrid App 程式其實是被包裹在原生容器 (Native Container)，透過手機上的瀏覽器引擎來呈現 HTML 和執行 JavaScript。

<!-- demo 一下 Hybrid App 的長相 -->

### 命名為 Javascript 並非偶然的

javascript 創作者 Brendan Eich 主要方向和興趣是**函數式程式設計**，網景公司招聘他的目的是要他研究將 Scheme 語言作為網頁腳本語言的可能性。但網景和 Sun 聯手後，網景公司做出決策，未來的網頁腳本語言**必須看上去與 Java 相似**，但是比 Java 簡單，使得非專業人士也能快速上手。但是他對 Java 一點興趣也沒有，為了應付公司安排的任務，他只用 10 天時間就把它設計出來。由於設計時間太短，語言的一些細節考慮得不夠嚴謹，導致 javascript 陷入一段很長的混亂期。

### 設計風格主要受到什麼影響

* Ｃ：基本語法
* Java
  * new Boolean, new String
* Scheme
  * 一種函數 (function) 語言程式設計語言
  * 設計原則：電腦語言不應該進行功能的堆砌，而應該儘可能減少弱點和限制，使剩下的功能顯得必要。[Scheme - 維基百科，自由的百科全書]
* Self
  * 一種基於原型 (prototype) 的物件導向程式設計語言
  * 設計原則：精簡再精簡
    * 它捨棄了類別的概念，只留下物件。
    * 動態型別：依照資料內容來決定型別

### 如果你是寫 Java 或 C#，你可能會有一下疑問：

* 為什麼沒有 public, protected, private
* 為什麼宣告是用 var
* 為什麼不是用 method，而是用 function。
* 為什麼非同步對 javascript 這麼重要？

### 完整的 JavaScript 包括以下幾個部分：

* ECMAScript：語言核心、語言的語法、基本物件
* DOM（Document Object Model）
* BOM（Browser Object Model）

### BOM

- window
  - document (DOM)
    - document.createElement('div');
  - [navigator](http://www.w3school.com.cn/jsref/dom_obj_navigator.asp)
  - [screen](http://www.w3school.com.cn/jsref/dom_obj_screen.asp)
  - [history](http://www.w3school.com.cn/jsref/dom_obj_history.asp)
  - [location](http://www.w3school.com.cn/jsref/dom_obj_location.asp)

### DOM

Document 物件是 Window 物件的一部分

- document
- element
  - id
  - title
  - className
- attribute
- event

```js
document.createElement('div');
```

### 特色

* 函式 (function)
* 寬鬆型別 (loose typing) / 動態型別
* 動態物件 (dynamic object)
* 閉包 (closure)
* 基於原型 (prototype) 的物件導向
* 富表達性的物件實字註記 (expressive object literal notation)

### 應用領域

* IoT: [johnny-five](http://johnny-five.io/) / [cylon](https://cylonjs.com/)
* web: [jQuery](https://jquery.com/) / [React](https://facebook.github.io/react/) / [Vue.js](https://vuejs.org/)(發音同 view) / [Angular.js](https://angularjs.org/)
* mobile : [Ionic](https://ionicframework.com/) / [react native](https://facebook.github.io/react-native/)
* desktop
  * [Electron - Build cross platform desktop apps with JavaScript, HTML, and CSS.](https://electron.atom.io/)
* 3D: [Three.js](https://threejs.org/)

### Code Style

* [GitHub - airbnb/javascript: JavaScript Style Guide](https://github.com/airbnb/javascript)

### 延伸閱讀

* [Javascript誕生記 - C 和 Self 語言的產物 - 壹讀](https://read01.com/B8o3aK.html)
* [Mozilla MDN - JavaScript 物件導向介紹](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
* [統一 JavaScript，只需一種樣式](http://standardjs.com/readme-zhtw): http://standardjs.com/readme-zhtw
* [Eloquent JavaScript](http://eloquentjavascript.net/): http://eloquentjavascript.net/
* [Speaking JavaScript](http://speakingjs.com/es5/index.html): http://speakingjs.com/es5/index.html
* [GitHub - getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS): https://github.com/getify/You-Dont-Know-JS
* [JavaScript 指南 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide): https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide


### Javascript 相關書籍

* [你所不知道的 JS](http://www.books.com.tw/products/0010714615)
* [JavaScript 優良部份](http://www.books.com.tw/products/0010410726)
* [JavaScript 學習手冊](http://www.books.com.tw/products/0010736115)
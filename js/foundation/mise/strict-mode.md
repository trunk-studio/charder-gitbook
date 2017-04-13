# 嚴謹模式 (Strict Mode)

“use  strict”，必須要放在第一行

```js
"use strict";
x = 3.14;
// Uncaught ReferenceError: x is not defined
```

```js
"use strict";
myFunction();

function myFunction() {
    y = 3.14;
}

// Uncaught ReferenceError: y is not defined
```

```js
x = 3.14;
myFunction();

function myFunction() {
   "use strict";
    y = 3.14;
}
// Uncaught ReferenceError: y is not defined
```

### 延伸閱讀

* [w3schools javascript - Strict mode](https://www.w3schools.com/js/js_strict.asp)
* [阮一峰 - Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)
* [Strict mode - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Strict Mode(嚴格模式) - eddychang.me](http://eddychang.me/blog/16-javascript/59-strict-mode.html)

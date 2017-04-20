# Ployfill

* 自動補完函式庫
* 將缺少的新功能增加到程式中

```js
//  polyfill    
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter');
        }
        function F () {};
        F.prototype = o;
        return new F();
    };
}
```

### 延伸閱讀

* [更輕鬆使用自動補完函式庫 (Polypill) | 部落格 | Mozilla Taiwan](https://blog.mozilla.com.tw/posts/6824/using-polyfills)
* [GitHub - stefanpenner/es6-promise: A polyfill for ES6-style Promises](https://github.com/stefanpenner/es6-promise)

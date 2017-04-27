# Module Pattern

### 原理

利用函數的 closure 特性來避免汙染全域的問題，並提供封裝的功能，將函式和變數限制在一個範圍內存取與使用。

### 好處

* 物件導向設計原則
* 將實作封裝起來，只提供公開的介面讓其他人使用。

```js
var counter = (function(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    },
    increment: function() {
      return ++i;
    }
  };
})();

counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5
```

### 延伸閱讀

* [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
# 偽裝命名空間 (fake namespace)

* 偽裝命名空間只是用物件來做變數和函式的容器，Javascript 沒有真正的命名空間。
* 使用情境：減少全域變數

```js
var myApp = {};

myApp.info = {
  maintainer: {
    name: 'alincode',
    email: 'alincode@gmail.com'
  },
  getVersion: function(){
    return 1.01;
  }
}

myApp.info.getVersion();

myApp.member = {
  register: function(){},
  login: function(){},
  logout: function(){}
}
```

### 延伸閱讀

* [CodeData - JavaScript 語言核心（19）名稱空間管理](http://www.codedata.com.tw/uncategorized/essential-javascript-19-namespace/)
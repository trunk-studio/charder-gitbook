# 偽裝命名空間 (fake namespace)

Javascript 沒有命名空間，偽裝命名空間只是用物件來做變數和函式的容器。

```js
var geek = geek || {};
(function() {
    var count = 0;
    function drinkCoffee() {
      console.log('drink coffee');
    }
    function reading(minute) {
      count += minute;
      console.log('reading ' + minute + ' minute');
    }
    function getReadTime() {
      return count;
    }
    function coding() {
      console.log('coding');
    }
    geek.drinkCoffee = drinkCoffee;
    geek.reading = reading;
    geek.getReadTime = getReadTime;
    geek.coding = coding;
})();

geek.reading(30);
geek.reading(15);
console.log(geek.getReadTime());
```

### 練習題

* 建立一個計算機的命名空間，有加減乘除，共四個函式。

### 延伸閱讀

* [CodeData - JavaScript 語言核心（19）名稱空間管理](http://www.codedata.com.tw/uncategorized/essential-javascript-19-namespace/)
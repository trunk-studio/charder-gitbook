# Cascade / Chain

有一些方法沒有回傳值，以設定或改變物件狀態的方法為例，他們通常不會有回傳值。如果我們讓這類的例子改為回傳 this，可以設計出 cascade style。

```js
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```

* 有些方法 (像是設定或改變某些狀態) 並不具有回傳值, 這時讓他 return this 來取代 undefined, 就可以實作 cascade.
* cascade 可以製造富有表達性的介面, 避免單一介面一次做太多的事情.
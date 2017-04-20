# 立即呼叫函式表示式

* IIFEs 全名是 immediately invoked function expressions。
* 它的特色是會立刻執行，且變數生命週期只存在於函數內，不用擔心會留下全域變數。
* 也算匿名函式

**使用情境**

只會執行一次，且需要立刻被執行。

### 範例

**沒有參數傳入**

```js
(function () {
  var name = 'alincode';
  console.log('Hi,', name);
}());

console.log('Hi,', name);
```
<!-- Hi, alincode -->
<!-- Hi, -->

**有參數傳入**

```js
var nickname = 'alincode';
(function(name){
	console.log('Hi,', name);
}(nickname));
console.log('Hi,', name);
```
<!-- Hi, alincode -->
<!-- Hi, -->

**運算式**

```js
var greet = function(name){
	return 'Hi,' + name;
}('alincode');

console.log(greet);
```
<!-- Hi, alincode -->

### 經典範例

**範例一**

```js
(function ($){

})(jQuery)
```

**範例二**

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

// 'counter' is an object with properties, which in this case happen to be methods.

counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5
```

### 延伸閱讀

* [立即呼叫函式運算式 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E7%AB%8B%E5%8D%B3%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F)
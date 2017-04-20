# 立即函式

* IIFEs：immediately invoked function expressions，立即呼叫的函式表示式。
* 也算匿名函式
* 特色是會立刻執行
* 變數生命週期只存在於函數內，不用擔心會留下全域變數。

```js
(function () {
  var name = 'alincode';
  console.log('Hi,', name);
}());

// ReferenceError: name is not defined
console.log(name);
```

```js
var nickname = 'alincode';
(function(name){
	console.log('Hello ' + name);
}(nickname));
```

```js
var greet = function(name){
	console.log('Hello ' + name);
}('alincode');

console.log(greet);
```
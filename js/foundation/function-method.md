# 函式方法 - bind, call, apply

![](assets/function-method.png)

* 每個函式都有 call, apply, bind 方法
* call, apply：讓你設定 this，並可傳入參數。
* bind：創造函數的拷貝，讓你設定 this 關鍵字，並設定永遠不會變的預設參數。

### bind 方法

[Function.prototype.bind() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```js
var logPersonName = logName.bind(person);
logPersonName('en', 'es');
```

```js
function multiply(a, b){
	return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));
```

### call 方法

```js
logName.call(person, 'en', 'es');
```

### apply 方法

[Function.prototype.apply() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)


```js
logName.apply(person, ['en', 'es']);
```

```js
var array = [3, 4];

var add = function (a, b) {
  return a + b;
};

var sum = add.apply(null, array);
console.log(sum); // 7

```

```js
var statusObject = {
  status: 'OK'
}

var Que = function (status){
  this.status = status;
};

Que.prototype.getStatus = function() {
  return this.status;
}

var status = Quo.prototype.getStatus.apply(statusObject);
```










函式借用 (function borrowing)

```js
person.getFullName.apply(person2);
```

function currying：建立一個函數的拷貝，並設定預設的參數。
使用情境：在數學運算之下很有用，如果你有多個資源庫要做很多數學運算，你可以有基本的函式，然後根據它放入預設參數。
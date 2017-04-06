# call, apply, bind 函式

* 每個函式都有 call, apply, bind 方法
* bind：創造函數的拷貝，讓你設定 this 關鍵字，並設定永遠不會變的預設參數。
* call, apply：讓你設定 this，並可傳入參數。

```js
var logPersonName = logName.bind(person);
logPersonName('en', 'es');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);
```


函式借用 (function borrowing)

```js
person.getFullName.apply(person2);
```

function currying：建立一個函數的拷貝，並設定預設的參數。
使用情境：在數學運算之下很有用，如果你有多個資源庫要做很多數學運算，你可以有基本的函式，然後根據它放入預設參數。

```js
function multiply(a, b){
	return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));
```


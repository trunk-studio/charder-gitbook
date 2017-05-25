# 函示 (Function)

* 是 first class function
* 是一種特殊型態的物件，可以被呼叫 (invocable)。
* 每個函式都有兩個參數 this 和 argument

**First Class Functions 的特性**

* 物件可以被傳遞，函式只是物件的一種，所以函式也可以被傳遞。
* 可以將 function 儲存成變數
* 可以將 function 當成參數代入另一個 function 中
* 可以在一個 function 中回傳另一個 function
* function 跟物件一樣有屬性（property）

```js
function greet() {
	console.log('哈囉');
}

// 函式可以有屬性
greet.language = '中文';
console.log(greet);
console.log(greet.language);
```

**參數陣列 (arguments)**

```js
function printMyName(firstname, lastname, language){
	console.log(firstname);		// arguments[0]
	console.log(lastname);		// arguments[1]
	console.log(language);		// arguments[2]
	console.log('==============');
	console.log(arguments);
	// console.log(this);
}

printMyName();
printMyName('ailin');
printMyName('ailin', 'liou');
printMyName('ailin', 'liou', 'en');
```

**匿名函示(anonymous function)**

匿名函示指本身沒有直接宣告或命名過

```js
// 匿名函數運算式（anonymous function expressions） 
var sayHi = function(){
  console.log('hi');
}
```

<!-- 宣告了一個匿名函數之後，再把這個函數指派給一個變數。 -->

**具名函示**

```js
// 具名函數運算式（named function expressions)
var sayHi = function hi(){
  console.log('hi');
}
```

```js
function hi(){
  console.log('hi');
}
```

### 回傳值

**沒有回傳值的函式**

```js
function printFullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}

printFullName('alin', 'liou');
```

**有回傳值的函式**

```js
function getFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

console.log(getFullName('alin', 'liou'));
```

### 延伸閱讀

* [匿名函式 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)
* [Defining JavaScript Functions | CodeKraft](https://abdulapopoola.com/2014/04/03/defining-javascript-functions/)
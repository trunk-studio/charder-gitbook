# 函示 (Function)

* 具有 lexical scooping 的一級函式 (first class) 物件。
* 是一種特殊型態的物件，可以被呼叫 (invocable)。
* 函式也是物件的一種，所以函式可以有**屬性**跟**方法**。
* 每個函式都有 arguments

```js
function greet() {
	console.log(‘哈囉’);
}
greet.language = ‘中文’;
console.log(greet);
console.log(greet.language);
```

**參數 (arguments)**

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

## 建立函數的方式

```js
function declaration () {};
var funcExpression = function () {};
var namedFuncExpression = function named() {};
var fnConstructor = new Function ();
```

### 函數陳述句 (function statement) / 靜態函示 / 函式宣告 (function declaration)

* 在 Create 階段時，被放入記憶體裡。
* 必須有一個識別名稱（identifier）
* 只會在載入的時候解析一次，之後每一次呼叫這個函示時，所使用的都是其解析後的結果。
<!--* 具名函數運算式對於在除錯時會非常有用 -->

**使用情境**

* 會需要呼叫多次的情況下使用

### 函數運算式 / 函數表示式（function expressions）

* 在 Execute 階段時，被放入記憶體裡。

```js
var sayHi = function(){
  console.log('hi');
}

sayHi();
```

### 動態函式 (Function Constructor)

* 每次呼叫它們時，都要**動態**地重新建構該函式。
* 使用情境：只有在程式運行時，才能確定還是必須滿足哪種情況時使用。

```js
var add = new Function('a','b', 'return a + b');
add(1,2);
```

## 回傳值

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
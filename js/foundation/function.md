# 函示 (Function)

* 具有 lexical scooping 的一級函式 (first class) 物件。
* 是一種特殊型態的物件，可以被呼叫 (invocable)。
* 函式也是物件的一種，所以函式可以有**屬性**跟**方法**。

```js
function greet() {
	console.log(‘哈囉’);
}
greet.language = ‘中文’;
console.log(greet);
console.log(greet.language);
```

**參數 (arguments / paremeters)**

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

* 匿名函示指本身沒有直接宣告或命名過

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

## 建立函數的方式

```js
function declaration () {};
var funcExpression = function () {};
var namedFuncExpression = function named() {};
var fnConstructor = new Function ();
```

### 靜態函示 / 函式宣告 (function declaration)

* 必須有一個識別名稱（identifier）
* 只會在載入的時候解析一次，之後每一次呼叫這個函示時，所使用的都是其解析後的結果。
* 具名函數運算式對於在除錯時會非常有用

**使用情境**

* 整個程式的區域範圍都可以使用

```js
sayHi();  // 會發生什麼事？

function sayHi(){
  console.log('hi');
}

sayHi();
```

<!--
不論函數本身在哪裡，都會被提升到最頂端。
output:
hi
hi
-->

### 函數運算式（function expressions）

```js
sayHi();

var sayHi = function(){
  console.log('hi');
}

sayHi();
```

<!--
// TypeError: sayHi is not a function
-->

**如何分辨是函數宣告，還是函數運算式？**

* 函數宣告必須有一個識別名稱（identifier），所以說只要函數沒有識別名稱，那麼它就是一個函數運算式。

### 動態函式 (Function Constructor)

* 每次呼叫它們時，都要**動態**地重新建構該函式。
* 使用情境：只有在程式運行時，才能確定還是必須滿足哪種情況時使用。

```js
var add = new Function('a','b', 'return a + b');
add(1,2);
```

### 回傳值

```js
// 沒有回傳值的函式
function printFullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}

// 有回傳值的函式
function getFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

// 呼叫函式
printFullName('alin', 'liou');
console.log(getFullName('alin', 'liou'));
```

<!--
output:
ailin liou
ailin undefined
-->

### 延伸閱讀

* [匿名函式 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)
* [Defining JavaScript Functions | CodeKraft](https://abdulapopoola.com/2014/04/03/defining-javascript-functions/)
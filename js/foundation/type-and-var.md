# 基本型別與變數

## 基本型態

* javascript 是在給值時才決定型態

```js
var nickname = 'alincode';
var nickname = "alincode";
var message = "I've a pen. I've a apple.";
var message = 'I"ve a pen. I"ve a apple.';
var message = 'I\'ve a pen. I\'ve a apple.';
```

**JavaScript 有以下幾種基本型態：**

* Boolean
* Number
* String
* null
* undefined
 
### 布林值 (Boolean)

* true
* false

```js
var a = true;
var b = false;
```

### 數字 (Number)
    
數字型別，可以分為整數，浮點數兩種，

```js
var a = 123,
var b = 123.456;
```

### 字串 (String)

```js
var nickname = 'alincode';
var nickname = "alincode";
```

<!--
盡量使用雙引號來表達字串，因為在 node 裡不會把單引號框住的文字當作字串解讀
-->

## 轉換表

### 轉換成布林

輸入       | 結果
----------|----------
undefined | false
null      | false
true      | true
false     | false
0         | false
NaN       | false
1         | true
"hi"      | true
""        | false
object    | true

### 轉換成數字

輸入       | 結果
----------|----------
undefined | NaN
null      | 0
true      | 1
false     | 0
number    | 原來的值
string    | 原來的值
object    | 表示此物件預設的代表數字

### 延伸閱讀

* [JavaScript 語言核心（3）你的變數 var 了嗎？](http://www.codedata.com.tw/javascript/essential-javascript-variable/)

<!--
## 轉型

如果今天需要將字串，轉換成 Number 的時候，可以使用 parseInt, parseFloat 的方法來進行轉換，

```js
var a = '11';
console.log(typeof parseInt(a, 10)); // number
```
    
要注意的是，記得 parseInt 後面要加上進位符號，以免造成遺憾，在這邊使用的是 10 進位。
-->
# 強制轉型 (coercion)

### 轉換成布林

輸入       | 結果      | 輸入     | 結果
----------|----------|----------|----------
1         | true     | 0        | false
object    | true     | undefined| false
"hi"      | true     | NaN      | false
          |          | ""       | false     
          |          | null     | false

### 轉換成數字

輸入       | 結果      | 輸入     | 結果
----------|----------|----------|----------
undefined | NaN      | number   | 原來的值
null      | 0        | string   | 原來的值
true      | 1        | object   | 表示此物件預設的代表數字
false     | 0

<!--
**String 轉成 Number**

如果需要將字串，轉換成 Number 的時候，可以使用 parseInt 或 parseFloat 的方法來進行轉換。

```js
var a = '11';
console.log(typeof parseInt(a, 10)); // number
console.log(parseInt(a, 10));        // 11
console.log(parseInt(a, 8));         // 9
```

記得 parseInt 後面要加上進位符號
-->

### 範例

**範例一**

```js
console.log(false < 1); // 答案是？
```

**範例二**

```js
// not good, why?
var b = null;
if(b == null || b == undefined || b == '') {
  console.log('flow 1');
} else{
  console.log('flow 2');
}
```

**範例三**

```js
// good job
var b = null;
if(b) {
  console.log('flow 2');
} else{
  console.log('flow 1');
}
```

**範例四**

```js
var a = {};
if(a) {
  console.log('flow 1');
} else{
  console.log('flow 2');
}
```

### 延伸閱讀

* [CodeData - JavaScript 語言核心（4）弱型別的代價 - WAT！](http://www.codedata.com.tw/javascript/essential-javascript-4-weak-type-wat/)
* [Operator precedence - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
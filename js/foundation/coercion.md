# 強制轉型 (coercion)

如果需要將字串，轉換成 Number 的時候，可以使用 parseInt，parseFloat 的方法來進行轉換。

```js
var a = '11';
console.log(typeof parseInt(a, 10)); // number
console.log(parseInt(a, 10));        // 11
console.log(parseInt(a, 8));         // 9
```

<!--
要注意的是，記得 parseInt 後面要加上進位符號，以免造成遺憾，在這邊使用的是 10 進位。
-->

**轉換成布林**

輸入       | 結果      | 輸入     | 結果
----------|----------|----------|----------
1         | true     | 0        | false
object    | true     | undefined| false
"hi"      | true     | NaN      | false
          |          | ""       | false     
          |          | null     | false

**轉換成數字**

輸入       | 結果      | 輸入     | 結果
----------|----------|----------|----------
undefined | NaN      | number   | 原來的值
null      | 0        | string   | 原來的值
true      | 1        | object   | 表示此物件預設的代表數字
false     | 0

### 範例

```js
console.log(3 < 2 < 1);	// ?
console.log(false < 1);
console.log(0 < 1);                                        
```

### 延伸閱讀

* [CodeData - JavaScript 語言核心（4）弱型別的代價 - WAT！](http://www.codedata.com.tw/javascript/essential-javascript-4-weak-type-wat/)
* [Operator precedence - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

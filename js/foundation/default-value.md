# 預設值 (default value)

* &&：如果第一個運算元的結果為 `false`，回傳第一個運算元的值，否則回傳第二個運算元得值。
* ||：如果第一個運算元的結果為 `true` ，回傳第一個運算元的值，否則回傳第二個運算元得值。

```js
function greet(name) {
	name = name || 'alincode';
	console.log('Hi, ' + name);
}

greet();
greet('Leo');
```

```js
var a = 0;
console.log(a || a === 0);
```
<!-- true -->

### 延伸閱讀

* [運算子優先等級 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
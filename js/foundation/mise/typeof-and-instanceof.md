# typeof 和 instanceof

typeof 運算子會傳回一個字串值, 指出未經運算 (unevaluated) 的運算元所代表的型別。

```js
var a = 3;
console.log(typeof a);
```

```js
function Person(name) {
	this.name = name;
}

var alin = new Person(‘alincode’)
console.log(typeof e);	// object
console.log(e instanceof Person):	// true
```

### 延伸閱讀

* [typeof - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof)


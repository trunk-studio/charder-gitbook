# 陣列 (Array)

陣列也是物件

```js
var arr = [
	2,
	3.14,
	false,
	’alincode’,
	{
		email: ‘alincode@gmail.com’
	},
	function(name){
		console.log('hello, ', name);
	}
];

arr[5](arr[3]);
```

### Array 和 for in

```js
var arr = ['Alin', 'Andy', 'Leo'];

for (var prop in arr){
	console.log(prop + ': ' + arr[prop]);
}
```

**輸出結果**

```
0: Alin
1: Andy
2: Leo
```

### Sort

<!--它並沒有先檢查型別在排序，而是把它當作字串排序。-->

```js
var numbers = [4, 8, 15, 16, 34, 43];
console.log(numbers.sort());	// ?
```

### forEach

* value：陣列元素的值
* index：陣列元素的數值索引

```js
var numbers = [65, 44, 12, 4];
numbers.forEach(function(value, index, arr){
	console.log(index + ': ' + value);
})
```

[Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
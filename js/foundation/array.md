# 陣列 (Array)

陣列也是物件

```js
var arr = [
	1,
	false,
	{
		name: 'alincode'
	},
	function(name){
		console.log('hello,', name);
	},
	'hi'
];

console.log(arr[3](arr[2].name));
```
<!-- hello, alincode -->

```js
var people = [{
    firstname: 'ailin',
    lastname: 'liou'

  },
  {
    firstname: 'Jane',
    lastname: 'Doe'
  }
]

console.log(people);
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
var arr = [4, 8, 15, 16, 34, 43];
console.log(numbers.sort());	// ?
```

```js
// lodash
var arr = [8, 4, 16, 15, 43, 34];
console.log(_.sortBy(arr, [function(o) { return o; }]));
console.log(_.sortBy(arr, [function(o) { return -o; }]));
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
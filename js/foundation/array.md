# 陣列 (Array)

### 範例一

```js
var arr = [1, 2, 3];
```

### 範例二

```js
var people = [{
    firstname: 'ailin',
    lastname: 'liou'

  },{
    firstname: 'Jane',
    lastname: 'Doe'
  }
]

console.log(people);
```

### 範例三

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

### 範例四

陣列也是物件

```js
var arr = [1, 2, 3];
console.log(typeof arr);
```
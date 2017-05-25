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

  },{
    firstname: 'Jane',
    lastname: 'Doe'
  }
]

console.log(people);
```
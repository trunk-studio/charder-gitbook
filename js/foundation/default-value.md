# 預設值 (default value)

```js
function greet(name) {
	name = name || 'alincode';
	console.log('Hi, ' + name);
}

greet();
greet('Leo');
```

<!--
```js
var a = 0;
console.log(a || a === 0);	// true
```
-->
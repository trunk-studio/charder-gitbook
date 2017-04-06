# 預設值 (default value)

```js
function greet(name) {
	name = name || 'alincode';
	console.log('Hi, ' + name);
}

greet();
greet('Leo');
```
# 函數陳述句 vs 函數表示式

* 函數陳述句 (function statement)：在 Create 階段被放在記憶體裡。
* 函數表示式 ( function expression)：在 Execute 階段被放在記憶體裡。

```js
// 函數陳述句
function greet1(name){
	console.log('Hello ' + name);
}
greet1('alincode');

// 函數表示式
var greet2 = function(name){
	console.log('Hello ' + name);
}
greet2('alincode');
```


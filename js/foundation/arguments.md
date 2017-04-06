# 參數 (arguments / paremeters)

```js
function printMyName(firstname, lastname, language){
	console.log(firstname);		// arguments[0]
	console.log(lastname);		// arguments[1]
	console.log(language);		// arguments[2]
	console.log('==============');
	console.log(arguments);
	// console.log(this);
}

printMyName();
printMyName('ailin');
printMyName('ailin', 'liou');
printMyName('ailin', 'liou', 'en');
```


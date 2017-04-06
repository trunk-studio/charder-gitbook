# 函數建構子 (function constructors)

* 一個正常的函數**用來建立物件**，當你在呼叫函數前面放了 new 的關鍵字，在執行環境的 Create 階段被產生的 this 變數，會指向新的空物件。當函數結束執行時，該物件會被函數自動回傳。
* 用來建立物件
* new 運算子可以產生新的物件
* 函數建構子是被用來增加新物件的屬性和方法

```js
function Person({
	console.log(this);
	this.firstname = 'ailin';
	this.lastname = 'liou';
	console.log('This function is invoked.');
}

var john = new Person();
console.log(john);
```

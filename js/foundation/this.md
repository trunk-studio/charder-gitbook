# this


```js
function a(){
	console.log(this);
  this.myValue = 'hello';
}

var b = function(){
	console.log(this);
}

a();
b();
console.log(myValue);
```


```js
var c = {
	name: 'The c object',
	log: function(){
		this.name = 'Updated c object';
		console.log(this);

		var setname = function(newname){
			// Global object
			this.name = newname;
		}
		setname('Updated again! The c object');
		// Updated c object
		console.log(this);	
	}
}

c.log();
```


```js
var c = {
	name: 'The c object',
	log: function(){
		var self = this;
		// var that = this;
		self.name = 'Updated c object';
		console.log(this);

		var setname = function(newname){
			// 這樣可以避免誤丟到 global object
			self.name = newname;
		}
		setname('Updated again! The c object');
		// Updated again! The c object
		console.log(self);	
	}
}

c.log();
```

### 延伸閱讀

* [博客來-你所不知道的 JS：範疇與Closures，this與物件原型](http://www.books.com.tw/products/0010714615)

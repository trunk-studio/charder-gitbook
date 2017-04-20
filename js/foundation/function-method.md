# 函式方法 - bind, call, apply

![](assets/function-method.png)

* 指定 this 指向的位置
* 每個函式都有 call, apply, bind 方法
* bind：創造函數的拷貝，讓你設定 this 關鍵字，並設定永遠不會變的預設參數。
* call, apply：讓你設定 this，並可傳入參數。

### bind 方法

**範例一**

```js
var person = {
  name: 'alincode'
};

function greet(greeting, name){
  console.log(greeting + ', ' + name + '.\nI am ' + this.name);
}

var message = greet.bind(person);
message('hi', 'Eason');
```

**範例二**

```js
var person = {
  name: 'alincode'
};

function greet(greeting, name){
  console.log(greeting + ', ' + name + '.\nI am ' + this.name);
}

var message = greet.bind(person, 'hi');
message('Eason');
message('Andy');
message('Daisy');
```

### call 方法

**範例一**

```js
var person = {
  name: 'alincode'
};

function greet(greeting, name){
  console.log(greeting + ', ' + name + '.\nI am ' + this.name);
}
greet.call(person, 'hi', 'Eason');
```

### apply 方法

**範例一**

```js
var person = {
  name: 'alincode'
};

function greet(greeting, name){
  console.log(greeting + ', ' + name + '.\nI am ' + this.name);
}
greet.apply(person, ['hi', 'Eason']);
```

**範例二**

```js
var array = [3, 4];

var add = function (a, b) {
  return a + b;
};

var sum = add.apply(null, array);
console.log(sum); // 7

```

**範例三**

```js
var statusObject = {
  status: 'OK'
}

var Que = function (status){
  this.status = status;
};

Que.prototype.getStatus = function() {
  return this.status;
}

var status = Quo.prototype.getStatus.apply(statusObject);
```

### 實際應用範例

**function currying**

* 建立一個函數的拷貝，並設定預設的參數。
* 使用情境：在數學運算之下很有用，如果你有多個資源庫要做很多數學運算，你可以有基本的函式，然後根據它放入預設參數。

```js
function multiply(a, b){
	return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(1));
console.log(multipleByTwo(2));
console.log(multipleByTwo(3));
```
<!-- 2, 4, 6 -->

**function borrowing (函式借用)**

```js
var person = {
  firstname: 'default',
  lastname: 'default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

var alin = {
  firstname: 'ailin',
  lastname: 'liou'
}

person.getFullName.apply(alin);
```
<!-- ailin liou -->

### 延伸閱讀

* [Function.prototype.bind() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [Function.prototype.call() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [Function.prototype.apply() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
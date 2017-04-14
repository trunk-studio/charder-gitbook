# 呼叫模式 (invocation pattern)

每個函式都有兩個參數
- this
- argument

### 方法呼叫模式 (method invocation pattern)

```js
var myObject = {
  value: 0,
  increment: function (inc){
    this.value += inc;
  }
}

myObject.increment(1);
console.log(myObject.value);
```

### 函式呼叫模式 (function invocation pattern)

```js
var value = 0;

function increment(inc){
  value += inc;
}

increment(1)
console.log(value)
```

```js
var myObject = {};
myObject.double = function() {
  var that = this;

  var helper = function (){
    that.value = add(that.value, that.value);
    helper();
  }
}

myObject.double();
console.log(myObject.getValue());
```

### 建構式呼叫模式 (constructor invocation pattern)

* 如果呼叫建構式時，為附上字首詞 new，會產生非預期的 bug，所以名稱格式會命名為第一個字母大寫。
* 這種風格並不建議

```js
var Que = function (status){
  this.status = status;
};

Que.prototype.getStatus = function() {
  return this.status;
}

// 建構式
var myQuo = new Quo('confused');
console.log(myQuo.getStatus());
```

### apply 呼叫模式 (apply invocation pattern)

```js
var array = [3, 4];

var add = function (a, b) {
  return a + b;
};

var sum = add.apply(null, array);
console.log(sum); // 7

```

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
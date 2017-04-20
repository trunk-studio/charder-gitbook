# 呼叫模式 (invocation pattern)

* method invocation pattern
* function invocation pattern
* constructor invocation pattern

**方法呼叫模式 (method invocation pattern)**

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

**函式呼叫模式 (function invocation pattern)**

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

  // look here...
  var helper = function (){
    that.value = add(that.value, that.value);
    helper();
  }
}

myObject.double();
console.log(myObject.getValue());
```

**建構式呼叫模式 (constructor invocation pattern)**

不建議使用

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

呼叫建構式時，需要先用 new 來宣告才能呼叫，否則會出現 `not defined`。

```js
// 錯誤示範
var myQuo = Quo('confused');
console.log(myQuo.getStatus());
```
<!-- Quo is not defined -->

為了避免這樣的情況，所以在命名時會特別將第一個字母大寫。
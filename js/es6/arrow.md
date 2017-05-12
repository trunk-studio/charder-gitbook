# 箭頭函式 (arrow function)

* 更短的函式寫法
* this 的綁定

### 使用情境

* 短函式
* 確定不會用到 this
* 不會破壞程度閱讀性

### 單一個參數

**ES5**

```js
function square(x) {
  return x * x;
}
```

**ES6演化**

```js
const square = (x) => {
  return x * x;
}
```

```js
const square = (x) => x * x;
```

```js
const square = x => x * x;
```

### 兩個以上的參數

**ES5**

```js
const add = function(a, b){
  return a + b;
}
```

**ES6演化**

```js
const add = (a, b) => {
  return a + b;
}
```

```js
const add = (a, b) => a + b;
```

### 綁定 this

**ES5**

```js
var myObject = {
  name: 'alincode',
  log: function() {
    var self = this;
    var setName = function(newname) {
      self.name = newname;
    }
    setName('daisy');
    console.log(self);
  }
}

myObject.log();
```

**ES6**

```js
var myObject = {
  name: 'alincode',
  log: function() {
    var setName = (newname) => {
      this.name = newname;
    }
    setName('daisy');
  }
}
myObject.log();
```

### 練習題

換成 ES6 的寫法

```js
// 圓面積
const area = function(r) {
  return 3.14 * r * r;
}
```

### 錯誤示範

```js
const massFunc = (r) => {
  let a = 1;
  // do something...
  // do something...
  // do something...
  // do something...
  // do something...
  // do something...
  // do something...
  // do something...
  // do something...
  return a;
}
```

```js
var myObject = {
  name: 'alincode',
  log: () => {
    var setName = (newname) => {
      this.name = newname;
    }
    setName('daisy');
  }
}
myObject.log();
```
# 變數 (var)

* global scope
* function scope

```js
var nickname = 'alincode';
var nickname = "alincode";
```
<!-- 只有包在 function 裡面的 var 才算是區域變數 -->

### 範例

```js
var message = 'hi';

{
  // 問題： 這是區域變數，還是全域變數？
  var message = 'bye';
  console.log(message);
}

console.log(message);
```

<!-- output: bye -->

```js
var message = 'hi';

function greet() {
  var message = 'bye';
  return message;
}

console.log(greet());
```

<!-- output: bye -->

```js
var fs = [];

for (var i = 0; i < 10; i++){
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})
```
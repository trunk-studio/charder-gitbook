# 提升 (hoisting)

```js
// 這是比較好的做法，不應該依賴 hoisting。
var a = 'Hello World';

function b() {
  console.log('呼叫 b');
}

console.log(a);
b();
```
<!-- Hello World, 呼叫 b -->

```js
console.log(a);
b();

var a = 'Hello World';

function b() {
  console.log('呼叫 b');
}
```
<!-- undefined, 呼叫 b -->

```js
console.log(a);
console.log(b);
b();

var a = 'Hello World';

var b = function() {
  console.log('呼叫 b');
}
```
<!-- undefined, undefined, b is not a function -->
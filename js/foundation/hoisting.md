# 提升 (hoisting)

**執行環境 (execution content)**

<!-- lexical environment 詞彙環境 -->

* Creation Phase
  * 程式會知道哪裡有用到變數跟函式，並替它們在記憶體留一個位子。
  * 函式在宣告的時候，就被放入了記憶體。
  * 所有變數在建立階段被預設成 undefined
* Execute Phase

```js
// 這是比較好的做法，不應該依賴 hoisting。
var a = 'Hello World';

function b() {
  console.log('呼叫 b');
}

console.log(a);
b();
```
<!-- Hellow World, 呼叫 b -->

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
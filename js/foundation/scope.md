# 範圍 (scope)

* global scope
* function scope

```
// 顯式宣告變數
var value = 1;
// 未顯式宣告變數
value = 1;
```

**使用情境**

* 強烈建議使用 `var` 防止同名的區域變數和全域變數之間的衝突。

**重點提醒**

* 盡量減少使用全域變數，因為如果你使用很多 Javascript 函式庫，免不了使用到同樣名字的全域變數，將導致不可預期的副作用。

### 範例

**範例一**

```js
var message = 'hi';

function greet() {
  var message = 'bye';
  console.log(message);
}

console.log(message);
greet();
console.log(message);
```
<!-- hi, bye, hi -->

**範例二**

```js
message = 'hi';

function greet() {
  message = 'bye';
  console.log(message);
}

console.log(message);
greet();
console.log(message);
```
<!-- hi, bye, bye -->

**範例三**

```js
var message = 'hi';

{
  // 問題： 這是區域變數，還是全域變數？
  var message = 'bye';
  console.log(message);
}

console.log(message);
```
<!-- bye, bye -->

**範例四**

```js
console.log(message);
var message = 'hi';
console.log(message);
```

<!-- undefined, hi -->

<!-- 
只有包在 function 裡面，並且有用 var 來宣告的才算是區域變數。
-->

### 延伸閱讀

* [JavaScript 語言核心（3）你的變數 var 了嗎？](http://www.codedata.com.tw/javascript/essential-javascript-variable/)

# 變數作用域 (scope)

* global scope
* function scope

```
// 顯式宣告變數
var value = 1;
```

```
// 未顯式宣告變數
value = 1;
```

**使用情境**

* 強烈建議使用 `var` 防止同名的區域變數和全域變數之間的衝突。

**重點提醒**

* 盡量減少使用全域變數，因為如果你使用很多 Javascript 函式庫，免不了使用到同樣名字的全域變數，將導致不可預期的副作用。
<!--* 變數作用範圍是依照程式定義時的順序決定，而不是執行時的順序決定。-->

<!--* 建立 vs. 實例化-->

### 範例

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

<!-- 
output:
hi
bye
hi
-->

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

<!-- 
output:
hi
bye
bye
-->

```js
var message = 'hi';

{
  // 問題： 這是區域變數，還是全域變數？
  var message = 'bye';
  console.log(message);
}

console.log(message);
```

<!-- 只有包在 function 裡面，並且有用 var 來宣告的才算是區域變數。 -->

<!-- 
output:
bye
bye
-->

### 延伸閱讀

* [CodeData - JavaScript 語言核心（13）在 Scope chain 查找變數](http://www.codedata.com.tw/javascript/essential-javascript-13-scope-chain/)
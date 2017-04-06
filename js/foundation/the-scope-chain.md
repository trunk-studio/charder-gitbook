# 範圍鏈 (scope chain)

* 執行順序會決定它如何被呼叫。
* 每個執行環境，都會有外部環境 (Reference to Outer Environment)。
* 當你需要某個執行環境內的程式碼的變數，如果它無法找到變數，它會到外部環境尋找變數。
* 整個搜尋範圍鏈到外部環境的過程，整條鏈子叫做範圍鏈。
  * 範圍：我能夠取得這個變數的地方。
  * 鏈：外部環境參照的連結

### 範例

**範例一**

```js
function b() {
  console.log(myValue);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();
```

<!-- 1 -->

**範例二**

```js
function a() {
  function b() {
    console.log(myVar);
  }
  var myVar = 2;
  b();
}

var myVar = 1;
a(); 
```

<!-- 
2

當 a 還沒被執行時，不可能執行 b，所以 b 的外部參照是 a。
-->

**範例三**

```js
function a() {
  function b() {
    console.log(myVar);
  }
  b();
}

var myVar = 1;
a();
```

<!-- 1 -->

### 延伸閱讀

* [CodeData - JavaScript 語言核心（13）在 Scope chain 查找變數](http://www.codedata.com.tw/javascript/essential-javascript-13-scope-chain/)
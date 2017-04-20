# 建立函數模式

### function statement / function declaration

* 函數陳述句 / 靜態函示 / 函式宣告
* 在 Create 階段時，被放入記憶體裡。
* 必須有一個識別名稱（identifier）
* 只會在載入的時候解析一次，之後每一次呼叫這個函示時，所使用的都是其解析後的結果。
<!--* 具名函數運算式對於在除錯時會非常有用 -->

```js
function declaration () {};
```

**使用情境**

* 會需要呼叫多次的情況下使用

### function expressions

* 函數運算式 / 函數表示式
* 在 Execute 階段時，被放入記憶體裡。

```js
var funcExpression = function () {};
var namedFuncExpression = function named() {};
```

### function constructor

* 動態函式
* 非常少用到
* 每次呼叫它們時，都要**動態**地重新建構該函式。
* 使用情境：只有在程式運行時，才能確定還是必須滿足哪種情況時使用。

```js
var fnConstructor = new Function ();

var add = new Function('a','b', 'return a + b');
add(1,2);
```
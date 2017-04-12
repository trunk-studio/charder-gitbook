# 基本型別 / 純值 (primitive types)

* 弱型別 / 動態型別 (dynamic typing)：不用先宣告是什麼型別，由程式在給值時才決定型別。
* 不是物件

**基本型態種類**

* Boolean
* Number
* String
* null
* undefined (not set)
* Symbol (ES6)
 
### 布林值 (Boolean)

* true
* false

```js
var a = true;
var b = false;
```

### 數字 (Number)

只有一種數值型別，64 位元的符點數 (double)。
    
```js
var a = 1;
var b = 1.0;
console.log(a == b); // ?
console.log(a === b); // ?
```

### 字串 (String)

```js
var nickname = 'alincode';
var nickname = "alincode";
var message = "I've a pen. I've a apple.";
var message = 'I"ve a pen. I"ve a apple.';
var message = 'I\'ve a pen. I\'ve a apple.';
```

沒有 character 型別，如果要表示字元，就讓字串裡面只有一個字元。

```
'A' === '\u0041'    // true
```

### null (空值)

* 變數在初始為 null，就會產生 `null`。

```js
var a = null;
console.log(a);
```

### undefined (未定義)

* javascript 是在給值時才決定型態，所以在沒給值的情況下，就會現 `undefined`。

```js
var value;
console.log(value);
```

```js
var a = {};
delete a;
console.log(a);
```

```js
function printFullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}

printFullName('alin');
```
<!--  alin undefined -->

還有另一種情況是 not define，不要把它跟 undefined 搞混。

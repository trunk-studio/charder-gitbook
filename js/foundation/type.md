# 基本型別 / 純值 (primitive types)

* 弱型別：javascript 是在給值時才決定型態
* 動態型別 (dynamic typing)：不用宣告是什麼型別，由程式在執行時的時候決定。
* 不是物件

```js
var nickname = 'alincode';
var nickname = "alincode";
var message = "I've a pen. I've a apple.";
var message = 'I"ve a pen. I"ve a apple.';
var message = 'I\'ve a pen. I\'ve a apple.';
```

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

* 只有一個數值型別，64 位元的符點數 (double)。
    
```js
var a = 123;
var b = 123.456;
```

```js
var a = 1;
var b = 1.0;
console.log(a == b); // ?
console.log(a === b); // ?
```

### 字串 (String)

沒有 character 型別，如果要表示字元，就讓字串裡面只有一個字元。

```js
var nickname = 'alincode';
var lastname = "liou";
'A' === '\u0041'    // true
nickname.length;    // 8
'alincode'.length;  // 8
```


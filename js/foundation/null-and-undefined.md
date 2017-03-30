# null vs. undefined

### null  (空值)

* 變數在初始為 null，就會產生 `null`。

```js
var a = null;
console.log(a);
```

### undefined (未定義)

* * javascript 是在給值時才決定型態，所以在沒給值的情況下就會現 `undefined`。

```js
var value;
console.log(value);
```

```js
function getFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

printFullName('alin');
```

### 比較

```js
console.log(null == undefined);
console.log(null === undefined);
```

<!--
output:
true = false && false，會先轉成 boolean 在比較。
false
-->

```js
console.log(typeof null);
console.log(typeof undefined);
```

<!--
output:
object
undefined
-->
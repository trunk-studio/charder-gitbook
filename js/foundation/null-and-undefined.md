# null vs. undefined

### null  (空值)

* 變數在初始為 null，就會產生 `null`。

```js
var a = null;
console.log(a);
```

### undefined (未定義)

* javascript 是在給值時才決定型態，所以在沒給值的情況下就會現 `undefined`。

```js
var value;
console.log(value);
```
<!-- undefined -->
<!-- 還有一種情況是 ReferenceError: value is not defined 跟 undefined 不同。-->

```js
function printFullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}

printFullName('alin');
```

<!--  alin undefined -->

### 比較

```js
console.log(null === undefined);
console.log(null == undefined);
```
<!-- false, true -->
<!-- 第二個會先轉成 boolean 在比較 -->

```js
console.log(typeof null);
console.log(typeof undefined);
```
<!-- object, undefined -->
# 比較 (comparison)

關係運算子：一個運算元與另一個運算元相比較。

**===**

```js
var x = 5;
console.log(x == 5); 
console.log(x == "5");
console.log(x === "5");
```
<!-- true, true, false -->

**隱式類型轉換**

```js
console.log(null == 0);	// false
console.log(null < 1);	// true
console.log("" == 0);	// true
console.log("" == false);	// true
console.log(0 == false);		// true
console.log(0 === false);	// false
console.log("1.0" <= 2.0);  // true
```

```js
console.log(null === undefined);  // false
console.log(null == undefined);   // true
```
<!-- 第二個會先轉成 boolean 在比較 -->

### 延伸閱讀

* [Equality comparisons and sameness - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)


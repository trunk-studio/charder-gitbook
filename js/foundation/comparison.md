# 比較 (comparison)

關係運算子：一個運算元與另一個運算元相比較。

**等於**

* ===：Strict equality
* ==：Loose equality

```js
var x = 5;
console.log(x == 5); 
console.log(x == "5");
console.log(x === "5");
```
<!-- true, true, false -->

**隱式類型轉換**

![](assets/loose-equality.png)

* null 跟 undefined 是兄弟檔，跟其他人都不合。
* Object 做 ToPrimitive
* Boolean 跟 String 做 ToNumber

```js
console.log(null === undefined);  // false
console.log(null == undefined);   // true

// null == null, null == undefined 是 true
console.log(null == 0);
// ToNumber(A) < B
console.log(null < 1);	// true

// ToNumber(A) === B
console.log("" == 0);
// ToNumber(A) === ToNumber(B)
console.log("" == false);

console.log(0 == false);	// true
console.log(0 === false);	// false

console.log("1.0" <= 2.0);  // true
```

### 延伸閱讀

* [Equality comparisons and sameness - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)


#  比較 (comparisons)

* 關係運算子：一個運算元與另一個運算元相比較。

```js
var x = 5;
console.log(x == 5);
console.log(x == "5");
console.log(x === "5");
```

<!--
output:
true
ture
false
-->

**隱式類型轉換**

```js
var sValue = "1.0";
console.log(sValue <= 2.0);
```

<!--
output: true
-->

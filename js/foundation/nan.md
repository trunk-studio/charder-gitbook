# 非數字 (NaN)

* 全名叫 Not a Number
* 常會發生在轉型的時候
* 此值會先強制轉換到數字值，接著會測定此值是否為 NaN。
* 零除以零的結果會是 NaN，但其他數字除以零則不是 NaN。

<!-- Number.isNaN(Number(value)); -->

輸入                  | 結果
---------------------|----------
isNaN(123)           | false
isNaN(5-2)           | false
isNaN(0)             | false
isNaN('123')         | false
isNaN('')            | false, 會轉換成 0
isNaN(' ')           | false, 會轉換成 0
isNaN(true)          | false, 會轉成 1
isNaN(false)         | false, 會轉成 0
isNaN(null)          | false, 會轉成 0
isNaN(undefined)     | true, undefined 會轉成 NaN
isNaN('NaN')         | true
isNaN(Nan)           | true
isNaN(0 / 0)         | true
isNaN('Hello')       | true, 解析失敗所以變成 NaN
isNaN('2005/12/12')  | true
isNaN(new Date())    | false
isNaN({})            | true

```js
var a = "test";
var b = parseInt(a) + 10;
console.log(b);
```
<!-- NaN -->

```js
var a = NaN;
var b = a + 10;
console.log(b);
```
<!-- NaN -->

### 延伸閱讀

* [MDN - isNan()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN#描述)
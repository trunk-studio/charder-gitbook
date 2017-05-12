# Array 方法

### forEach

**語法**

```js
array.forEach(function(currentValue, index, arr), thisValue)
```

```js
var numbers = [65, 44, 12, 4];
numbers.forEach(function(item) {
    console.log(item);
})
```
<!-- 沒有回傳值 -->

### map

```js
var numbers = [65, 44, 12, 4];
var answer = numbers.map(function(item) {
    return item;
    // return item + 1;
})
console.log(answer);
```

問答：forEach vs map？

### some

其中一個條件符合

**老方法**

```js
var a = [1, 2, 3, 4, 5];

var answer = function() {
  return a.indexOf(2) != -1
}
console.log(answer());
```
<!-- true -->

**你可以考慮改用**

```js
var ages = [3, 10, 18, 20];
var answer = ages.some(function(age) {
    return age >= 18;
});
console.log(answer);
```
<!-- true -->

### every

每個條件符合

```js
var ages = [32, 33, 16, 40];
var answer = ages.every(function(age) {
    return age >= 18;
});
console.log(answer);
```
<!-- false -->

### filter

```js
var ages = [32, 33, 16, 40];

ages.filter(function(age) {
    return age >= 18;
})
```
<!-- [32,33,40] -->

### reduce

**語法**

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

**範例**

```js
var numbers = [32, 33, 16, 40];
var answer = numbers.reduce(function(total, item) {
    return total + item;
});
console.log(answer);
```

### 練習題

* map.js
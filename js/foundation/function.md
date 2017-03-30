# 函示 (function)

**靜態函示**

* 只會在載入的時候解析一次，之後每一次呼叫這個函示時，所使用的都是其解析後的結果。

```js
// 沒有回傳值的函式
function printFullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}

// 有回傳值的函式
function getFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

// 呼叫函式
printFullName('alin', 'liou');
printFullName('alin'); // 猜猜看會發生什麼事？
console.log(getFullName('alin', 'liou'));
```

<!--
output:
ailin liou
ailin undefined
-->

<!-- 參數不需要指定資料型態 -->

**動態 / 匿名函示**

* 匿名函示指本身沒有直接宣告或命名過
* 每次呼叫它們時，都要動態地重新建構該函式。
* 使用情境：只有在程式運行時，才能確定還是必須滿足哪種情況時使用。

```js
var sayHi = new Function('nickname', 'console.log("Hi, " + nickname)');
sayHi('alincode');
```

**函數實字 / 函示運算式**

```js
var func = function(x, y){
  return x * y
}

console.log(func(3, 3))
```

<!--
### 常用內建

### 自訂 function

### closure
-->
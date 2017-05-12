# ES6 新的 API

### 字串 String

**repeat**

```js
'Wow '.repeat(3);
```

**startWith**

```js
const message = 'Hi, alincode';
message.startsWith('Hi');
```

**endWith**

```js
const message = 'Hi, alincode';
message.endsWith('alincode');
```

**includes**

```js
const message = 'Hi, alincode';
message.includes('alin');
```

<!--老方法是用 indexOf -->

### 數字 Number

```js
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(5-2) //true
Number.isInteger(0) //true
Number.isInteger(0.5) //false
Number.isInteger('123') //false
Number.isInteger(false) //false
Number.isInteger(Infinity) //false
Number.isInteger(-Infinity) //false
Number.isInteger(0 / 0) //false
```

## 陣列 (Array)

### find & findIndex

在一個陣列中搜尋某個值或元素，如果有多筆，只會回傳一筆。

```js
const ages = [3, 10, 18, 20];

if(a.indexOf(18) != -1){
  
}
```

**ES6**

```js
const ages = [3, 10, 18, 20];

ages.find(function(age) {
    return age == 18;
});

ages.find(function(age) {
    return age >= 18; 
});
```

<!-- 18 18 -->

練習題：find.js


<!--
Object.assign 
-->
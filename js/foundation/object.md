# 物件 (Object)

* 除了基本資料型別，其他都是物件。
* 物件是有特性的容器，特性具有 name 與 value。

<!--* Javascript 具有原型聯繫 (prototype linkage) 功能，允許物件繼承其他物件的特性。-->

**建構子**

```js
var person = new Object();
var firstNameProperty = 'firstname';

console.log(person[firstname]);
console.log(person.firstname);
```

**物件實字 (object literals)**

提供一種便利的宣告方式來用來建立新物件，以大括號圍起 name 和 value，可以是任何形式，例如參數、回傳值。

```js
var person = {
  firstName :'ailin',
  lastName : 'liou',
  walk: function () {},
  run: function () {}
};
```

```js
var person = {};
person.firstName = 'ailin';
person.lastName = 'liou';
person.run = function(){};
```

### 傳值 (by value) 和傳址 (by ref)

<!--
mutate: to change something
immutable: it can’t be changed.
-->

#### 簡單型別

```js
var a = 'alincode';
b = a;
b = 'eason';
console.log(a);
console.log(b);
```
<!-- alincode, eason -->

#### 物件型別

**範例一**

```js
var a = {
  name: 'alincode'
};

var b = a;
a.name = 'eason';
// b.name = 'eason';

console.log(a.name);
console.log(b.name);
```
<!-- eason, eason -->

**範例二**

```js
var a = {
  name: 'alincode'
};

var b = a;

function callMe(obj){
  obj.name = 'eason';
}

callMe(b);

console.log(a.name);
console.log(b.name);
```
<!-- eason, eason -->

**範例三**

```js
var a = {
  name: 'alincode'
};

var b = a;

b = {
  name: 'eason'
};

console.log(a.name);
console.log(b.name);
```
<!-- alincode, eason -->

### 錯誤示範

```js
var a = {
  name: 'alincode'
};

var b = a;

function callMe(obj){
  obj.name = 'eason';
  return obj;
}

b = callMe(b);

console.log(a.name);
console.log(b.name);
```
<!-- eason, eason -->

### 物件可以出現在任何地方

**出現在參數**

```js
function printMyName(person){
  console.log(person.firstName + ' ' + person.lastName);
}
printMyName({ firstName: 'ailin', lastName: 'liou'});
```

**出現在回傳值**

```js
function getPerson(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + ' ' + lastName
  };
}

console.log(getPerson())
```

### 延伸閱讀

* [JavaScript 物件導向介紹 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)


<!--
Javascript 包含 prototype linkage 功能，允許物件繼承其他物件的特性。若使用得宜，將可以減少物件初始化的時間，也減少記憶體的消耗。
-->
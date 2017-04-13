# 物件 (Object)

* 除了基本型別，其他都是物件。
* name / value pairs and object

```js
var person = new Object();
var firstNameProperty = 'firstname';

console.log(person[firstname]);
console.log(person.firstname);
```

### 物件實字 (object literals)

提供一種建立新物件值的便利宣告方式，以大括號圍起 name 和 value，可以出現在任何地方。

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

```js
var restaurant = {
  brand: 'BBQ',
  saySlogon: function(name){
    console.log('hi ' + name + ', welcome to ' + this.brand + ' restaurant.');
  }
}

restaurant.saySlogon('alincode');
```

### 延伸閱讀

* [JavaScript 物件導向介紹 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)


<!--
Javascript 包含 prototype linkage 功能，允許物件繼承其他物件的特性。若使用得宜，將可以減少物件初始化的時間，也減少記憶體的消耗。
-->
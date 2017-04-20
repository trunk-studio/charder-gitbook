# 原型繼承 (Prototype)

* 每個函式都有原型屬性 (prototype property)，從它是空物件就誕生了。
* 只有當你把函式當作函式運算子才會用到

```js
var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alin");
var person2 = new Person("Leo");

person1.sayHello();
person2.sayHello();
```

<!--
Hello, I'm Alin
Hello, I'm Leo
Person { firstName: 'Alin' }
-->


<!--classical inheritance vs prototypal inheritance-->

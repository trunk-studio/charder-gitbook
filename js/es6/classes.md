# 類別 (Class)

基於原型提供更乾淨的語法，新增了 super 解決 ES5 的問題。

### 定義

**ES5**

```js
var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};
```

**ES6**

```js
class Person {
  constructor(firstName) {
   	this.firstName = firstName; 
  }
  sayHello(){
   console.log("Hello, I'm " + this.firstName);
  }
}
```

```js
var person1 = new Person("Alin");
var person2 = new Person("Leo");

person1.sayHello();
person2.sayHello();
console.log(person1);
```

### 繼承

**ES5**

```js
var Car = function(){
   	this.cc = 1600; 
    this.doorCount = 4;
}

Car.prototype = Object.create(NiceCar.prototype);
Car.prototype.constructor = Car;

Car.prototype.go = function() {
  console.log('fast...');
};
```

**ES6**

```js
class NiceCar {
  constructor() {
   	this.cc = 2000; 
    this.doorCount = 2;
  }
  go(){
   console.log('super fast...');
  }
}

class Car extends NiceCar {
  constructor() {
    super();
   	this.cc = 1600; 
    this.doorCount = 4;
  }
  go(){
   console.log('fast...');
  }
}
```

```js
var myCar = new NiceCar();
var yourCar = new Car();
yourCar.go();
```

### static

```js
class Person {
  constructor(firstName) {
   	this.firstName = firstName; 
  }
  static sayHello(){
   console.log('Hello, everybody');
  }
}

Person.sayHello();
```

* 練習題：class.js

**注意**

* class 類別不會自動被 hoisted，所以一定要先宣告才 new。
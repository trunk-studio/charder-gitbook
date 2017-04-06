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
console.log(person1);
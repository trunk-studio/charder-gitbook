# Class

* 語法糖 (syntactic sugar)

```js
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet(){
		return 'Hi ' + firstname;
	}
}

class InformalPerson extends Person{
	constructor(firstname, lastname) {
		super(firstname, lastname);
	}

	greet() {
		return 'Hi, ' + firstname;
	}
}

var john = new Person('ailin', 'liou');
```

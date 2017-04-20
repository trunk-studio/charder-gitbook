# 原型繼承 (Prototype)

* javascript 是使用 prototypal inheritance
* 每個函式都有原型屬性 (prototype property)，從它是空物件就誕生了。
* 只有當你把函式當作函式運算子才會用到

原型鍊 (prototype chain)：在這個物件當中建立相同屬性的內容，在執行的時候它會先找物件中最上層的屬性。

### classical inheritance VS prototypal inheritance

* classical inheritance：在類別式語言中，物件是類別的實例 (instance)，類別能繼承其他類別。
* prototypal inheritance：javascript 的物件能直接繼承其他物件。

## 建立自訂物件

### 函數建構子 (function constructors)

* **不建議使用**
* 模仿 classic inheritance 所產生
* 使用 new 時，可將 this 指向新物件，但若忘記 new 的話，this 則會指向 globel，造成不可預期的結果。
* 函數建構子是被用來增加新物件的屬性和方法

<!--* 
一個正常的函數**用來建立物件**，當你在呼叫函數前面放了 new 的關鍵字，在執行環境的 Create 階段被產生的 this 變數，會指向新的空物件。當函數結束執行時，該物件會被函數自動回傳。
-->

```js
function Person(){
	this.firstname = 'Default';
	this.lastname = 'Default';
	// console.log('This function is invoked.');
}

Person.prototype.getFullName = function() {
  return this.firstname + " " + this.lastname;
};

var alin = new Person();
// var alin = Person();
alin.firstname = 'ailin';
alin.lastname = 'liou';
console.log(alin.getFullName());
```

![](assets/fake-classic-inheritance.png)

### Object.create

* prototypal inheritance
* ECMAScript5 才新增的語法

* [Object.create() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/create)


```js
var Person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + " " + this.lastname;
    }
}

/*
Person.getFullName2 = function() {
  return this.firstname + " " + this.lastname;
};
*/

var alin = Object.create(Person);
alin.firstname = 'ailin';
alin.lastname = 'liou';
console.log(alin.getFullName());
```

![](assets/prototypal-inheritance.png)

**傳遞第二參數**

`Object.create` 能傳遞第二參數，該參數是一個屬性列表，能夠初始化或者添加新對象的屬性，則更加豐富了創建的對象時的靈活性和擴展性。

[Object.defineProperty() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```js
var student = Object.create(Person, {
	name: {value:"xwz", writeable: false}
});
student.name = "nohupo";
student.eat();
```

**delete**

```js
var Person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + " " + this.lastname;
    }
}

var alin = Object.create(Person);
alin.firstname = 'ailin';
alin.lastname = 'liou';
delete alin.firstname;
console.log(alin.getFullName());
```

### 練習題

* 建立一個計算機的命名空間，有加減乘除，共四個函式。

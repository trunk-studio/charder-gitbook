# 原型繼承 (Prototype)

* prototypal inheritance
* 每個函式都有原型屬性 (prototype property)，從它是空物件就誕生了。
* 只有當你把函式當作函式運算子才會用到

原型鍊 (prototype chain)：在這個物件當中建立相同屬性的內容，在執行的時候它會先找物件中最上層的屬性。

<!--classical inheritance vs prototypal inheritance-->

## 建立自訂物件

### 函數建構子 (function constructors)

* 模仿 classic inheritance 所產生
* new 運算子可以產生新的物件
* 函數建構子是被用來增加新物件的屬性和方法

<!--* 一個正常的函數**用來建立物件**，當你在呼叫函數前面放了 new 的關鍵字，在執行環境的 Create 階段被產生的 this 變數，會指向新的空物件。當函數結束執行時，該物件會被函數自動回傳。-->

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

`Object.create` 能傳遞第二參數，該參數是一個屬性列表，能夠初始化或者添加新對象的屬性，則更加豐富了創建的對象時的靈活性和擴展性。

[Object.defineProperty() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```js
var student = Object.create(Person, {
	name: {value:"xwz", writeable: false}
});
student.name = "nohupo";
student.eat();
```




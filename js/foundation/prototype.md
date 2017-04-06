# 原型繼承 (Prototype)

* 每個函數都有原型屬性 (prototype property)，從它是空物件就誕生了。
* 只有當你把函數當作函數運算子才會用到

```js
Person.prototype.getFullName = function(){
	return this.firstname + ' ' + this.lastname;
}
```

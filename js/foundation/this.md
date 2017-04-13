# this

每當被呼叫新的執行環境，就會被創造

### 對類別語言而言 this 是什麼？

* this
* super

```java
public class CashCard extends Card {

	private String number;
	private int balance;
	private int bonus;

	public CashCard(String number, int balance, int bonus) {
		this.number = number;
		this.balance = balance;
		this.bonus = bonus;
	}

	public static void main(String[] args) {
		CashCard cashcard = new CashCard();
	}
}
```

<!-- 在 class 語言 this 往往指向 instance-->


### 當不清楚 this 指向哪裡，你將會遇到什麼問題？

* 無意間宣告了全域變數
* 發生偽命名空間衝突

### 範例

**範例一**

```js
function a() {
  console.log(this);
  this.myValue = 'hello';
}

var b = function() {
  console.log(this);
}

a();
b();
console.log(myValue);
```
<!-- windown, windown, hello -->
<!-- 兩個 this 都指向 global -->

**範例二**

<!--當函式連結到物件方法時，this 關鍵字就會指向那個連結到的物件。-->

```js
var myObject = {
  name: 'alincode',
  log: function() {
    this.name = 'daisy';
    console.log(this);
  }
}

myObject.log();	// 物件方法
```

<!-- daisy 發 dayz -->

**範例三**

物件方法裡面宣告一個函式

```js
var myObject = {
  name: 'alincode',
  log: function() {
    var setName = function(newname) {
      this.name = newname;	// 這裡的 this 代表的是？
    }
    setName('daisy');
    console.log(this);
  }
}

myObject.log();
```

<!-- setName 函式並沒有連結到物件方法，所以這裡的 this 是指向 globel -->

**範例四**

解決範例三的 pattern

```js
var myObject = {
  name: 'alincode',
  log: function() {
    var self = this;
    var setName = function(newname) {
      self.name = newname;
    }
    setName('daisy');
    console.log(self);
  }
}

myObject.log();
```

### 延伸閱讀

* [博客來-你所不知道的 JS：scope、closure，this 與 prototype](http://www.books.com.tw/products/0010714615)

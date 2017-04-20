# 執行環境 (execution content)

* Creation Phase
  * 程式會知道哪裡有用到變數跟函式，並替它們在記憶體留一個位子。
  * 函式在宣告的時候，就被放入了記憶體。
  * 所有變數在建立階段被預設成 undefined
  * Creation Phase 的時候，包含 Variable Environment, this 和 Outer Environment 都會被建立，而 this 有些情況指稱的是 global environment、有些時候則是指稱到某個物件 Object。
* Execute Phase

### Javascript 對於 Global 的定義

* Not inside the function 就是 Global

### 全域執行環境

* Global Object
  * 可以被執行在任何地方
* this 變數

<!-- 在瀏覽器環境 windows = global -->

<!--
alin 住在 n 號房

var room307 = {
  customer: 'alin'
};

// undefined
var room306;
console.log(room306);

// not defined
console.log(room1001);
-->
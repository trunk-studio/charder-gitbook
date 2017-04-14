# 範圍 (scope)

**顯式宣告變數**

```js
var value = 1;
```
**未顯式宣告變數**

```js
value = 1;
```

**使用情境**

* 強烈建議使用 `var` 防止同名的區域變數和全域變數之間的衝突。

**重點提醒**

* 盡量減少使用全域變數，因為如果你使用很多 Javascript 函式庫，免不了使用到同樣名字的全域變數，將導致不可預期的副作用。

### 對類別語言而言 scope 是什麼？

* global scope
* block scope

```java
public class Main {
    int c = 3;
    public void demo(){
        int a = 0;
        if(true){
            int b = 1;
        }

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
```

### 對 Javascript 而言 scope 是什麼？

* global scope
* function scope

### 範例

**範例一**

```js
var message = 'hi';

if(true){
  var message = 'bye';
  console.log(message);
}

console.log(message);
```
<!-- bye, bye -->

**範例二**

```js
var message = 'hi';

function greet() {
  var message = 'bye';
  console.log(message);
}

console.log(message);
greet();
console.log(message);
```
<!-- hi, bye, hi -->

**範例三**

```js
message = 'hi';

function greet() {
  message = 'bye';
  console.log(message);
}

console.log(message);
greet();
console.log(message);
```
<!-- hi, bye, bye -->


### 延伸閱讀

* [JavaScript 語言核心（3）你的變數 var 了嗎？](http://www.codedata.com.tw/javascript/essential-javascript-variable/)

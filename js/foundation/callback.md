# Callback function

* 將函式傳給另一個函式
* 把 B 函式傳給 A 函式，告訴 A 函式執行完後，呼叫 B 函式。

**使用情境**

* 防止某些程式碼，還沒執行到程式就結束了
* 回傳結果

### 範例

**範例一**

```js
function step1(message, callback){
  console.log('step1');
  callback();
}

function step2(){
  console.log('step2');
}

step1('Hello World', step2);
```
<!-- step1, step2 -->

**範例二**

```js
function add( num, callback ) {
    num = num + 1;
    callback( num );
}

add( 2, function( ans ) {
    console.log(ans);
});
```
<!-- 3 -->

**範例三**

```js
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
```
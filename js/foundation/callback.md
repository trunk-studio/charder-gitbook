# Callback function

* 當某個函數執行完，你給它執行的函數，所以你可以呼叫一個函數，之後當它結束，那個函數回呼叫你給它的函數。

**使用情境**

* 防止某些程式碼還沒執行到程式就結束了
* 回傳結果


```js
$('button').click(function(){

});
```

```js
var fs = [];

function step1(){
  for (var i = 0; i < 10; i++){
    console.log(i);
    fs.push(function() {
      console.log('step1');
    })
  }
}

function step2(){
  console.log('step2');
}

step1();
step2();
```

<!-- 只印出 step2 -->

**將函式傳給函式**

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

<!-- 印出 step1 跟 step2 -->

```js
function add( num, callback ) {
    num = num + 1;
    callback( num );
}

add( 2, function( ans ) {
    console.log( ans ); // 3
});
```


# Callback

**使用情境**

* 防止某些程式碼還沒執行到程式就結束了
* 回傳結果

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


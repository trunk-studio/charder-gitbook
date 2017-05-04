# Block Scoped

### Block-Scoped Variables

宣告一個可隨意更改其內容的區域變數(block scope)

```js
if(true){
  let a = 1;
  console.log(a);
}
console.log(a);
```

<!-- ES5 要用立即函式來包，才能實現 block scope。-->

```js
var funcs = [];

for (let i = 0; i < 5; i++){
  funcs.push(function(){
    console.log(i);
  });
}

funcs[3](); // 3
```

### Block-Scoped Functions

**ES6**

```js
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}
```

**ES5**

```js
(function () {
    var foo = function () { return 1; }
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();
```

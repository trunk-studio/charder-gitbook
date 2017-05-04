# 預設值

### 範例一

```js
var obj = { a: 1 };
var list = [ 1 ];
var { a, b = 2 } = obj;
var [ x, y = 2 ] = list;
```

### 範例二

**ES6**

```js
function fnuc(x = 1, y = 2){}
```

**ES5**

```js
function fnuc(x, y){
  x = x || 1;
  y = y || 2;
}
```

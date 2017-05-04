# 物件字面值擴充功能

### 簡潔特性

**ES6**

```js
var firstname = 'ailin';
var lastname = 'liou';
var user = {
  firstname,
  lastname
}
console.log(user);
```

**ES5**

```js
var firstname = 'ailin';
var lastname = 'liou';
var user = {
  firstname: firstname,
  lastname: lastname
}
console.log(user);
```

### 簡潔方法

**ES6**

```js
var o = {
  x(){},
  y(){}
};
```

**ES5**

```js
var o = {
  x: function(){},
  y: function(){}
};
```
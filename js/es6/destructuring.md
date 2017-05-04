# 解構 (destructuring)

### 陣列解構

**ES6**

```js
function func(){
  return [1, 2, 3];
}

var [a, b, c] = func();
```

**ES5**

```js
function func(){
  return [1, 2, 3];
}

var tmp = func();
console.log(tmp[0], tmp[1], tmp[2])
```

### 物件解構

**ES6**

```js
function func(){
  return {
    firstname: 'ailin',
    lastname: 'liou'
  };
}

var {firstname, lastname} = func();
```

**ES5**

```js
function func(){
  return {
    firstname: 'ailin',
    lastname: 'liou'
  };
}

var tmp = func();
console.log(tmp.firstname, tmp.lastname);
```
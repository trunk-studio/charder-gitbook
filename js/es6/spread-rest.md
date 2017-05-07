# Spread / Rest (分散 / 其餘)

**Spread**

```js
function yo(x, y, z){
  console.log(x, y, z);
}

yo(...[1, 2, 3]);
```

**Rest**

* 只能用在最後一個參數

```js
function yo(...val){
  console.log(val);
}

yo(1, 2, 3);
```

```js
function yo(greeting, ...val){
  console.log(greeting);
  console.log(val);
}

yo('hi', 1, 2, 3);
```
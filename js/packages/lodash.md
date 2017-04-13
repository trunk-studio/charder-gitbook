# lodash

* [lodash 官網](https://lodash.com/)
* [lodash 中文文檔 4.5](https://wizardforcel.gitbooks.io/lodash-doc-45/content/)

### 安裝

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"/>
```

```
npm i --save lodash
```

## 常用語法

### Collection

**find**

```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(users, function(o) { return o.age < 40; });
// => 結果: 'barney'

// 使用了 `_.matches` 的回調結果
_.find(users, { 'age': 1, 'active': true });
// => 結果: 'pebbles'

// 使用了 `_.matchesProperty` 的回調結果
_.find(users, ['active', false]);
// => 結果: 'fred'

// 使用了 `_.property` 的回調結果
_.find(users, 'active');
// => 結果: 'barney'
```

**orderBy**

```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 36 }
];

// 以 `user` 升序排序 再 以 `age` 降序排序。
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
```

### Math

**sum**

```js
_.sum([4, 2, 8, 6]);
```

**sumBy**

```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

_.sumBy(objects, function(o) { return o.n; });
_.sumBy(objects, 'n');
```

### Number

```js
// _.inRange(number, [start=0], end)
_.inRange(3, 2, 4);
_.random(15, 20);
```

### Object

**forOwn**

```js
Array.prototype.bar = 1;
var arr = [1, 2, 3];

// old style
for(var i in arr){
  if (arr.hasOwnProperty(i)){
    console.log(i);
  }
}

_.forOwn(arr, function(value, key) {
  console.log(key);
});
```

**has**

```js
var object = { 'a': { 'b': { 'c': 3 } } };
_.has(object, 'a.b.c');
```

### String

```js
_.trim('  abc  ');
```

### 延伸閱讀

* [lodash 中文文檔](http://lodashjs.com/docs/)
# 群集

### TypedArrays

* Int8Array
* Int16Array
* Int32Array
* Float32Array
* Float64Array

```js
var a = new Int32Array(3);
a[0] = 10;
a[1] = 20;
a[2] = 30;

a.map(function(v){
  console.log(v);
})
```
<!-- 10 20 30 -->

### Map

* Key：唯一值
* Value
* 使用情境：常用於物件
* 限制：無法使用非字串當成 key，也無法使用 myMap['Alin']。
* 提醒：不同於 Array.prototype.map()

```js
let myMap = new Map();
myMap.set('Alin', '大家有沒有問題？');
myMap.set('Daisy', '好像是...應該是...');
myMap.set('Andy', '我想一下，先換別人');
myMap.set('Amuro', '跟她的答案一樣');
myMap.set('Eason', '疑...歐...啊');

myMap.get('Andy');
```

```js
let myMap = new Map();
myMap.set('Alin', { id : 1, message: '大家有沒有問題？'});
myMap.set('Daisy', { id : 3, message: '好像是...應該是...'});
myMap.set('Andy', { id : 5, message: '我想一下，先換別人'});
myMap.set('Amuro', { id : 7, message: '跟她的答案一樣'});
myMap.set('Eason', { id : 9, message: '疑...歐...啊'});

var andy = myMap.get('Andy');
andy.message
myMap.size;
const keys = [...myMap.keys()];
myMap.has('Alin');
myMap.clear();
```

* 練習題 map.js

### WeakMap

* 使用方法大致上與 Map / Set 相同，差異只在於記憶體配置方法，更易於 GC 回收。
* 沒有 size 跟 clear()

```js
var m = new WeakMap();
var a1 = { id: 1};
var a2 = { id: 2};
var a3 = { id: 3};
var a4 = { id: 4};

m.set(a1, a2);

a1 = null;
a2 = null;
// ?

m.set(a3, a4);
a4 = null;
// ?

m.size // ?
m.clear(); // ?
```
<!-- TypeError: m.clear is not a function -->

### Set

<!--一個 Set 內，不會有重複的物件。-->

```js
var s = new Set();
var alin = { id : 1, message: '大家有沒有問題？'};
var daisy = { id : 3, message: '好像是...應該是...'};
var andy = { id : 5, message: '我想一下，先換別人'};
s.add(alin);
s.add(daisy);
s.add(andy);
s.add(alin);
s.size // ?
s.delete(alin);
s.clear();
```

* 練習題 set.js

### WeakSet

```js
var s = new WeakSet();
var a1 = { id: 1};
var a2 = { id: 2};

s.add(a1);
s.add(a2);

a1 = null;
a2 = null;
```
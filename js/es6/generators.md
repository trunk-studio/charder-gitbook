# 產生器

<!--
為了解決 callback 表達非同步執行流程的方式，相當的非循序式，使得難以推理程式的運作邏輯。-->

* 暫停點：yield
* 下一步：it.next();
* 提早結束：it.return('something');
* 提早放棄：it.throw('Oops');


```js
function *counter(){...}
function* counter(){...}
function * counter(){...}
function*counter(){...}
```

```js
function *counter(){
  yield 1;
  yield 2;
  yield 3;
}

var it = counter();
it.next();
```

```js
function *idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

### 提早放棄

```js
function *counter(){
  yield 1;
  yield 2;
  yield 3;
}

var it = counter();
it.next();

try {
  it.throw('Oops');
} catch(err) {
  console.log(err);
}

it.next();
```
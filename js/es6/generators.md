# 產生器

* 目的在於希望能將非同步的控制流程，閱讀起來像同步控制流程一般的直覺。

### 新增的語法

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
function *flow(){
  yield 1;
  yield 2;
  yield 3;
}

var it = flow();

try {
  console.log(it.next());
  it.throw('Oops');
} catch(err) {
  console.log(err);
}

it.next();
```

```js
var func1 = () => 1
var func2 = () => new Error('Oops');
var func3 = () => 3;

function *flow(){
  yield func1();
  yield func2();
  yield func3();
}

var it = flow();

try {
  console.log(it.next());
  console.log(it.next());
} catch(err) {
  console.log(err);
}

console.log(it.next());
console.log(it.next());
```

### Generators 與 Promises 整合 (Combining Promises and Generators)



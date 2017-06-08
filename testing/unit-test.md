# 單元測試

單元測試三步驟：3A Pattern

* Arrange：預先安排與配置
* Act：執行我們要測試的程式
* Assert：斷言或驗證執行結果是否符合預期

[Mocha](https://mochajs.org/) 測試框架

```js
var assert = require('assert');

describe('test suite', () => {
  beforeEach(() => {});
  before(() => {});
  after(() => {});
  afterEach(() => {});
  it('test case 1', () => {});
  it('test case 2', () => {});
  it('test case 3', () => {});
});
```

**單獨測試**

```js
it.only('單獨測試', async (done) => done());
```

**略過測試**

```js
it.skip('略過測試', async (done) => done());
```

<https://github.com/alincode/calc>

```js
// lib/app.js
exports.addition = function(x, y){
  return x + y;
}

exports.subtraction = function(x, y){
  return x - y;
}

exports.multiplication = function(x, y){
  return x * y;
}

exports.division = function(x, y){
  return x / y;
}
```

```js
// test/app.js
var calc = require('../lib/app.js');
var assert = require('assert');

describe('計算機', () => {
  it('加', () => {
    
  });
});
```

**執行方式**

```
npm test
```

### 練習題

* 撰寫一個加減乘除的單元測試程式
# 單元測試

**安裝 mocha 套件**

```
npm install mocha -g
```

**範例 ex01.js**

```js
var assert = require('assert');

// test suite
describe('計算機', function() {

  // test case
  it('加', function() {
    assert.equal(1 + 2, 3);
  });
});
```

**執行方式**

```
mocha ex01.js
```

### 練習題

* 撰寫一個加減乘除的單元測試程式
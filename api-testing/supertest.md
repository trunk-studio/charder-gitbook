# SuperTest

> The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.

SuperTest 提供的是抽象化的 HTTP 測試模組，它把 superagent 在包過一層，若之後有需要用到比較低層級的 API，還是可以在替換成 superagent。

```js
var request = require('supertest')('http://jsonplaceholder.typicode.com');
```

**body**

```js
request
  .post('/posts')
  .send(data)
```

**query 參數**

```js
request
  .get('/api/user')
  .query({userId: 1})
  .query({title: 'test123'})
```

```js
request
  .get('/api/user')
  .query({
      userId: 1,
      title: 'test123'
  })
```

**request type**

HTTP Header

```
request.post('/user').type('application/json')
request.post('/user').type('json')
request.post('/user').type('png')
```

```js
request
  .get('/api/user')
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(200, done);
  .end(function(err, res){
    if (err) return done(err);
      done();
    });
```

### Stub Object

* 目的：用來輔助驗證回傳值或目標物件狀態
* 使用時機：


```js
describe("#fight", function () {
  it("always wins when prayForStrength is true", function () {
    sinon.stub(subject.strengthDep, "prayForStrength", function () { return true; });
    subject.fight().should.be.true;
    subject.strengthDep.restore();
  });
});
```

### Mock Object

* 目的：用來驗證目標物件與相依物件互動的情況是否符合預期。

```js
describe("#fight", function () {
  it("always wins when prayForStrength is true", function () {
    var mock = sinon.mock(subject.strengthDep)
    mock.expects("prayForStrength").returns(true);
    mock.expects("prayForStrength2").returns(true);
    mock.expects("prayForStrength3").returns(true);
    subject.fight().should.be.true;
    mock.verify();
    mock.restore();
  });
});
```

**注意事項**

* Mock 的驗證可以相當複雜，但越複雜代表維護成本越高，代表越容易因為需求異動而改變。
* 所以請謹慎使用 mock，更甚至於當發生問題時，針對問題的測試案例才增加 mock 的測試

### Fake Object

* 當目標物件使用到靜態方法或 framework 本身的物件，甚至於一般直接相依的物件，我們都可以透過 fake object 的方式，直接模擬相依物件的行為。
* 例如：官方的函式庫

### fixtures

```js
before(function(){
  global.fixtures['user'].sort(alphaSortFunction);
});
```

**with Saials**

```js
import request from 'supertest';
var queryString = require('queryString');
import { expect, assert } from 'chai';
import request from 'supertest';

request(sails.hooks.http.app)
  .post('/api/users')
  .set('Accept', 'application/json')
  .send({ key1: vaule1, key2: vaule2})
  .expect('Content-Type', /json/)
  .expect(201)
  .end(function(err, res) {
    if (err) return done(err);
    assert.equal(res.body.key1, "value1");
    assert.equal(res.body.key2, "value2");
    done();
  });
```

## 實戰練習

### Stub Object

```js
global.should = require('chai').should();
global.sinon = require('sinon');
global.request = require('supertest-as-promised');

before(async (done) => {
  sinon.stub(UserService, 'findAll', () => {
    throw new Error('stub error!');
  });
  done();
});

after((done) => {
  UserService.findAll.restore();
  done();
});
```

### 練習題

* 一個最基本的 api 測試，驗證 HTTP status。
* 撰寫一個 CRUD 的 api 測試
* 以 UserController.js 的 hi 為例，寫一個有做 Stub 的測試程式。

### 延伸閱讀

* [jaketrent - Sinon Spies vs. Stubs](https://jaketrent.com/post/sinon-spies-vs-stubs/)
* [laribee - Sinon Mocks vs. Stubs](https://gist.github.com/laribee/2050358)
* <http://visionmedia.github.io/superagent/>
* <https://eugenechen.gitbooks.io/javascript/content/best-practices-for-spies-stubs-and-mocks-in-sinonjs.html>
* <http://blog.gejiawen.com/2015/08/14/read-superagent-doc/>

<!--
http://blog.gejiawen.com/2015/08/14/read-superagent-doc/

superagent 不認為返回 4xx 和 5xx 的情況是錯誤。比如當請求返回 500 或者 403 之類的狀態碼時，可以通過 res.error 或者 res.status 等屬性來查看。此時並不會有錯誤對像傳遞到回調函數中。當發生網絡錯誤或者解析錯誤時，superagent 才會認為是發生了請求錯誤，此時會傳遞一個錯誤對像 err 作為回調函數的第一個參數。

當產生一個 4xx 或者 5xx 的 http 響應，res.error 提供了一個錯誤信息的對象，你可以通過檢查這個來做某些事情。

http://visionmedia.github.io/superagent/#test-documentation

[API Testing Examples | Getting Started with API Testing](https://www.soapui.org/tutorials.html)

-->
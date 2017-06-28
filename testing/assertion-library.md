# 斷言函式庫 (assertion library)

[Chai Assertion Library](http://chaijs.com/)

> Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

> Chai 是一個 BDD / TDD 基於 NodeJS 的斷言函式庫，可以與任何 javascript 測試框架一起使用。

> Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.

> Chai 提供數種 interfaces，供使用者選擇最習慣的方式，chain-capable BDD 風格提供的是豐富的呈現方式跟可讀性，TDD assert 風格則是提供更經典的使用方式。


**Should**

```js
chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);
```

**Expect**

```js
var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
  .with.lengthOf(3);
```

**Assert**

```js
var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```


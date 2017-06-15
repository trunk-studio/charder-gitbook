# Page Object 模式

**目錄結構**

```
.
├── errorShots
└── test
    ├── pageobjects
    └── specs
```

```js
// test/pageobjects/page.js
function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function (path) {
    browser.url(path)
}
module.exports = new Page()
```

```js
// test/pageobjects/login.page.js
var Page = require('./page')
var LoginPage = Object.create(Page, {
    /**
     * 定義元素
     */
    username: { get: function () { return browser.element('#username'); } },
    password: { get: function () { return browser.element('#password'); } },
    form:     { get: function () { return browser.element('#login'); } },
    flash:    { get: function () { return browser.element('#flash'); } },

    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});
module.exports = LoginPage;
```


```js
// test/specs/login.spec.js
var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');
describe('登入流程', function () {
    it('登入成功', function () {
        LoginPage.open();
        LoginPage.username.setValue('alincode');
        LoginPage.password.setValue('12345678');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('恭喜你登入成功了');
    });
});
```
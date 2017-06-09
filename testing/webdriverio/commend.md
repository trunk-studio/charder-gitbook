# WebdriverIO 常用指令 (API) 語法

<http://webdriver.io/api.html>

**指令種類**

* Protocol
* Action
* Utility
* Property
* State
* Mobile (暫時跳過)

### Protocol

**選取元素**

```js
browser.element('div');
$('div');

browser.elements('div');
$$('div');
```

**前往某網址**

```js
browser.url('http://www.google.com');
```

### Action

**設定欄位的值**

```js
browser.element('.email').setValue('aaa@bbb.com');
// 縮寫
$('.email').setValue('aaa@bbb.com');
```

**點選欄位的值**

```js
browser.click('.some-button');

// 縮寫
$('.some-button').click();

$('[title="Sign Out"]').click();
```

### Utility

**檢查某個元素是否存在**

```js
browser.waitForExist('.alert-text');

// 縮寫
$('.alert-text').waitForExist();
```

**暫停**

```js
browser.pause(5000);
```

**除錯**

```js
browser.debug();
```

**加命令**

```js
browser.addCommand();
```

**waitForExist**

```js
browser.element('.notification').waitForExist();
browser.element('.notification').waitForExist(5000);
browser.element('.notification').waitForExist(5000, true);
// 或
browser.waitForExist('.notification');
browser.waitForExist('.notification', 5000);
browser.waitForExist('.notification', 5000, true);
```

**saveScreenshot**

```js
browser.saveScreenshot('front_page.png');
```

**end**

```js
client
    .init()
    .url('http://google.com')
    .end();
    // ends session and close browser
```

### Property

**取得某個元素的文字**

```js
browser.getText('.alert-text');

// 縮寫
$('.alert-text').getText();
```

**取得某個元素的值**

```js
browser.getValue('input[name=email]');
```

**取得標題**

```js
browser.getTitle();
```

**取得網址**

```js
browser.getUrl();
```

### State

**isEnabled**

```html
<input type="text" name="inputField" class="input1">
<input type="text" name="inputField" class="input2" disabled>
<input type="text" name="inputField" class="input3" disabled="disabled">
```

```js
var isEnabled = browser.isEnabled('.input1');
console.log(isEnabled); // outputs: true
var isEnabled2 = browser.isEnabled('.input2');
console.log(isEnabled2); // outputs: false
var isEnabled3 = browser.isEnabled('.input3')
console.log(isEnabled3); // outputs: false
```

**isSelected**

```html
<select name="selectbox" id="selectbox">
    <option value="Daisy">Daisy</option>
    <option value="Alin" selected="selected">Alin</option>
    <option value="Andy">Andy</option>
</select>
```

```js
$('[value="Layla Terry"]').isSelected(); // 輸出: true

browser.selectByValue('#selectbox', 'Bill Gilbert');
element.isSelected(); // 輸出: false
```

**isExisting / isVisible**

```html
<div id="notDisplayed" style="display: none"></div>
<div id="notVisible" style="visibility: hidden"></div>
<div id="notInViewport" style="position:absolute; left: 9999999"></div>
<div id="zeroOpacity" style="opacity: 0"></div>
```

```js
browser.isExisting(selector);
```

### 補充

**驗證**

```js
assert.equal('實際文字內容', '預期文字內容');
```
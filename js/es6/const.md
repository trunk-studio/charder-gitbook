# var / const

### var

* 宣告一個可隨意更改其內容的變數
* function scope

### const

* 常數：宣告一個只可讀取(read-only)的不可變數
* 用途：可以清楚表達意圖的語法

**ES6**

```js
{
  const a = [1, 2, 3];
  a.push(4);
  console.log(a);
  // a = 4;
}
```
<!-- TypeError -->

```js
const PI = 3.141593
PI > 3.0
```

**ES5**

```js
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
PI > 3.0;
```

### 練習題

修改成 ES6 語法

```js
var statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
```
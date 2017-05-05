# Promise

<!--callback 有兩個缺點，哪兩個缺點？Promise 的出現是為了修補哪一個缺點？-->
<!--產生器 (generators) -->

![](https://mdn.mozillademos.org/files/8633/promises.png)

### Promise 是什麼？

* 提供比 callback 更好的表達程式的非同步邏輯
* 它是一種控制流程機制
* Promise 的出現並沒有去除 callback，只是把這些 callback 的協調工作，轉交給了介於我們與其他工作之間的一種**可信任的中介機制**。
* 它是可以輕易重複用來封裝與合成未來值的一種機制。

<!--將非同步的程式，用接近同步式的語法來撰寫。-->

### 未來值

等值的承若 (vlue-promise)，例如取餐收據。

```js
add(fetchX, fetchY, function(sum){
  console.log(sum);
});
```
<!--如何確保 x, y 同時到達，再進行加法運算？-->
<!--補充 API 的原子，不可分割。-->
<!-- Transaction -->

### 狀態

* pending：等待中，為初始之狀態，即不是 fulfilled 也不是 rejected。
* fulfilled：已實現，表示操作成功完成。
* rejected：已拒絕，表示操作失敗。

## 方法

* Promise.reject(reason)
* Promise.resolve(value)
* Promise.all(iterable)
* Promise.race(iterable)

### Promise.reject(reason)

只會代表發生拒絕的情況

```js
var p1 = new Promise(function(resolve, reject)){
  reject('Oops');
});

var p2 = new Promise.reject('Oops');
```

### Promise.resolve(value)

有可能會發生在履行(fulfill) 或拒絕的 Promise，取決於傳入了什麼給它，如果傳入給 resolve 的是一個立即的非 Promise、非 thenable 的值，那麼 promise 就會以那個植被履行。

```
// 缺範例待補
```

### Promise.all(iterable)

所傳入的所有 prmises 都必須履行 (fulfill)，所回傳的 promise 才會履行。

```js
var p1 = Promise.resolve(1);
var p2 = Promise.resolve('Hello World');
var p3 = Promise.resolve('Oops');

Promise.all([p1, p2, p3]).then(function(msg){
  console.log(msg);
});

Promise.all([p1, p2, p3]).catch(function(err){
  console.log(err);
});
```

### Promise.race(iterable)

只要第一個解析的 promise 會勝出，而無論哪個解析結果為何，都會成為所回傳的 promise 的解析結果。

```js
var p1 = Promise.resolve(1);
var p2 = Promise.resolve('Hello World');
var p3 = Promise.resolve('Oops');

Promise.race([p1, p2, p3]).then(function(msg){
  console.log(msg);
});
```
<!--執行結果為 p1，但未必每次都是 p1，因為是非同步競賽。-->

## Promise 原型方法

### Promise.prototype.then(onFulfilled, onRejected)

* fulfillment 履行
* rejection 拒絕

```js
var p1 = new Promise(
  function(resolve, reject) {
    setTimeout(function(){
        resolve("Success!");
    }, 5000);
    // 或 reject ("Error!");
  }
);

p1.then(
  // fullfilment handler
  function(value) {
    console.log(value); 
  },
  // rejection handler
  function(reason) {
    console.log(reason);
  }
);
```

```js
p.then(fulfilled);
p.then(fulfilled, rejected);
```

### Promise.prototype.catch(onRejected)

```js
p.catch(rejected);
p.then(null, rejected);
```

## 錯誤處理

<!-- try...catch 無法處理跨非同步作業運作 -->
```js
function func(){
  setTimeout(function(){
    consoe.log('hi');
  }, 5000);
}

try {
  func();
} catch(err){
  console.log('I am error.', err); // 會發生什麼事？
}
```

### error-first callback 風格

```js
function func(cb) {
  setTimeout(function(){
    try {
      cb(null, x);
    } catch(err) {
      cb(err);
    }
  })
}
```

<!--## all 與 race 的變體-->

<!--## Promise 需注意的事項-->

## 範例

### 只能回傳一個參數

```js
var p1 = new Promise(
  function(resolve, reject) {
    resolve("Success!");
  }
);
```
<!-- 但可以把多個值，包成一個物件。 -->

### Weird

```js
var p3 = new Promise(function(resolve, reject){
  resolve('B');
});

var p1 = new Promise(function(resolve, reject){
  resolve(p3);
});

var p2 = new Promise(function(resolve, reject){
  resolve('A'); // immediate value
});

p1.then(function(v){
  console.log(v);
});

p2.then(function(v){
  console.log(v);
});
```
<!-- A B -->

### 完整例子

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('上傳圖片失敗，錯誤碼:' 
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('網路異常'));
    };
    request.send();
  });
}
```

```js
function getArticleList(callback) {
  return new Promise(function(resolve, reject) {
      $.ajax({
        url: "/article",
        type: "get"
      }).done(function(articleList) {
        return resolve(articleList);
      });
    }
  }
}

function getArticle(id, callback) {
  return new Promise(function(resolve, reject) {
      $.ajax({
        url: "/articleInfo/" + id,
        type: "get"
      }).done(function(article) {
        return resolve(article);
      });
    }
  }
}

function getAuthor(authorId, callback) {
  return new Promise(function(resolve, reject) {
      $.ajax({
        url: "/author/" + authorId,
        type: "post"
      }).done(function(authorInfo) {
        return resolve(authorInfo);
      });
    }
  }
}
```

```js
// 原本
getArticleList(function(articleList) {
  getArticle(articleList[0].id, function(articleInfo) {
    getAuthor(articleInfo.arthorId, function(arthorInfo) {
      console.log(arthorInfo);
    });
  });
});
```

```js
// Promise ( ES6 )
getArticleList().then(function(articleList) {
  return getArticle(articleList[0].id);
}).then(function(article) {
  return getArticle(article.authorId);
}).then(function(authorInfo) {
  console.log(authorInfo);
});
```

**結果**

```
{
  "id": 2,
  "name": "alincode",
  "email": "alincode@gmail.com"
}
```

### 延伸閱讀

* [Convert a callback to a promise - js Video Tutorial #free @eggheadio](https://egghead.io/lessons/javascript-convert-a-callback-to-a-promise)
* [Promise - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)
# Promise

* 比 callback 更好的表達程式的非同步邏輯
* 是一種控制流程機制
* 預期它會回傳給我們的一種能力
* 可以輕易重複用來封裝與合成未來值得一種機制。

<!--將非同步的程式，用接近同步式的語法來撰寫。-->

### 未來值

等值的承若 (vlue-promise)，例如取餐收據。

```js
add(fetchX, fetchY, function(sum){
  console.log(sum);
});
```
<!--如何確保 x, y 同時到達，再進行加法運算？-->
<!-- Transaction -->
<!--### 完成的事件-->

### 基本範例

* fulfillment 履行
* rejection 拒絕

```js
var p1 = new Promise(
  function(resolve, reject) {
    resolve("Success!");
    // 或 reject ("Error!");
  }
);

p1.then(
  function(value) {
    console.log(value); // 成功 / 履行
  },
  function(reason) {
    console.log(reason); // 失敗
  }
);
```

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
        reject(Error('Image didn\'t load successfully; error code:' 
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
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
# Promise

* 比 callback 更好的表達程式的非同步邏輯
* 預期它會回傳給我們的一種能力

### 未來值

<!-- 點餐的例子，取餐單據 -->

### 完成的事件

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

// result
{
  "id": 2,
  "name": "Deleav",
  "email": "deleav@gmail.com"
}
```

* [Convert a callback to a promise - js Video Tutorial #free @eggheadio](https://egghead.io/lessons/javascript-convert-a-callback-to-a-promise)
* [Promise - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)
# Fetch API

* Fetch 的出現就是為瞭解決 XHR 的問題
* Fetch API 是基於 Promise 設計

**XMLHttpRequest**

```js
var url = 'http://beta.json-generator.com/api/json/get/E105pDLh';
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Oops, error");
};

xhr.send();
```

### 範例

```js
fetch('http://beta.json-generator.com/api/json/get/E105pDLh', { method: 'get' })
.then(function(response) {
  response.json().then(function(data) {  
    console.log(data);  
  });
}).catch(function(err) {
  console.error(err);
})
```

```js
fetch('http://beta.json-generator.com/api/json/get/E105pDLh', { mode: 'cors' })  
  .then(function(response) {  
    return response.text();  
  })  
  .then(function(text) {  
    console.log(text);  
  })  
  .catch(function(error) {  
    log('Request failed', error)  
  });
```

### 延伸閱讀

* [Introduction to fetch() - Google Developers](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
* [從 ES6 開始的 JavaScript 學習生活 - AJAX 與 Fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
# Async

* 一定要用 Promise 包起來才能夠使用
* 想要用 await 一定要加 async


```js
function getArticleList(){
  return new Promise(function(resolve, reject){
    $.ajax(
    "http://beta.json-generator.com/api/json/get/Ey8JqwIh")
    .done(function(result){
        resolve(result);
    }); 
  });
}

async function() {
  var articleList = await getArticleList();
  var article = await getArticle(articleList[0].id);
  var authorInfo = await getAuthor(article.authorId);
  console.log( arthorInfo );
}
```
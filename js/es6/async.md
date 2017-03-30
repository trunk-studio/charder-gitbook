# Async

* 一定要用 Promise 包起來才能夠使用
* 想要用 await 一定要加 async


```js
async function() {
  var articleList = await getArticleList();
  var article = await getArticle(articleList[0].id);
  var authorInfo = await getAuthor(article.authorId);
  console.log( arthorInfo );
}
```

```js
async () => {
  var articleList = await getArticleList();
  var article = await getArticle(articleList[0].id);
  var authorInfo = await getAuthor(article.authorId);
  console.log( arthorInfo );
}
```
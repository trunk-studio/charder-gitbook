# Middleware 中介層

```
Route::get('/article/create', [
    'middleware'  => 'auth',
    'uses'=> 'ArticleController@store'
]);
```




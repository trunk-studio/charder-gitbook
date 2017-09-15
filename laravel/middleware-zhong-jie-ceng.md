# Middleware 中介層

## 在 Route 使用中介層 {#在-route-使用中介層}

在`routes\api.php` 加入

```
Route::get('/article/create', [
    'middleware'  => 'auth',
    'uses'=> 'ArticleController@store'
]);
```




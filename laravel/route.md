# 路由 (Route)

**app/routes.php**

```php
Route::get('/', function () {
    return view('welcome');
});
```

<!-- 示範換成 /example -->

<!--
```php
Route::get('/api/article', function(){
    return 'article post';
});
```
-->

### 路由動詞

```php
Route::get('/', function(){});
Route::post('/', function(){});
Route::put('/', function(){});
Route::delete('/', function(){});
Route::any('/', function(){});
Route::match(['get', 'post'], '/', function(){});
```

### 路由參數

```php
Route::get('/users/{id}', function($id){
  return view('welcome');
});
```

### 強制走 https

```php
Route::get('foo', array('https', function(){
    return 'Must be over HTTPS';
}));
```

### 練習題

*  新增另一個 html 頁面
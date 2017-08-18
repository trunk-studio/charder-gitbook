# 路由 (Route)

**app/routes.php**

```php
Route::get('/', function () {
    return view('welcome');
});
```

```
php artisan route:list
```

<!-- 示範換成 /example -->

<!--
```php
Route::get('/article', function(){
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

練習題：建立 article 的 CRUD

### 路由參數

```php
Route::get('/users/{id}', function($id){
  return 'this is user id: ' . $id;
});
```

<!--
Route::get('/users/{id}/{name}', function($id, $name){
  return 'this is user id: ' . $id . $name;
});
-->

```php
Route::get('users/{name?}', function ($name = null) {
    return $name;
});

Route::get('users/{name?}', function ($name = 'alincode') {
    return $name;
});
```

### API Route

```
Route::middleware('api')->get('/user', 'UserController@index');
```

<!--[Laravel 5 測試起手式 · GitHub](https://gist.github.com/jaceju/c415c1b42daf4c589f2a)-->


----------------------------------------

* Route 登入驗證
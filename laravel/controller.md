# Controller

### 建立 Controller

```
php artisan make:controller ArticleController
php artisan make:controller --resource ArticleController
```

**app/Http/Controllers**

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ArticleController extends Controller
{
    //
}
```

### 設定 Controller 的 Route

```
php artisan route:list
```

```php
// 練習一
Route::get('/article', 'ArticleController@index');

// 練習二
Route::resource('/article', 'ArticleController');
```

### request 參數

**Path 參數**

```php
Route::get('/article/{author}', 'ArticleController@index');
```

```php
public function index($author){
  return '文章的作者是：' . $author;
}
```

**Query 參數**

```php
$message = $request -> get('message');
```

**Body**

```php
$user = new User;
$user -> username = $request -> username;
```

### response

```php
$createdUser = User::create([
  'name' => $user["name"], 
  'email' => $user["email"],
  'password' => bcrypt('123456'),
  'remember_token' => 1
]);

return response()->json($createdUser);
```

```php
return response()->json(['result' => false, 'message' => '信箱已被註冊，無法使用']);
```
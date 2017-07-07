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

```php
// 練習一
Route::get('/article', 'ArticleController@index');

// 練習二
Route::resource('/article', 'ArticleController');
```

### 傳參數

```php
Route::get('/article/{author}', 'ArticleController@index');
```

```php
public function index($author){
  return '文章的作者是：' . $author;
}
```
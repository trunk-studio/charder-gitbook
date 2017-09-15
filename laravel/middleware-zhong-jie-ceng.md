# Middleware 中介層

## 在 Route 使用中介層 {#在-route-使用中介層}

在`routes\api.php` 加入

```
Route::get('/article/create', [
    'middleware'  => 'auth',
    'uses'=> 'ArticleController@store'
]);
```

## 建立自己的中介層 {#建立自己的中介層}

可以使用指令建立自己的 Middleware，假如我建立一個 ArticleVerifyMiddleware 為名稱的中介層，可以在命令列輸入：

```
php artisan make:middleware ArticleVerifyMiddleware
```

建立的中介層會放在 app\Http\Middleware\ArticleVerifyMiddleware.php 中

```
<?php namespace App\Http\Middleware;

// app\Http\Middleware\ArticleVerifyMiddleware.php

use Closure;

class ArticleVerifyMiddleware {

    public function handle($request, Closure $next)
    {
        return $next($request);
    }

}
```

建立好自訂的中介層之後，到 app\Http\Kernel.php 註冊中介層後即可使用

```

```






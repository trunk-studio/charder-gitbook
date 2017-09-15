# Middleware 中介層

## 在 Route 使用中介層 {#在-route-使用中介層}

在`routes\api.php` 加入

```
Route::get('/article/view', [
    'middleware'  => 'article.verify',
    'uses'=> 'ArticleController@index'
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
use App\Article;

class ArticleVerifyMiddleware {

    public function handle($request, Closure $next)
    {
        $article = Article::find($request->input('id',''));
        if(!empty($article))
        {
            if($article->Verify)
            {
                return $next($request);
            }
        }
        return false;
    }

}
```

建立好自訂的中介層之後，到 app\Http\Kernel.php 註冊中介層後即可使用

```
namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{

    ....

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \Illuminate\Auth\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'article.verify' => \App\Http\Middleware\ArticleVerifyMiddleware::class,
    ];
}
```




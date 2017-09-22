# Middleware

### 練習題

* 客製化 TrimMiddleware
* 建立一個 CheckAdult 的 Middleware，確認已經成人了

**步驟**

1. 建立一個自動的 middleware
1. 設定 middleware 範圍
1. 在 route 上使用特定的 middleware

### 定義 Middleware

```
php artisan make:middleware TermMiddleware
php artisan make:middleware CheckAdult
```

```php
<?php
namespace App\Http\Middleware;

use Closure;

class TermMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
```

#### Before & After Middleware

* Before

常用於過濾資料，權限判斷

```php
<?php
namespace App\Http\Middleware;

use Closure;

class BeforeMiddleware
{
    public function handle($request, Closure $next)
    {
        // do something

        return $next($request);
    }
}
```

```php
<?php
namespace App\Http\Middleware;

use Closure;

class CheckAge
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->age <= 200) {
            return redirect('home');
        }

        return $next($request);
    }

}
```

* After

特殊字元呈現前處理

```php
<?php

namespace App\Http\Middleware;

use Closure;

class AfterMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // do something

        return $response;
    }
}
```

### 註冊 Middleware

app/Http/Kernel.php

```php
<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            'throttle:60,1',
            'bindings',
        ],
    ];

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
    ];
}
```

* $middleware：全域
* $middlewareGroups：應用程式 Route 層級
* $routeMiddleware：指定配置

```php
Route::get('admin/profile', function () {
    //
})->middleware('auth');
```

一次設定多組 middleware

```php
Route::get('/', function () {
    //
})->middleware('first', 'second');
```

使用 middleware 的類別名稱設定 Route 的 middleware

```php
use App\Http\Middleware\CheckAdult;

Route::get('admin/profile', function () {
    //
})->middleware(CheckAdult::class);
```

### override 存在的 Middleware

```php
use Illuminate\Foundation\Http\Middleware\TrimStrings as BaseTrimMiddeware;

class TermMiddleware extends BaseTrimMiddeware
```

### route/web.php

```php
Route::get('/term', function () {
    return view('exmiddleware');
});

Route::post('/termPost', function (Request $request) {
    $data[1] = $request->field1;
    $data[2] = $request->field2;
    return dd($data);
})->name('termForm');
```

### exmiddleware.blade.php

```php
<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Middleware 練習題</title>

        <link href="{{mix('css/app.css')}}" type="text/css" rel="stylesheet" />
    </head>
    <body>
    
        <div class="container">
            <form class="form-horizontal" method="POST" action="{{ route('termForm') }}">
                {{ csrf_field() }}
                <div class="form-group">
                    <label for="field1">欄位一</label>
                    <input type="text" class="form-control" name="field1" placeholder="field 1">
                </div>
                <div class="form-group">
                    <label for="field2">欄位二</label>
                    <input type="text" class="form-control" name="field2" placeholder="field 2">
                </div>
                <button type="submit" class="btn btn-default">送出</button>
            </form>
        </div>
    </body>
</html>

```

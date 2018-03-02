# Laravel 整合 JWT

### 安裝

```
composer create-project --prefer-dist laravel/laravel laravel-jwt-sandbox
composer require tymon/jwt-auth
```

### 配置

**config/app.php**

```
// providers
Tymon\JWTAuth\Providers\JWTAuthServiceProvider::class,

// aliases

'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
```

**app/HTTP/Kernel.php**

```
//  routeMiddleware

'jwt.auth' => \Tymon\JWTAuth\Middleware\GetUserFromToken::class,
'jwt.refresh' => \Tymon\JWTAuth\Middleware\RefreshToken::class,
```

**建立預設 JWT 設定檔**

```
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\JWTAuthServiceProvider"
```

**重新產生一組新的 jwt 密碼**

```
php artisan jwt:generate
```

### 實作

#### 設定 route

**route/api.php**

```php
Route::post('/login', 'AuthenticateController@authenticate');
Route::middleware('jwt.auth')->post('/jwt/check', 'AuthenticateController@check');
Route::middleware('jwt.refresh')->post('/jwt/refresh', 'AuthenticateController@refresh');
```

#### 設置 Controller

**AuthenticateController**

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;

class AuthenticateController extends Controller
{
    public function authenticate(Request $request)
    {
        // 從 request 中取得 email 跟 password 參數值
        $credentials = $request->only('email', 'password');

        try {
            // 驗證使用者的帳號密碼，若錯誤則回傳 401。
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // 發生 JWTException 的時候，則回傳 500。
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // 帳密正確，產生 JWT token 並回傳。
        $user = User::where('email', $request->email)->first();
        $token = JWTAuth::fromUser($user);

        return response()->json([
            'token' => $token
        ]);
    }

    public function check(Request $request)
    {
       return 'toke is correct';
    }

    public function refresh(Request $request)
    {
        return 'refresh token is ok';
    }
}

```

### 呼叫方式

**取得 Token**

```
POST http://localhost:8080/api/login
```

**驗證 JWT token**

```
POST http://localhost:8080/api/jwt/check

// Request Http Header
Authorization: Bearer TOKEN_STRING
```

**更新 JWT token**

可從回應的 response 中取得新的 Token 值

```
POST http://localhost:8080/api/jwt/refresh

// Request Http Header
Authorization: Bearer TOKEN_STRING

// Response Http Header
Authorization: Bearer TOKEN_STRING
```

### 參考資料

* [Installation · tymondesigns/jwt-auth Wiki · GitHub](https://github.com/tymondesigns/jwt-auth/wiki/Installation)
# Laravel 整合 JWT

### 安裝

```
composer create-project --prefer-dist laravel/laravel laravel-jwt-sandbox
composer require tymon/jwt-auth
```

### 配置

**config/app.php**

```
// aliases

'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
```

**app/HTTP/Kernel.php**

```
//  routeMiddleware

'jwt.auth' => \Tymon\JWTAuth\Middleware\GetUserFromToken::class,
'jwt.refresh' => \Tymon\JWTAuth\Middleware\RefreshToken::class,
```

```
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\JWTAuthServiceProvider"
php artisan jwt:generate
```

### 實作

**AuthenticateController**

```php
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
```

**route/api.php**

設定 route

```php
Route::post('/login', 'AuthenticateController@authenticate');

Route::middleware('jwt.auth')->post('/jwt/check', function (Request $request) {
    return 'token is correct';
});
```

### 呼叫方式

**取得 Token**

```
POST http://localhost:8080/api/login
```

**驗證 JWT token**

```
POST http://localhost:8080/api/jwt/check

// Http Header
Authorization: Bearer TOKEN_STRING
```

### 參考資料

* [Installation · tymondesigns/jwt-auth Wiki · GitHub](https://github.com/tymondesigns/jwt-auth/wiki/Installation)
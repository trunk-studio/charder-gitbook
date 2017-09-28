# 測試

測試程式產生器

```
php artisan make:test UserControllerTest

php artisan make:test UserTest --unit
```

```php
<?php
namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleController extends TestCase
{
    public function index()
    {
        $this->assertTrue(true);
    }
}
```

**執行測試**

```
./vendor/bin/phpunit
```

### HTTP 測試

```php
<?php
namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleController extends TestCase
{
    public function index()
    {
        $response = $this->get('/api/user');
        $response->assertStatus(200);
    }
}
```

**assertJson**

```php
<?php

class ExampleTest extends TestCase
{
    public function testBasicExample()
    {
        // $response = $this->get('/api/user/1');
        $response = $this->json('GET', '/api/user/1');
        $response
            ->assertStatus(200)
            ->assertJson([
                'user_name'=>'alincode',
                'email'=>'alincode@gmail.com',
            ]);
    }
}
```

**assertExactJson**

```php
<?php

class ExampleTest extends TestCase
{
    public function testBasicExample()
    {
        // $response = $this->get('/api/user/1');
        $response = $this->json('GET', '/api/user/1');
        $response
            ->assertStatus(200)
            ->assertExactJson([
                'id'=>1,
                'user_name'=>'alincode',
                'full_name'=>'AILIN LIOU',
                'email'=>'alincode@gmail.com',
                'created_at'=>null,
                'updated_at'=>null
            ]);
    }
}
```

**Assert**

```
$response->assertStatus($code);
$response->assertRedirect($uri);
$response->assertHeader($headerName, $value = null);
$response->assertCookie($cookieName, $value = null);
$response->assertPlainCookie($cookieName, $value = null);
$response->assertSessionHas($key, $value = null);
$response->assertSessionHasErrors(array $keys);
$response->assertSessionMissing($key);
$response->assertJson(array $data);
$response->assertJsonFragment(array $data);
$response->assertJsonMissing(array $data);
$response->assertExactJson(array $data);
$response->assertJsonStructure(array $structure);
$response->assertViewIs($value);
$response->assertViewHas($key, $value = null);
```

**JSON API 測試**

### 參考資料

* [Database Testing - Laravel - The PHP Framework For Web Artisans](https://laravel.com/docs/5.4/database-testing)
* [Mocking - Laravel - The PHP Framework For Web Artisans](https://laravel.com/docs/5.4/mocking)
* [Getting Started with PHPUnit in Laravel - Semaphore](https://semaphoreci.com/community/tutorials/getting-started-with-phpunit-in-laravel)
* [PHPUnit – The PHP Testing Framework](https://phpunit.de/)
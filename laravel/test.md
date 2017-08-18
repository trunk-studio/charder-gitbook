# 測試

測試程式產生器

```
php artisan make:test UserControllerTest
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
        $response = $this->get('/api/user');
        $response->assertStatus(200);
    }
}
```

執行測試

```
./vendor/bin/phpunit
```

[Getting Started with PHPUnit in Laravel - Semaphore](https://semaphoreci.com/community/tutorials/getting-started-with-phpunit-in-laravel)
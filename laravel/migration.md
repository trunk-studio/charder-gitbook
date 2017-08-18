# Migrateion

```
// 列出目前所有 Migration 狀態

php artisan migrate:status

// 執行 Migration

php artisan migrate

// 恢復上一版本的 Migration

php artisan migrate:rollback

// 清除所有版本的 Migration

php artisan migrate:reset

// 清除所有版本的 Migration 並重新執行

php artisan migrate:refresh
```

**artisan 指令**

產生 Model 和 Migrateion 檔案

```
php artisan make:model Article -m
```

* -m / --migration


```
php artisan make:migration create_users_table --create="users"
```

```
// 異動資料表欄位資料

php artisan make:migration add_email_to_users_table --table="users"
```

### Model

**app/Article.php**

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

}
```

### migration file

<https://laravel.com/docs/5.4/migrations>

app/database/migrations/2017_08_14_085927_create_articles_table.php

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('articles');
    }
}

```

```php
Schema::create('role_user', function (Blueprint $table) {
    $table->increments('id');
    $table->integer('role_id')->unsigned();
    $table->integer('user_id')->unsigned();
    $table->timestamps();
});
```

### Seed
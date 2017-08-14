# Model - Eloquent ORM

**專有名詞**

* ORM(Object Relational Mapping)
* Eloquent
* Migrateion
* Seed
* query builder

**artisan 指令**

```
php artisan make:model Article -m
```

* -m / --migration

### app/Article.php


```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

}
```

### app/database/migrations/2017_08_14_085927_create_articles_table.php

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}

```

### Timestamps

* created_at
* updated_at

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $connection = 'connection-name';

    public $timestamps = false; // 預設是 true
}


### 建立資料 (Create)

```php
<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    /**
     * 建立文章
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $article = new Article;
        $article->title = $request->title;
        $article->content = $request->content;
        $article->save();
    }
}
```

```php
$article = App\Article::firstOrCreate(['title' => 'Hello World']);
```

```php
// 不會馬上真的存
$article = App\Article::firstOrNew(['title' => 'Hello World']);
```


### 取得資料 (Read)

```php
<?php

use App\Article;

$articles = App\Article::all();

foreach ($articles as $article) {
    echo $article->title;
}
```

```php
$articles = App\Article::where('active', 1)
               ->orderBy('title', 'desc')
               ->take(10)
               ->get();
```


```php
$article = App\Article::find(1);

$article = App\Article::where('active', 1)->first();

$articles = App\Article::find([1, 2, 3]);

$count = App\Article::where('active', 1)->count();

$max = App\Article::where('active', 1)->max('readCount');
```

### 更新 (Update)

```php
$article = App\Article::find(1);
$article->title = 'New Article Title';
$article->save();
```

```php
App\Article::where('active', 1)
          ->update(['title' => 'Hello World']);
```

```php
$article = App\Article::updateOrCreate([
    'title' => 'Hello World',
    'content' => '123456789'
]);
```

### 刪除 (Delete)

```php
$article = App\Article::find(1);
$article->delete();
```

```php
// 單筆
App\Article::destroy(1);

// 多筆
App\Article::destroy([1, 2, 3]);
App\Article::destroy(1, 2, 3);

$deletedRows = App\Article::where('active', 0)->delete();
```

### 序列化

```php
$articleArray = Article::first()->toArray();
$articleJson = Article::first()->toJson();
$articleArray = Article::all()->toArray();
$articleJson = Article::all()->toJson();
```

Laravel 的路由，預設會將回傳的任何資料轉換成字串。

```php
Route::get('/api/articles', function () {
    return Article::all();
});

Route::get('/api/articles/{id}', function ($id) {
    return Article::findOrFail($id);
});
```

## Eloquent 關係


### 一對一

### 一對多

### 多對多


**其他相關檔案**

* config/database.php

----------------------------------------
* 虛刪除
* Scope
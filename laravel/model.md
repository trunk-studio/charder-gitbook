# Model - Eloquent ORM

**專有名詞**

* ORM(Object Relational Mapping)
* Eloquent
* Migrateion
* Seed
* query builder

### Model 產生器

**artisan 指令**

```
php artisan make:model Article -m
```

* -m / --migration

**app/Article.php**

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

}
```

**migration file**

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

### Model 預設屬性

```php
<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // 指定 connection 名稱
    protected $connection = 'connection-name';

    // 指定 table 名稱
    protected $table = 'u_user';

    // 可以被批量賦值的屬性的白名單
    protected $fillable = [ 'userName', 'fullName', 'email', , 'password' ];

    protected $hidden = [ 'password'];

    private $rules = [
        'userName' => 'unique:users,userName',
        'email' => 'unique:users,email'
    ];

    // 時間戳
    public $timestamps = false; // 預設是 true
}
```

**時間戳 (Timestamps)**

* created_at
* updated_at


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

**軟刪除**

```php
Schema::table('users', function ($table) {
    $table->softDeletes();
});
```

```php
$users = App\User::withTrashed()->get();
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

## 事件


**其他相關檔案**

* config/database.php

----------------------------------------
* 虛刪除
* Scope
* withTimestamps
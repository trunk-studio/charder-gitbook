# CRUD

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
$createdUser = User::create([
    'name' => "alincode", 
    'email' => "alincode@gmail.com",
    'password' => bcrypt('123456'),
    'remember_token' => 1
]);
```

```php
$article = Article::firstOrCreate(['title' => 'Hello World']);
```

```php
// 不會馬上真的存
$article = Article::firstOrNew(['title' => 'Hello World']);
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
$articles = Article::where('active', 1)
               ->orderBy('title', 'desc')
               ->take(10)
               ->get();
```


```php
$article = Article::find(1);

$article = Article::where('active', 1)->first();

$articles = Article::find([1, 2, 3]);

$count = Article::where('active', 1)->count();

$max = Article::where('active', 1)->max('readCount');
```

### 更新 (Update)

```php
$article = Article::find(1);
$article->title = 'New Article Title';
$article->save();
```

```php
Article::where('active', 1)
          ->update(['title' => 'Hello World']);
```

```php
$article = Article::updateOrCreate([
    'title' => 'Hello World',
    'content' => '123456789'
]);
```

### 刪除 (Delete)

```php
$article = Article::find(1);
$article->delete();
```

```php
// 單筆
Article::destroy(1);

// 多筆
Article::destroy([1, 2, 3]);
Article::destroy(1, 2, 3);

$deletedRows = Article::where('active', 0)->delete();
```

### 虛刪除

```php
public function up()
{
    Schema::create('articles', function (Blueprint $table) {
        $table->softDeletes();
    });
}
```

```php
namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use SOftDeletes;

    protected $dates = ['deleted_at'];
}
```

**取得被刪除的值**

```php
Article::withTrashed()->get();

if($article->trashed()) {

}

Article::onlyTrashed()->get();
```

**恢復刪除的值**

```php
$article.restore();
```

**強制刪除**

```php
$article.forceDelete();
Article::onlyTrashed().forceDelete();
```
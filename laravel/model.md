# Model - Eloquent ORM

**專有名詞**

* ORM(Object Relational Mapping)
* Eloquent
* query builder

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
    protected $fillable = [ 'userName', 'fullName', 'email', 'password' ];

    // protected $guarded = ['id', 'password']; 
    // protected $guarded = ['*'];

    protected $hidden = [ 'password'];

    private $rules = [
        'userName' => 'unique:users,userName',
        'email' => 'unique:users,email'
    ];

    // 時間戳
    public $timestamps = false; // 預設是 true


    // public $incrementing = false;

    // protected $primaryKey = 'my_primary_column_name';

}
```

**時間戳 (Timestamps)**

* created_at
* updated_at


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


**其他相關檔案**

* config/database.php

----------------------------------------
* Scope
* withTimestamps
* 事件
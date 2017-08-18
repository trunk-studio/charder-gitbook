# Eloquent 關聯

### 一對一

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function profile()
    {
        return $this->hasOne('App\Profile');
        // return $this->hasOne('App\Profile', 'foreign_key', 'profile_key');
    }
}
```

```php
$profile = User::find(1)->profile;
```

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public function user()
    {
        // 應被放置在...
        return $this->belongsTo('App\User');
    }
}
```

<!-- 在這個例子裡，它會自動假設 Profile table 擁有 user_id 外來鍵 -->

**使用 Eloquent 的動態屬性來取得關聯紀錄**

```php
$profile = User::find(1)->profile;
```

### 一對多

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public function phones()
    {
        return $this->hasMany('App\Phone');
        // return $this->hasMany('App\Phone', 'foreign_key', 'phone_key');
    }
}
```

```php
$phones = App\Profile::find(1)->phones;

foreach ($phones as $phone) {

}
```

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    public function profile()
    {
        return $this->belongsTo('App\Profile');
    }
}
```

```php
$phones = App\Profile::find(1)->phones()->first();
```

### 多對多

#### User

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany('App\Role');
        // return $this->belongsToMany('App\Role', 'user_roles');
        // return $this->belongsToMany('App\Role', 'user_roles', 'user_id', 'role_id');
    }
}
```


```php
$user = App\User::find(1);

foreach ($user->roles as $role) {

}
```

```php
$roles = App\User::find(1)->roles()->orderBy('name')->get();
```

#### Role

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
```

<!-- 如果你想要樞紐表自動維護 created_at 和 updated_at 時間戳，在定義關聯方法時加上  withTimestamps 方法 -->

```php
return $this->belongsToMany('App\Role')->withTimestamps();
```

 <!-- 
 * [資料庫：查詢建構器](https://laravel.tw/docs/5.1/queries)  
 -->


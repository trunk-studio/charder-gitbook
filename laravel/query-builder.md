# 查詢產生器 (Query Builder)

<!-- https://laravel.tw/docs/5.1/queries  -->

<https://laravel.com/docs/5.5/queries>

```php
namespace App\Http\Controllers;

use DB;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {
        $users = DB::table('users')->get();
        return $users;
    }
}
```

**原生 SQL 寫法**

```php
$user = DB::table('users')->where('name', 'John')->first();

$email = DB::table('users')->where('name', 'John')->value('email');
```

**Eloquent 寫法**

```php
$user = User::find(1);
$user->posts()->where('active', 1)->get();
```

### 取得資料

```php
User::all();
User::get();
User::first();
User::firstOrFail();
User::find(1);
User::findOrFail(1);
```

### Where

```php
$users = DB::table('users')->where('votes', '=', 100)->get();
$users = DB::table('users')->where('votes', 100)->get();

$users = DB::table('users')
                ->where('votes', '>=', 100)
                ->get();

$users = DB::table('users')
                ->where('name', 'like', 'T%')
                ->get();

$users = DB::table('users')
                ->where('votes', '>', 100)
                ->orWhere('name', 'John')
                ->get();

$users = DB::table('users')->whereBetween('votes', [1, 100])->get();
$users = DB::table('users')->whereNotBetween('votes', [1, 100])->get();

$users = DB::table('users')->whereIn('id', [1, 2, 3])->get();
$users = DB::table('users')->whereNotIn('id', [1, 2, 3])->get();
$users = DB::table('users')->whereNull('updated_at')->get();

$users = DB::table('users')->whereNotNull('updated_at')->get();

$users = User::where('name', 'alincode')->get();
```

**進階**

```php
DB::table('users')
    ->where('name', '=', 'alincode')
    ->orWhere(function ($query) {
        $query->where('votes', '>', 100)
                ->where('title', '<>', 'Admin');
    })
    ->get();
```

```sql
select * from users where name = 'alincode' or (votes > 100 and title <> 'Admin')
```


```php
DB::table('users')
    ->whereExists(function ($query) {
        $query->select(DB::raw(1))
                ->from('orders')
                ->whereRaw('orders.user_id = users.id');
    })
    ->get();
```


```sql
select * from users
    where exists (
        select 1 from orders where orders.user_id = users.id
    )
```

```php
DB::table('users')
     ->join('role', 'users.id', '=', 'Role.user_id')
    ->get();
```


```sql
select * from users
    where exists (
        select 1 from orders where orders.user_id = users.id
    )
```
# Auth 身份驗證



### Route會員註冊

```
Route::get('/user', 'RegisterController@create');
```

RegisterController顯示會員註冊View Blade

```
namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

use Session;
use Redirect;

class RegisterController extends Controller
{
    use RegistersUsers;

    //默認導入中間層guest，確認是否登入過
    public function __construct()
    {
        $this->middleware('guest');
    }

    //顯示註冊會員畫面View Blade
    public function create()
    {
        return view('auth.register');
    }
}
```

加入此行在RegisterController類別下的全域變數內，在登入成功後會自動跳轉到此路徑

```
protected $redirectTo = '/home';
```

在RegisterController內加入 “註冊會員”function store，且在資料庫users資料表新建 型別var\_char\(191\) 的active權限欄位

```
    protected function store(array $data)
    {
        $validator = Validator::make($data, [
            'user_name' => 'required|string|max:255',
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        //如果資料防呆驗證不通過，則跳回首頁
        if (!$validator->passes()) 
        {
            return Redirect::to('/');
        }

        //新建會員資料
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'active' => 'employee',
        ]);
    }
```

到resources/views資料夾內新增auth資料夾裡面新增register.blade.php

### Route會員登入

```
Route::middleware('auth:api')->get('/user', 'UserController@login');
```

```
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{

    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

}
```

產生Auth的Views Blade在`resources/views/auth`路徑內 和 Controller：RegisterController會員註冊、LoginController會員登入、ForgotPasswordController忘記密碼、ResetPasswordController重置密碼

```
php artisan make:auth
```




# Auth 身份驗證

### Route會員註冊

在routes的web.php加入

```
Route::get('register', [ 'as' => 'register', 'uses' => 'RegisterController@create']);
```

RegisterController顯示會員註冊View Blade

```
namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;

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
        return view('register');
    }
}
```

處理當會員註冊頁的表單送出post時，在routes的web.php加入

```
Route::post('register', [ 'as' => 'register', 'uses' => 'RegisterController@store']);
```

在RegisterController內加入 “註冊會員”store function，且在資料庫users資料表新建 型別var\_char\(191\) 的active權限欄位

```
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'user_name' => 'required|string|max:255',
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    protected function store(Request $request)
    {
        //新建會員資料
        return User::create([
            'user_name' => $request->user_name,
            'full_name' => $request->full_name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
    }
```

到resources/views資料夾內新增register.blade.php

```
<form class="form-horizontal" method="POST" action="{{ route('register') }}">
    {{ csrf_field() }}

    <div class="form-group{{ $errors->has('user_name') ? ' has-error' : '' }}">
        <label for="user_name" class="col-md-4 control-label">user_name</label>

        <div class="col-md-6">
            <input id="user_name" type="text" class="form-control" name="user_name" value="{{ old('user_name') }}" required autofocus>

            @if ($errors->has('user_name'))
                <span class="help-block">
                    <strong>{{ $errors->first('user_name') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group{{ $errors->has('full_name') ? ' has-error' : '' }}">
        <label for="full_name" class="col-md-4 control-label">full_name</label>

        <div class="col-md-6">
            <input id="full_name" type="text" class="form-control" name="full_name" value="{{ old('full_name') }}" required autofocus>

            @if ($errors->has('full_name'))
                <span class="help-block">
                    <strong>{{ $errors->first('full_name') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
        <label for="email" class="col-md-4 control-label">E-Mail Address</label>

        <div class="col-md-6">
            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
        <label for="password" class="col-md-4 control-label">Password</label>

        <div class="col-md-6">
            <input id="password" type="password" class="form-control" name="password" required>

            @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group">
        <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

        <div class="col-md-6">
            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
        </div>
    </div>

    <div class="form-group">
        <div class="col-md-6 col-md-offset-4">
            <button type="submit" class="btn btn-primary">
                Register
            </button>
        </div>
    </div>
</form>
```

### Route會員登入

在routes的web.php加入

```
Route::get('login', [ 'as' => 'login', 'uses' => 'LoginController@index']);
```

LoginController顯示會員登入View Blade

```
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Auth;

class LoginController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    //顯示登入會員畫面View Blade
    protected function index()
    {
        return view('layouts.login');
    }
}
```

加入此行在LoginController類別下的全域變數內，在登入成功後會自動跳轉到此路徑

```
protected $redirectTo = '/home';
```

此指令會自動產生Auth的Views Blade在`resources/views/auth`路徑內 和 Controller：RegisterController會員註冊、LoginController會員登入、ForgotPasswordController忘記密碼、ResetPasswordController重置密碼

```
php artisan make:auth
```




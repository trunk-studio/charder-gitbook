# Auth 身份驗證

產生Auth的Views Blade在`resources/views/auth`路徑內 和 Controller：RegisterController會員註冊、LoginController會員登入、ForgotPasswordController忘記密碼、ResetPasswordController重置密碼

```
php artisan make:auth
```

Route會員註冊

RegisterController會員註冊

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

    protected $redirectTo = '/home';

    //默認導入中間層guest，確認是否登入過
    public function __construct()
    {
        $this->middleware('guest');
    }
}
```

在RegisterController內加入 “註冊會員”function store，且在資料庫users資料表新建 型別var\_char\(255\) 的active權限欄位

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

        //判斷是否曾註冊過
        $has_user = DB::table('users')->where('EMAIL', $request->email)->get();
        if ($has_user != null || !empty($has_user)){
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

Route中加入

```
Route::middleware('api', 'auth')->delete('/user', 'UserController@index');
```




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

    //驗證會員
    protected function validator(array $data)
    {user_name full_name email password


        return Validator::make($data, [
            'user_name' => 'required|string|max:255',
            'user_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }
}
```

在RegisterController內加入 “註冊會員”

```
    protected function store(array $data)
    {
        $validator = Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        //如果資料防呆驗證不通過
        if (!$validator->passes()) 
        {
            return Redirect::to('/');
        }

        $has_user = DB::table('users')->where('EMAIL', $request->email)->get();
        if ($has_user != null || !empty($has_user)){
            return Redirect::to('/');
        }
        //
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
```




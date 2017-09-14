# Auth  記住我

如果你想要提供「記住我」的功能，你需要傳入一個布林值到 attempt 方法的第二個參數，這會永久保持使用者的 session 直到登出。

1.確認User 是否擁有remember\_token欄位

2.LoginController加入

```
protected function login(Request $request)
{
    $remember = $request->remember;
    if (Auth::attempt(['email' => $request->email, 'password' => $request->password], $remember)) {
        // Authentication passed... and 這個使用者被記住了...
        return Redirect::to('/home');
    }
    return Redirect::to('/login')->withErrors([
        'fail' => '登入失敗',
    ]);
}
```

3.如果你是被記住的使用者，你可以使用 viaRemember 方法來確認這個使用者是否使用「記住我」 cookie 來做認證：


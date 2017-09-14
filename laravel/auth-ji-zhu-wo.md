# Auth  記住我

如果你想要提供「記住我」的功能，你需要傳入一個布林值到 attempt 方法的第二個參數，這會永久保持使用者的 session 直到登出。

1.確認User 是否擁有remember\_token欄位

2.

```
if (Auth::attempt(['email' => $email, 'password' => $password], $remember)) {
    // 這個使用者被記住了...
}
```




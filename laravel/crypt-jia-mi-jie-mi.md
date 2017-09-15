# Crypt 加密解密

在routes/web.php內加入

```
Route::get('/crypt', function () {
    // 加密
    $original_data = 'crypt detail';
    $encrypt_data = Crypt::encrypt($original_data);
    // 解密
    $decrypted = Crypt::decrypt($encrypt_data);
    return [
        $encrypt_data,
        $decrypted
    ];
});
```




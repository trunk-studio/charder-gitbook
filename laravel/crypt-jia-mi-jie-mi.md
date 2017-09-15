# Crypt 加密解密

[https://laravel.tw/docs/5.3/encryption](https://laravel.tw/docs/5.3/encryption)

1.設定說明

Laravel 在做「加密與解密」演算法時，會使用 config/app.php 中的 key 值\(也就是app\_key\)去當作加解密的 salt，自己的應用需要設定自己的 key 值，若沒有設定的話被加密過的值還是有可能被暴力破解出來，所以要記得去設定，而這個 key 值若變更了，雜湊的驗證也不會相同

2.在routes/web.php內加入

```
Route::get('/crypt', function () {
    $original_data = 'crypt detail';
    // 加密
    $encrypt_data = Crypt::encrypt($original_data);
    // 解密
    $decrypted = Crypt::decrypt($encrypt_data);
    return [
        $encrypt_data,
        $decrypted
    ];
});
```

### md5 比較密文 {#使用-md5-比較密文}

```
Route::get('/crypt', function () {
    $original_data = 'crypt detail';
    // 第 1 次使用 md5 加密的資料
    $md5_hash_data1 = md5($original_data);
    // 第 2 次使用 md5 加密的資料
    $md5_hash_data2 = md5($original_data);
    // 資料相同
    // true
    var_dump($md5_hash_data1 === $md5_hash_data2);
});
```










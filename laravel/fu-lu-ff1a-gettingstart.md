# 附錄：Getting started

1.檢查.env的DB是否設定

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel-test
DB_USERNAME=root
DB_PASSWORD=
```

2.檢查.env的APP\_KEY是否設定

```
EXCEPTION_DISPLAY_SWITCH=false
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:TGWDZvNzK2aezGCR0XThQczkq1dhaNgR/SsbfpDSnEo=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost
```

如未設定，則在命令字元輸入

```
php artisan key:generate
```

3.開放public、storage資料夾755以上的權限

Linux / Unix / Mac

```
sudo chmod 777 public/
sudo chmod 777 storage/
```

Windows

```
cacls public/ /g everyone:f
cacls storage/ /g everyone:f
```

4.使用migrate建立資料庫

```
php artisan migrate
```

如果是使用xampp之類的懶人架站包，請記得在database/migrations中，所有有使用到primary、index、unique索引的欄位內給予191長度限制

```
    $table->string('email', 191)->unique();
```

5.使用db:seed建立預設資料

```
php artisan db:seed
```




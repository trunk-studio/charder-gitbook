# 附錄：Getting started

0.如果是第一次新建專案

確定是否安裝過composer套件

[https://getcomposer.org/doc/00-intro.md](https://getcomposer.org/doc/00-intro.md)

用composer下載laravel框架

```
composer global require "laravel/installer=~1.1"
```

注意！不可使用` laravel new blog` 來創建專案會模組遺失，必須使用下列指令

```
composer create-project --prefer-dist laravel/laravel blog
```

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
$table->string('email',191)->primary();
$table->string('email',191)->index();
$table->string('email', 191)->unique();
```

5.使用db:seed建立預設資料

```
php artisan db:seed
```

6.檢查config/app.php設定

[https://scriptmarks.com/php-%E6%99%82%E9%96%93%E6%B6%B5%E6%95%B8/](https://scriptmarks.com/php-時間涵數/)

```
//預設為UTC
'timezone' => 'Asia/Taipei',

//laravel5以下預設為AES-128-CB
//laravel5以上預設為AES-256-CB
'cipher' => 'AES-256-CBC',
```

7.安裝專案套件

```
composer install
```

如安裝過程出現套件錯誤，可嘗試更新看看套件是否有最新版

```
composer update
```

8.啟動localhost

記得要啟動web server 和 db server

```
php artisan serve
```




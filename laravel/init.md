### 初始化專案

**透過 Composer 建立專案**

使用 Composer 的 create-project 功能來安裝 Laravel
```
composer create-project laravel/laravel laravel-sandbox --prefer-dist
```

* –prefer-dist
 
 <!-- 此參數意思是下載用於 distribution 的穩定版本，而不是正在開發中的版本，對於應用來說，穩定版本較適當。 -->

<!--shopt -s dotglob-->

**透過 Laravel 安裝器，建立專案**

```
laravel new laravel-sandbox
```

### 修改 apache 設定檔

```
sudo vi /etc/apache2/sites-enabled/001-cloud9.conf
```

**Mac**

```
// 將這行
DocumentRoot /home/ubuntu/workspace

// 修改為這行
DocumentRoot /home/ubuntu/workspace/laravel-sandbox/public
```

**Window**

```
DocumentRoot "C:\xampp\htdocs\laravel-sandbox\public"
```

### 設定 MySQL

```
mysql-ctl cli
CREATE DATABASE laravel-sandbox CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

```
vi .env
```

```
DB_HOST=localhost
DB_DATABASE=laravel-sandbox
DB_USERNAME=root
DB_PASSWORD=
```

**使用 PHP 內建的開發伺服器來啟動專案**

```
php artisan serve
```

<!--https://laravel.tw/docs/4.2/quick-->
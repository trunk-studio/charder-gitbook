# 安裝 C9 環境 for PHP

<https://c9.io/>

### 安裝 Composer

套件管理工具

<!-- 解釋什麼是 composer -->

```
php -r "readfile('https://getcomposer.org/installer');" | php
// 測試是否成功
php composer.phar
sudo composer update
```

**安裝 laravel**

```
composer global require "laravel/installer"
```

### 延伸閱讀

* [小信豬的原始部落: BASH 打造自己的 shell 環境 (2) - Shell Option](http://godleon.blogspot.tw/2007/05/linux-bash-process-file-alias-shell.html)
* [如何在OS X安裝Homestead? | 點燈坊](http://oomusou.io/laravel/homestead/homestead-osx/)
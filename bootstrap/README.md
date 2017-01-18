# Bootstrap 入門

<!--
* 回顧上次上課的內容，抽查小考。
  * 語意元素
  * Media query
-->

* Twitter 在 2010 年 8 月已開發原始碼的方式，釋出 Bootstrap。
* 是一個行動優先設計的前端框架
* 範圍包含了 HTML、CSS、Javascript

**視埠 (viewport)**

裝置或監視器在網頁的可見區域。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**認識檔案結構**

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   ├── bootstrap-theme.min.css
│   └── bootstrap-theme.min.css.map
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```

**安裝 Bootstrap**

* CDN
* [下載 bootstrap 原始檔](https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip)

**基礎樣板**

* [bootstrap - basic template](http://getbootstrap.com/getting-started/#template)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

**練習題**

* 建立一個自己名字的資料夾叫 xxx-bootstrap-demo，在剛剛新建的資料夾下，建立 bootstap 基本樣板，取名叫 index.html，並上傳到 git repo。

**延伸閱讀**

* [Bootstrap Get Started](http://www.w3schools.com/bootstrap/bootstrap_get_started.asp)
* [Bootstrap · The world’s most popular mobile-first and responsive front-end framework.](http://getbootstrap.com/)
* [Bootstrap 3 中文手冊 · 世界最受歡迎的行動優先和自適應前端框架。 - KKBruce](https://kkbruce.tw/bs3)
* [Bootstrap 3 Tutorial](http://www.w3schools.com/bootstrap/default.asp)

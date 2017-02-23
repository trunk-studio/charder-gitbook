# 佈景主題 (Theme)

[Bootstrap Theme - Source Code](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_theme.scss)

<!--互動問題：layout vs theme-->

### 什麼是佈景主題

Theme 是定義會影響到網站主體視覺的設定，例如

* menu 的視覺
* navbar 的視覺
* border-radius、陰影(box-shadow)、border-color
* 整體配色：background-color, panel-default-heading-bg
* alert-styles: $alert-success-bg, $alert-info-bg, $alert-warning-bg, $alert-danger-bg

### 安裝 SCSS 版的 Bootstrap

* [Github - Bootstrap SCSS](https://github.com/twbs/bootstrap-sass)

```
npm i bootstrap-sass
bower i bootstrap-sass
```

**延伸閱讀**

* [Bower 管理網站套件的好工具 | 小惡魔 - 電腦技術 - 工作筆記 - AppleBOY](https://blog.wu-boy.com/2013/01/bower-is-a-package-manager-for-the-web/)
<!--用 NPM 安裝的沒有附 JQuery？-->

### 挑選佈景主題原則

* 確認版型支援 Bootstrap，並是期望中的版本。
* 版型在所有裝置大小的呈現結果都滿意

## 客製化佈景主題

### 方法一：透過官方線上工具

http://getbootstrap.com/customize/

* config.json

### 方法二：自行編譯

1. index.html
1. download _bootswatch.scss, _variables.scss
1. bower i bootstrap-sass
1. create all.scss

```
@import "myVariable"; // copy from _variable.scss
// all of import
@import "../bower_components/bootstrap-sass/assets/stylesheets/bootstrap";
// 處理 image url
@import "../bower_components/bootstrap-sass/assets/stylesheets/bootstrap-compass";
@import "custom";
```

1. build sass

### 練習題

* 編譯客製化佈景主題，並修改其中變數。

### 其他資源

**購買佈景主題**

* [Responsive Bootstrap Templates & Themes | ShapeBootstrap](https://shapebootstrap.net/)
* [WrapBootstrap - Bootstrap Themes & Templates](https://wrapbootstrap.com/)
* [Bootstrap HTML5 Website Templates - TemplateGarden](https://www.templategarden.com/)
* [Website Templates & Themes from ThemeForest](https://themeforest.net/)
* [Envato Market](https://market.envato.com/)

**HTML5版型**

* [HTML5 UP! Responsive HTML5 and CSS3 Site Templates](https://html5up.net/)

**免費板型**

* [Bootswatch: Free themes for Bootstrap](https://bootswatch.com/)
* [SB Admin 2 - Free Bootstrap Admin Theme - Start Bootstrap](https://startbootstrap.com/template-overviews/sb-admin-2/)
* [20 Free Bootstrap 3 Admin Dashboard Templates 2016 - Colorlib](https://colorlib.com/wp/free-bootstrap-admin-dashboard-templates/)

### 線上工具

[Bootstrap Live Customizer](http://bootstrap-live-customizer.com/)

**延伸閱讀**

* [Theme Template for Bootstrap](https://kkbruce.tw/bs3/Examples/theme)

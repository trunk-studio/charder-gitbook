# 元件 (Components)

![components](http://getbootstrap.com/assets/img/components.png)

### 導覽列 (Navigation Bar)

**類別**

* navbar
* navbar-default
* navbar-inverse
* navbar-header
* navbar-brand
* navbar-nav
* navbar-right
* navbar-left


```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">LOGO</a>
    </div>
    <div class="navbar-left">
      <ul class="nav navbar-nav">
        <li><a href="#">Menu1</a></li>
        <li><a href="#">Menu2</a></li>
        <li><a href="#">Menu3</a></li>
        <li><a href="#">Menu4</a></li>
        <li><a href="#">Menu5</a></li>
      </ul>
    </div>
  </div>
</nav>
```

[官方文件傳送門](http://getbootstrap.com/components/#navbar)

### Breadcrumbs 麵包屑

```html
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
</ol>
```

[官方文件傳送門](http://getbootstrap.com/components/#breadcrumbs)

### Thumbnails

```html
<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="..." alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>
```

[官方文件傳送門](http://getbootstrap.com/components/#thumbnails)

### 分頁 Pagination

```
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

[官方文件傳送門](http://getbootstrap.com/components/#pagination-default)

## 練習題

* 建立一個完整 layout 的網站
  * 新聞頁
    * 包 container
    * 加 navbar
    * 加 image RWD
    * 加漢堡包
    * 加 icon
    * 加麵包屑
  * 商品列表頁
    * Thumbnails
    * 分頁 (Pagination)

<!--

預告下次上課，我們將介紹更多的元件，及更多的練習，並開始使用 Javascript，將我們的網頁動起來，並帶到一點 CSS 預處理器的觀念，及如何使用佈景主題。

-->

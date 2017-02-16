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

### Navbar Button

```
<button type="button" class="btn btn-default navbar-btn">Sign in</button>
```

[Bootstrap - Components navbar buttons](http://getbootstrap.com/components/#navbar-buttons)

<!--漢堡包也在這-->

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

```html
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

### List group

```html
<!-- Linked items -->
<div class="list-group">
  <a href="#" class="list-group-item active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item">Morbi leo risus</a>
  <a href="#" class="list-group-item">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item">Vestibulum at eros</a>
</div>
```

[官方文件傳送門](http://getbootstrap.com/components/#list-group)

### Panel 面板

```html
<div class="panel panel-default">
  <div class="panel-body">
    Panel content
  </div>
  <div class="panel-footer">Panel footer</div>
</div>
```

[官方文件傳送門](http://getbootstrap.com/components/#panels)

## 練習題

* 建立一個完整 layout 的網站
  * 新聞頁
    * 包 container
    * 加 navbar
    * 加 image RWD  (上次教到這裡)
    * 加漢堡包
    * 加 icon
    * 加麵包屑
    * 加 navbar dropdown
  * 商品列表頁
    * Thumbnails
    * 分頁 (Pagination)，需置中
    * List group
    * 新增 Carousel 和 Panel
    * 新增 Navbar Button 和基本可動的 modal
    * 將 modal 內容，改寫成 login 表單

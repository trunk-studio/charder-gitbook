# 元件 (Components)

![components](http://getbootstrap.com/assets/img/components.png)

**導覽列 (Navigation Bar)**

```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">LOGO</a>
    </div>
    <div class="navbar">
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

**導覽列 (Navigation Bar) 與下拉式選單 (Dropdown)**

```html
<li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu1<span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="#">Sub Menu1</a></li>
    <li><a href="#">Sub Menu2</a></li>
  </ul>
</li>
```

**Jumbotron**

```html
<div class="jumbotron">
  <h1>jumbotron title</h1>
  <p>desc</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">more</a></p>
</div>
```

## 練習題

![sample](./assets/sample.png)

* 建立一個完整 layout 的網站

**延伸閱讀**

* [Bootstrap - Navigation Bar](http://getbootstrap.com/components/#navbar)
* [Bootstrap - Jumbotron](http://getbootstrap.com/components/#jumbotron)

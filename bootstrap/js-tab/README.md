# 頁籤 Tab


### 基本結構

* Nav Tabs 區塊
  * 加入 `data-toggle="tab"`，將 href 值對應到 unique 的 ID。
* Tab Content 區塊
  * 根元素命名為 `.tab-content`
  * 加入子元素並命名為 `.tab-pane`，為每個 tab-pane 定義 unique 的 ID。

```
<div>

  <!-- Nav Tabs -->
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
  </ul>

  <!-- Tab content -->
  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>HOME</h3>
      <p>Some content.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Some content in menu 1.</p>
    </div>
  </div>

</div>
```

### Fade 特效

在每個 `tab-pane` 加入 `fade`，及第一個 `tab-pane` 加入 `in`。

```
<div class="tab-content">
  <div role="tabpanel" class="tab-pane fade in active" id="home">...</div>
  <div role="tabpanel" class="tab-pane fade" id="profile">...</div>
  <div role="tabpanel" class="tab-pane fade" id="messages">...</div>
  <div role="tabpanel" class="tab-pane fade" id="settings">...</div>
</div>
```

### 文件

**Plugin Classes**

* .nav nav-tabs
* .nav-justified
* .tab-content
* .tab-pane

**Methods**

```
$('#someTab').tab('show')
```

**Events**

* hide.bs.tab
* show.bs.tab
* hidden.bs.tab
* shown.bs.tab

```
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
```

* [w3cschool Bootstrap - JS Tab demo](http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_tab&stacked=h)

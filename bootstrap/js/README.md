# Bootstrap Javascript

## 概念

* [Bootstrap 接受最低 JQuery 版本](https://github.com/twbs/bootstrap/blob/v3.3.1/bower.json)

### Plugin

<!--
 先到 w3cschool demo 一下有哪些工具可以使用。
-->

* JS Affix
* JS Alert
* JS Button
* JS Carousel
* JS Collapse
* JS Dropdown
* JS Modal
* JS Popover
* JS Scrollspy
* JS Tab
* JS Tooltip

### 自訂屬性

> 自訂資料屬性是用於儲存頁面或應用程式私有的自訂資料，在沒有適合的屬性或元素的情況下。 >>> W3C 規範。

規則：`data-*`

**bootstrap 內建的自訂屬性**

* data-target


## 互動視窗 Modals

### 注意事項

* 不支援同時多重視窗 (Multiple open modals not supported)
* 建議將 html 放置在 body 的直接子元素，避免影響到其他元件。

### 基本 modal 結構

![](./assets/modal.png)

```html
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">觸發 Modal</button>

<!-- Modal 相關程式碼 -->
<div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">

    <!-- Modal 內容 -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal 標題</h4>
      </div>
      <div class="modal-body">
        <p>Model 內的文字.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
      </div>
    </div>
  </div>
</div>
```

* [w3cschool demo](http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal&stacked=h)

### 控制視窗大小 (Optional sizes)

在 modal-dialog 層加入 `modal-lg` 或 `modal-sm`。

```htmls
<div class="modal-dialog modal-lg">
  <div class="modal-content">
  </div>
</div>
```

### 控制動畫效果 (animation)

* fade

```html
<div class="modal fade" id="myModal" role="dialog">
  ...
</div>
```

### 進階 modal

**透過 data 屬性 trigger**

加 html 內

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
```

或

**透過 JS trigger**

```html
<button type="button" class="btn btn-primary" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
```

```js
$("#exampleModal").modal()
```

```js
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever');
  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
})
```

### 文件閱讀方式

* [官方文件](http://getbootstrap.com/javascript/#modals-related-target)
* [w3cschool bootstrap modal](http://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp)


**The Modal Plugin Classes**

* modal
* modal-content
* modal-header
* modal-body
* modal-footer
* modal-sm
* modal-lg
* fade

**Modal Options**

```
var options = {
  keyboard: false
};

$('#myModal').modal(options);
```
**Modal Methods**

* modal(options)
* modal('toggle')
* modal('show')
* modal('hide')

```
$('#myModal').modal('show')
```
**Modal Events**

* show.bs.modal
* shown.bs.modal
* hide.bs.modal
* hidden.bs.modal

```
$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
})
```

### 範例

**範例一：Login Modal**

[w3cschool Login Modal demo](http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal2&stacked=h)

## 下拉式選單 Dropdown



## 延伸閱讀

* [Bootstrap - Javascript](http://getbootstrap.com/javascript/)

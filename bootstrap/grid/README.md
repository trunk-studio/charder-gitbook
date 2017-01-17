# 網格 (Grid)

![devices](http://getbootstrap.com/assets/img/devices.png)

以行動為優先的流動格線系統，並且隨著設備或可視區域大小縮放，格現系統會自動擴大最大至 12 個欄位。

### Grid 類別

| 標記名稱        | 銀幕尺寸           | 裝置  |
| :------------- | :--------------- | :---- |
| xs             | 768 px 以下       | 手機  |
| sm             | 768 px ~ 992 px  | 平板  |
| md             | 992 px ~ 1200 px | 桌機  |
| lg             | 1200 px 以上      | 投影機 / 電視 |

### 基本 class

* row
* col-md-4
* col-sm-6
* col-xs-12

```html
<div class="row">
  <div class="col-sm-6">
    區塊一
  </div>
  <div class="col-sm-6">
    區塊二
  </div>
</div>
```

### Offsetting columns

* col-md-offset-4

### Nesting columns

![](assets/nesting-columns.png)

```html
<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-xs-8 col-sm-6">
        Level 2: .col-xs-8 .col-sm-6
      </div>
      <div class="col-xs-4 col-sm-6">
        Level 2: .col-xs-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
```

### 練習題

* 實作具有 RWD 的兩列三欄式顯示區塊

**延伸閱讀**

* [Bootstrap - CSS Grid](http://getbootstrap.com/css/#grid)
* [Bootstrap - Grid Example](http://getbootstrap.com/examples/grid/)
* [w3schools - Bootstrap Grid System](http://www.w3schools.com/bootstrap/bootstrap_grid_system.asp)

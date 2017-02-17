# 可改善

### 範例一

**原始**

```
 @mixin app-background() {
    background-image: url($app-image-path + "/background.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
```

```
.page-background {
    @include app-background();
    left: 0;
    top: 0;
    overflow: hidden;
}
```

**改良後**

### 練習題：利用學到的 CSS pattern 設計下方圖片的 CSS

![](assets/modal.png)

<!--
* modal component
* modal header, content, footer
* button active, button no-active
* button-lg, button-sm, button-md, button-xs
-->
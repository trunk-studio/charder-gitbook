# 錯誤示範

### 範例一

**原始**

```
 @mixin app-background() {
    background-image: url("/background.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.page-background {
    @include app-background();
    left: 0;
    top: 0;
    overflow: hidden;
}
```

練習題：重新改寫成繼承

* [SASS: differences between mixins, extends and placeholders](http://krasimirtsonev.com/blog/article/SASS-mixins-extends-and-placeholders-differences-use-cases)
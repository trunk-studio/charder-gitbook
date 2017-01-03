# 媒體查詢(Media Queries)

* 讓網頁可以針對不同的媒體，形式定義不同的樣式。
* 好處是不需要為不同設備寫各自獨立的樣式表

### 常見的 Media 的種類

* all: 適用所有媒體裝置
* screen: 螢幕
* projection: 投影機
* print: 列印

### 範例

**範例一：多種 Media**

* 用`逗號`隔開
* partrait: 直立式

```css
@media screen and (orientation:portrait), projection and(orientation:portrait){
    #back{
        color:red;
    }
}
```

**範例二**

```css
@media all and(max-width:400px){
    #back{
        color:red;
    }
}
```

**範例三**

```css
@media screen and (max-width: 699px) and (min-width: 520px) {
    ul li a {
        padding-left: 30px;
        background: url(email-icon.png) left center no-repeat;
    }
}
```

http://www.w3schools.com/css/css3_mediaqueries_ex.asp

**練習題**

* 將「聯絡我們」表單，改成可以相容 RWD 格式。

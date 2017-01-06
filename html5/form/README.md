# 表單 (form)

**html5基本宣告**

```
<!DOCTYPE html>
<html>
<head>
<title>標題</title>
</head>
<body>
<form action="#">
  <fieldset>
    <legend>客戶滿意度調查表</legend>
    <label for="company">公司名稱:</label><input type="text" name="company" id="company"><br>
    <label for="name">姓名:</label><input type="text" name="fullname" id="name"><br>
    <label for="comment">意見:</label><textarea name="comment" rows="4" cols="50" id="comment"></textarea><br>
  </fieldset>
</form>
</body>
</html>
```

**加入新的 input type**

```
<input type="email" name="email">
```

* email
* url
* number
* range
* Date pickers
  * date - 選取日、月、年
  * month - 選取月、年
  * week - 選取周和年
  * time - 選取時間（小時和分鐘）
  * datetime - 選取時間、日、月、年（UTC 時間）
  * datetime-local - 選取時間、日、月、年（本地時間）
* search
* tel

**加入HTML5屬性**

* placeholder：提供可描述輸入字段預期值的提示信息
* max
* min
<!--
* pattern: e.g `pattern="[A-Za-z]{3}"`
-->

**練習題**

* 依照下面的圖示，建立一個「客戶滿意度調查表」表單，並使用新的 input 元素的檢查功能。

![](./assets/form.png)

<!--
<form action="#">
  <fieldset>
    <legend>客戶滿意度調查表</legend>
    <label>公司名稱:</label><input type="text" name="company"><br>
    <label>姓名:</label><input type="text" name="fullname"><br>
    <label>信箱:</label><input type="email" name="email"><br>
    <label>電話:</label><input type="tel" name="tel"><br>
    <label>年齡:</label><input type="number" name="age" min="1" max="100" ><br>
    <label>blog:</label><input type="url" name="url"><br>
    <label>購買日期:</label><input type="date" name="date"><br>
    <label>意見:</label><textarea name="comment" rows="4" cols="50"></textarea><br>
    <input type="submit" value="送出表單">
  </fieldset>
</form>
-->

<!--
body {
  padding: 20px;
}
label{
  width:70px;
}
-->

**問題**

* 錯誤檢查的驗證時間點是？

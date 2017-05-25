# Selenium IDE

**安裝 Selenium IDE**

[Selenium IDE :: Firefox 附加元件](https://addons.mozilla.org/zh-TW/firefox/addon/selenium-ide/)

## UI 功能

### 功能列 (Toolbar)

![](http://www.seleniumhq.org/docs/_images/chapt3_img06_IDE_features.png)

快速 / 慢速執行

![](http://www.seleniumhq.org/docs/_images/chapt3_img07_Speed_Control.png)

執行 Test Suit

![](http://www.seleniumhq.org/docs/_images/chapt3_img08_Run_All.png)

執行 Test Case

![](http://www.seleniumhq.org/docs/_images/chapt3_img09_Run.png)

錄影 (Record)

![](http://www.seleniumhq.org/docs/_images/chapt3_img15_Record.png)

逐步執行

![](http://www.seleniumhq.org/docs/_images/chapt3_img12_Step.png)

暫停 / 恢復

![](http://www.seleniumhq.org/docs/_images/chapt3_img10_Pause.png)

### 面板

**Log**

![](http://www.seleniumhq.org/docs/_images/chapt3_img18_Bottom_Box.png)

**使用文件**

![](http://www.seleniumhq.org/docs/_images/chapt3_img19_Bottom_Box_Ref.png)

**測試案例面板 (Test Case Pane)**

![](http://www.seleniumhq.org/docs/_images/chapt3_img16_Table_Format.png)

## 錄製一個測試案例

操作 Selenium IDE 就像錄影機，在開始「錄製」後，在瀏覽器操作網站的動作就會被捕捉，產生測試案例（Test Case）的內容。錄製完成後，可以用「播放」重新把網站操作過程重播一次。

這是使用 Selenium 進行網站自動化的基礎，以 Google 搜尋為例，建立一組測試案例包含：

1. 前往 <https://www.google.com.tw> 網址
1. 在文字輸入框輸入 `selenium ide`
1. 然後按下**Google 搜尋**按鈕
1. 取得搜尋結果，檢查結果是否包含預期的內容

### HTML 原始碼

```html
<input class="gsfi" id="lst-ib" maxlength="2048" name="q" autocomplete="off" title="搜尋" value="" aria-label="搜尋" aria-haspopup="false" role="combobox" aria-autocomplete="both" dir="ltr" spellcheck="false" type="text">
```

```html
<input value="Google 搜尋" aria-label="Google 搜尋" name="btnK" jsaction="sf.chk" type="submit">
```

<!-- 開啟 Firebug 解說 -->

### 錄製一個自動填寫表單的程式

可供測試的網站：
<http://bit.ly/watir-example>

![](assets/ex01.png)


### 延伸閱讀

* [Selenium-IDE — Selenium Documentation](http://docs.seleniumhq.org/docs/02_selenium_ide.jsp)

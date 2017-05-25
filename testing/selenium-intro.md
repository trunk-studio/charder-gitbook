# 介紹 Selenium

* 免費使用 (Open source project)
* 可透過自動化的方式來控制使用者介面
* 支援多種瀏覽器：Firefox、Chrome、IE、Edga...
* 支援多平台：MAC、Window、Linux
* 支援多語言：Java、Python、Ruby、C#、Javascipt、C++
* <https://github.com/christian-bromann/awesome-selenium>

**優點**

* 支援重複執行測試程式
* 支援並行執行
* 支援背景執行
* 提高測試準確定，減少人為產生的錯誤。
* 省下測試的時間

**應用領域**

* 自動化測試
* 網站擷取 / 網路爬蟲

**目前有四個主要的專案**

* Selenium IDE
* Selenium Remote Control (RC)
* Selenium Grid
* Selenium WebDriver

### Selenium IDE

Selenium IDE 是 Firefox 附加元件 (extension)，需要搭配 Firefox 瀏覽器才能使用。

**開啟 Selenium IDE**

在 Firefox 瀏覽器的**工具**選單，打開 **Selenium IDE** 會出現下面這個視窗畫面：

![](http://www.seleniumhq.org/projects/ide/selenium-ide.gif)

### Selenium Remote Control

簡稱 **Selenium RC**，它提供可以遠端執行 Selenium 的 Client / Server 架構。

Selenium Server 是複雜控制瀏覽器行為，Selenium Client 則是用於撰寫測試腳本來跟 Selenium Server 溝通。

<!-- Selenium Server 包含：Launcher 啟動瀏覽器、Http Proxy、Core -->

### Selenium Grid

圖片來源：[Introducing the Sauce Plugin for Selenium Grid | Sauce Labs](https://saucelabs.com/blog/introducing-the-sauce-plugin-for-selenium-grid)

![](https://az184419.vo.msecnd.net/sauce-labs/blog-images/se_grid_blog.jpg)

Selenium Grid 主要控制多台機器(RC Node)，每次測試任務都先呼叫 Hub，然後再由路由 (Hub) 分配給節點 (Node)。

* Selenium Grid Hub
* Selenium Grid Node

### Selenium WebDriver

![](http://nightwatchjs.org/img/operation.png)

許多網頁自動化測試框架，都是以 Selenium WebDriver API 作為基礎，功能強大且穩固已經讓 Selenium 成為瀏覽器自動化的基石。Selenium 2.0 帶來 WebDriver 的實作，跨越不同瀏覽器的自動化操作，有更清楚定義的標準可循，目前 [WebDriver API](http://www.w3.org/TR/webdriver/) 規範已提交 W3C，若能夠被標準化且在各大瀏覽器實作，執行跨瀏覽器的自動化測試工作將會被簡化許多。

### 延伸閱讀

* [GitHub - SeleniumHQ/selenium: A browser automation framework and ecosystem.](https://github.com/SeleniumHQ/selenium)
* [Selenium Documentation — Selenium Documentation](http://docs.seleniumhq.org/docs/)
* <https://www.w3.org/TR/webdriver/>
* <http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/>
* <https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver>
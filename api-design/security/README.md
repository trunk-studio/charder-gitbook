# API 安全 (Security)

### 為什麼安全很重要？

> 同時新版個資法也加重了對個資外洩的處罰，如果有發生個資外洩的事情，每人每一事件可以求處新台幣500元以上，2萬元以下的民事賠償。同一事件有多數人權益遭受侵害時，最高的賠償金額到新台幣2億元。假設前面所敘述八千多筆個資外洩的案例，發生在新版個資法開始實施後，那肯定會有巨額的民事賠償。不僅如此，如果將個人資料意圖販售、營利，還會有五年以下有期徒刑，得併科新台幣100萬以下罰金的刑事責任。

> 而以往這類案件最麻煩的，就在於舉證責任。現在的舉證責任，已經從個人資料受害的當事人，轉換為個資保存不當的單位。也就是說電子商務平台或是賣家，必須盡到保護資料的責任，一旦有法律案件時，也必須要由電子商務平台擁有者或是賣家，證明這些資料不是由我這洩漏出去。如此一來，除了在平常就需要對個資保護更多盡一番心力，平日與個資保護有關的各項行為都要將記錄保存，以免不時之需。

<!--  10 萬會員 + 每人罰 1,000 = 1 億 -->

* [電子商務賣家一定要懂的個資法,Information Security 資安人科技網](http://www.informationsecurity.com.tw/article/article_detail.aspx?tv=&aid=6121&pages=2)

### 建議的做法

* 任何透過網路的傳輸，都使用 HTTPS
  * 防止 [MITM (中間人攻擊)]((https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB))
* 永遠檢查使用者輸入值
  * 防止 [SQL Injection](https://www.owasp.org/index.php/SQL_Injection)
  * 防止 [XSS (跨網站指令碼)](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC)
* 情況允許的話。檢查 Referer 欄位
  * 防止 [CSRF (跨站請求偽造)](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)
  * 僅內部使用的 API Referer 應該有固定 domain 的 pattern。
* 使用可靠的 security libraries
  * 已經內建一些機制
* 用 API key 的機制取代 Username / Password 機制
* 盡量不使用 cookie 作為驗證機制，如果一定要用 cookie，請用短時效 cookie。
<!-- Auth every request + no sessions = no XSRF attacks -->

### 延伸閱讀

**文章**

* [淺談OWASP Top10 開放網路軟體安全計畫十大弱點](http://www.gss.com.tw/index.php/focus/eis/59-eis48/290-owasp-top10)
* [Category:Attack - OWASP](https://www.owasp.org/index.php/Category:Attack)
* [Fiddler free web debugging proxy](http://www.telerik.com/fiddler): 監聽 http 工具
* [How to Secure Your REST API using Proven Best Practices | Stormpath](https://stormpath.com/blog/secure-your-rest-api-right-way)

**影片**

* [REST+JSON API Design - Best Practices for Developers - YouTube](https://www.youtube.com/watch?v=hdSrT4yjS1g)

**投影片**

* [Secure Your REST API (The Right Way)](https://www.slideshare.net/stormpath/secure-your-rest-api-the-right-way)

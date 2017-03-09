# 常見的攻擊

### CSRF / XSRF 攻擊

**CSRF 是什麼**

* 全名叫 Cross-Site Request Forgery
* 是一種點擊攻擊(Click Attack)與連線控制(Session Riding)，或稱連線綁架(Session Hijacking)
* 利用路由信息協議 (Routing Information Protocol；RIP) 的漏洞，以及 DNS (Domain Name Server) 下毒的方式，讓使用者在連往目的網頁前，先被帶到駭客伺服器。

<!-- CSRF (Cross-site request forgery) 是一種攻擊手段，壞人讓受害使用者的 User-Agent 跟隨惡意的 URI （例如會以誤導的連結、圖片、轉址等形式提供給 User-Agent）跑到信任的伺服器（通常是透過一個合法的 session cookie 來達成）。 -->

<!-- Forgery: n. 偽造 -->

**安全的做法**

* 檢查 Referer 欄位：通常來說，Referer 欄位應和請求的地址位於同一域名下。
* 不使用 cookie 作為驗證機制，例如「記住我功能」。如果一定要用 cookie，請用短時效 cookie。
* 在 Submit Form 中加入隨機亂數，並在處理表單時進行驗證。
<!-- Auth every request + no sessions = no XSRF attacks -->

**延伸閱讀**

* [跨站請求偽造 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)
* [跨站假要求(Cross-Site Request Forgery；CSRF/XSRF)](http://www.digitimes.com.tw/tw/dt/n/shwnws.asp?Cat=&id=122887)

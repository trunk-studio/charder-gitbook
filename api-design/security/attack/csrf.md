# CSRF / XSRF 攻擊

### CSRF 是什麼

* 全名叫 Cross-Site Request Forgery
* 是一種點擊攻擊(Click Attack)與連線控制(Session Riding)，或稱連線綁架(Session Hijacking)
* 利用路由信息協議 (Routing Information Protocol；RIP) 的漏洞，以及 DNS (Domain Name Server) 下毒的方式，讓使用者在連往目的網頁前，先被帶到駭客伺服器。

<!--
是一種攻擊手段，壞人讓受害使用者的 User-Agent 跟隨惡意的 URI （例如會以誤導的連結、圖片、轉址等形式提供給 User-Agent）跑到信任的伺服器（通常是透過一個合法的 session cookie 來達成）。
 -->

<!-- Forgery: n. 偽造 -->

### 安全的做法

* 同時用兩個 cookie
	* Cookie: seesion-xxxxxx
	* X-XSRF-Token: xjk2kzjdddd
* 檢查 Origin Header

### 延伸閱讀

* [跨站假要求(Cross-Site Request Forgery；CSRF/XSRF)](http://www.digitimes.com.tw/tw/dt/n/shwnws.asp?Cat=&id=122887)

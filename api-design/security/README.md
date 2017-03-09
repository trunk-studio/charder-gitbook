# 安全 (Security)

### 為什麼 API 安全很重要？

**新聞**

* [【獨家】被駭攏係假！　遠通APP漏洞惹禍 | 即時新聞 | 20140115 | 蘋果日報](http://www.appledaily.com.tw/realtimenews/article/new/20140115/327006/)
* [OAuth - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/OAuth)

<!-- Apache 防止 DDoS 攻擊 -->

### Session 認證所產生的問題

* 通常而言 Session 都是保存在內存中，而隨著認證用戶的增多，服務端的開銷會明顯增大。
* 在分佈式的應用上，相應的限制了負載均衡器的能力。
* 因為是基於 cookie 來進行用戶識別的, cookie 如果被攔截，使用者就會很容易受到 CSRF 攻擊。

### API Keys(Token) vs. Username/Password 驗證

* 獨立 (Independence)
* 速度 (Speed)
* 減少暴露 (Reduced Exposure)：每暴露一次，就多一次機會有可能被側錄。
* 可追蹤 (Traceability)

**延伸閱讀**

* [API Token 入門](https://www.slideshare.net/chickenwu/api-token)

### 實踐步驟

* 盡量使用 SSL 連線，避免被側錄。
* 選用一種認證機制

### 基本認證 (Basic Authentication)

![basic-authentication](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/basic-authentication/_static/image1.png)


圖片來自於：[Microsoft - Basic Authentication in ASP.NET Web API](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/basic-authentication)

* [基本認證](https://zh.wikipedia.org/wiki/HTTP%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%81)是一種用來允許 Client 在請求時，提供`帳號`與`密碼`做為身份憑證的一種登錄驗證方式。
* 定義在 HTTP 1.0 規範 [RFC 1945](https://tools.ietf.org/html/rfc1945)
* base64encode(username+":"+password)）

<!-- 編碼這一步驟的目的並不是安全與隱私，而是為將用戶名和口令中的不兼容的字符轉換 -->

**Request**

```
GET /private/index.html HTTP/1.0
Host: localhost
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
```

**成功回應**

```
HTTP/1.0 200 OK
Server: HTTPd/1.0
Date: Sat, 27 Nov 2004 10:19:07 GMT
Content-Type: text/html
Content-Length: 10476
```

**失敗回應**

```
HTTP/1.0 401 Authorization Required
Server: HTTPd/1.0
Date: Sat, 27 Nov 2004 10:18:15 GMT
WWW-Authenticate: Basic realm="Secure Area"
Content-Type: text/html
Content-Length: 311
```

**可以容易地編碼和解碼**

```
$ echo -n "Aladdin:open sesame" | base64
QWxhZGRpbjpvcGVuIHNlc2FtZQ==
$ echo -n "QWxhZGRpbjpvcGVuIHNlc2FtZQ==" | base64 -D
Aladdin:open sesame
```

**優點**

* 支援度高
* 非常容易實現

**缺點**

* 基本認證機制是假設 client 端和 server 主機之間的連接是安全，如果沒有使用 SSL / TLS 傳輸層安全的協議，明碼很容易被攔截解密。

### OAuth 2.0

**抽象協定的流程**

```
+--------+                               +---------------+
|        |--(A)- Authorization Request ->|   Resource    |
|        |                               |     Owner     |
|        |<-(B)-- Authorization Grant ---|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |--(C)-- Authorization Grant -->| Authorization |
| Client |                               |     Server    |
|        |<-(D)----- Access Token -------|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |--(E)----- Access Token ------>|    Resource   |
|        |                               |     Server    |
|        |<-(F)--- Protected Resource ---|               |
+--------+                               +---------------+
```

<!--
去售票亭 (Resource Owne) 購買遊樂園兩日票 (Authorization Request)，兩日計算日期為入場開始算起，進場時須將門票 (Authorization Grant) 拿給驗票口，驗票口確認過後，會印一張入場時間跟最慢要離場的時間收據 (Access Token) 給你，你在每項遊樂設施排隊的時候，工作人員會檢查你的收據中列印的資料，核對後決定是你否可以玩這個遊樂設施。
 -->

**延伸閱讀**

* [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
* [OAuth 2.0 — OAuth](https://oauth.net/2/)
* [阮一峰 - 理解OAuth 2.0](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
* [Yu-Cheng Chuang - 簡單易懂的 OAuth 2.0](https://speakerdeck.com/chitsaou/jian-dan-yi-dong-de-oauth-2-dot-0)
* [各大網站 OAuth 2.0 實作差異 - Yu-Cheng Chuang’s Blog](https://blog.yorkxin.org/2013/09/30/oauth2-implementation-differences-among-famous-sites)

### JWT (Jason Web Tokens)

**JWT 是什麼？**

> JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS).
- RFC7519 https://tools.ietf.org/html/rfc7519

JWT 是一種安全標準，基本就是 client 提供帳號和密碼給認證 server，server 驗證成功，會產生一個 Token 塞在 Response 中，client 可以使用這個 Token 存取 Server 上的資源(資料)。

> The suggested pronunciation of JWT is the same as the English word
"jot".

![JWT](assets/jwt.png)

**問題**

* 基本認證 vs. JWT 差在哪？
* 在沒有 JWT 前的做法是？

**結構可分為三個部分**

* 表頭 (Headers)
* 附加資料 (Claims / Payload)
* 簽證 (Signature)

**優點**

* JSON 格式通用性高
* payload 機制可以附帶一些非敏感訊息的資料
* token 佔的空間很小，容易傳輸。
* 因為不是 Session 的機制，不會有 load balancer 的瓶頸。

**缺點**

* Token 有長度限制

**使用情境**

* 任何需要 Token 機制的地方
* 無狀態的分散式 API

**實作**

* 選用 JWT 認證的 library
* 設定 CORS

```
Access-Control-Allow-Origin: *
```

```
Authorization: Bearer <token>
```
**注意事項**

* 保護好私鑰
* 盡量使用 https 傳遞資料
* 不要將敏感訊息附加在 payload 中

**延伸閱讀**

* [JSON Web Token - Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Token)
* [JSON Web Tokens - jwt.io](https://jwt.io/)

### JWT vs. OAuth2

* JWT 是一種認證協議，OAuth2 是一種授權框架(提供了一套詳細的授權機制)。

### 常見的攻擊

#### CSRF / XSRF 攻擊

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

### 延伸閱讀

**文章**

* [Fiddler free web debugging proxy](http://www.telerik.com/fiddler): 監聽 http 工具
* [How to Secure Your REST API using Proven Best Practices | Stormpath](https://stormpath.com/blog/secure-your-rest-api-right-way)

**影片**

* [REST+JSON API Design - Best Practices for Developers - YouTube](https://www.youtube.com/watch?v=hdSrT4yjS1g)

**投影片**

* [Secure Your REST API (The Right Way)](https://www.slideshare.net/stormpath/secure-your-rest-api-the-right-way)

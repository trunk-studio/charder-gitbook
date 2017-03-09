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

### API Keys vs. Username/Password 驗證

* 獨立 (Independence)
* 速度 (Speed)
* 減少暴露 (Reduced Exposure)：每暴露一次，就多一次機會有可能被側錄。
* 可追蹤 (Traceability)

**延伸閱讀**

* [API Token 入門](https://www.slideshare.net/chickenwu/api-token)

### 常見認證機制

* 基本認證 (Basic Authentication)
* JWT

### 延伸閱讀

**文章**

* [Fiddler free web debugging proxy](http://www.telerik.com/fiddler): 監聽 http 工具
* [How to Secure Your REST API using Proven Best Practices | Stormpath](https://stormpath.com/blog/secure-your-rest-api-right-way)

**影片**

* [REST+JSON API Design - Best Practices for Developers - YouTube](https://www.youtube.com/watch?v=hdSrT4yjS1g)

**投影片**

* [Secure Your REST API (The Right Way)](https://www.slideshare.net/stormpath/secure-your-rest-api-the-right-way)

# 授權框架 - OAuth 2.0

實質上是代理授權，不是身份認證

### 抽象化流程

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

 **角色定義**

* Resource Owner - 可以授權別人去存取 Protected Resource。如果這個角色是人類的話，則就是指使用者 (end-user)。
* Authorization Server - 在認證過 Resource Owner 並且 Resource Owner 許可之後，核發 Access Token 的伺服器。
* Resource Server - 存放 Protected Resource 的伺服器，可以根據 Access Token 來接受 Protected Resource 的請求。
* Client - 代表 Resource Owner 去存取 Protected Resource 的應用程式。 “Client” 一詞並不指任何特定的實作方式（可以在 Server 上面跑、在一般電腦上跑、或是在其他的設備）。


### 使用場景

* 第三方授權
* [SSO](https://zh.wikipedia.org/wiki/%E5%96%AE%E4%B8%80%E7%99%BB%E5%85%A5) (Single sign-on)

**延伸閱讀**

* [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
* [OAuth 2.0 — OAuth](https://oauth.net/2/)
* [阮一峰 - 理解OAuth 2.0](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
* [Yu-Cheng Chuang - 簡單易懂的 OAuth 2.0](https://speakerdeck.com/chitsaou/jian-dan-yi-dong-de-oauth-2-dot-0)
* [各大網站 OAuth 2.0 實作差異 - Yu-Cheng Chuang’s Blog](https://blog.yorkxin.org/2013/09/30/oauth2-implementation-differences-among-famous-sites)
* [授权机制说明 - 微博API](http://open.weibo.com/wiki/%E6%8E%88%E6%9D%83%E6%9C%BA%E5%88%B6%E8%AF%B4%E6%98%8E)

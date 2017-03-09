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

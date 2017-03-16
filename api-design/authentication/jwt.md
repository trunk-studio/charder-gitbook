# JWT (JSON Web Token)

**JWT 是什麼？**

> JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS).
- RFC7519 https://tools.ietf.org/html/rfc7519

JWT 是一個 Web Token，可以攜帶 JSON 格式的資料替兩方傳輸資料，攜帶的資料是使用數位簽證 JWS 加密過。

> The suggested pronunciation of JWT is the same as the English word
"jot".

建議發音念 jot

![JWT](assets/jwt.png)

[JSON Web Tokens - jwt.io](https://jwt.io/)

**結構可分為三個部分**

* 表頭 (Headers)
* 附加資料 (Claims / Payload)
* 簽證 (Signature)

**優點**

* JSON 格式通用性高
* payload 機制可以附帶一些非敏感訊息的資料
* 佔的空間很小，容易傳輸。
* 安全性佳
* 因為不是 Session 的機制，不會有 Loading Balancer 的瓶頸。

**缺點**

* Token 有長度限制

### 使用情境

* 任何需要 Token 機制的地方
  * 限制軟體授權時間
  * 裝置綁定
    * 第一次登入帳密 + UUID
    * 認證信 + UUID
  * 登入
  * 固定效期的序號卡
  * 忘記密碼通知信
  * 認證信功能
* 需要支援無狀態 (stateless) 的分散式 API

<!-- * 可用在 SSO 的產 Token 階段 -->

### 實作方式

* 在 Server 確認過 Client 身份後，發一組 JWT 格式的 Token 給 Client，下次 Client 要在跟 Server 要資料的時候，就只要將 Token 放在 request header 中，Server 驗證 Token 後就可以確認身份。

```
Authorization: Bearer <token>
```

### 注意事項

* 保護好私鑰
* 盡量使用 HTTPS 傳遞資料
* 不要將敏感訊息附加在 payload 中

<!--
// 每次都把 token 放進 header 的 auth 資訊中，用 server 的 public key 去解密，看有沒有 match
// User 不能改動 expiration，不然 signature 會不一樣
// 每次 request 就 update token，將 expiration 設為該 req 之後的 30 min。
 -->

**問題**

1. 基本認證 vs. JWT 差在哪？

<!--
基本認證只有做 base64 encoding，JWT 除了做 base64 encoding 之外，還有加密，還可以攜帶資料。
-->

1. 在沒有 JWT 前的做法是？
1. JWT vs. OAuth 2.0

<!-- JWT 是一種認證協議，OAuth 2.0 是一種授權框架。 -->

**延伸閱讀**

* [JSON Web Token - Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Token)
* [JSON Web Tokens - jwt.io](https://jwt.io/)
* [Online JWT Builder - Jamie Kurtz](http://jwtbuilder.jamiekurtz.com/)
* [Base64 Decode and Encode - Online](https://www.base64decode.org/)

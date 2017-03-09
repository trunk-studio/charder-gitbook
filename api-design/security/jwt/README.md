# JWT (Jason Web Tokens)

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

**問題**

* 基本認證 vs. JWT 差在哪？
* 在沒有 JWT 前的做法是？

<!-- 基本認證只有做 base64 encoding，JWT 除了做 base64 encoding 之外，還有加密，還可以攜帶資料。 -->

**優點**

* JSON 格式通用性高
* payload 機制可以附帶一些非敏感訊息的資料
* token 佔的空間很小，容易傳輸。
* 因為不是 Session 的機制，不會有 Loading Balancer 的瓶頸。

**缺點**

* Token 有長度限制

<!-- 為什麼？ -->

**使用情境**

* 任何需要 Token 機制的地方
  * 限制軟體授權時間
  * 裝置綁定 / 登入
  * 固定效期的序號卡
* 無狀態 (stateless) 的分散式 API

**實作**

* 在 Server 確認過 Client 身份後，發一組 JWT 格式的 Token 給 Client，下次 Client 要在跟 Server 要資料的時候，就只要將 Token 放在 request header 中，Server 驗證 Token 後就可以確認身份。

```
Authorization: Bearer <token>
```

**注意事項**

* 保護好私鑰
* 盡量使用 https 傳遞資料
* 不要將敏感訊息附加在 payload 中

**JWT vs. OAuth 2.0**

* JWT 是一種認證協議，OAuth 2.0 是一種授權框架。

問題：認證 vs. 授權

**延伸閱讀**

* [JSON Web Token - Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Token)
* [JSON Web Tokens - jwt.io](https://jwt.io/)

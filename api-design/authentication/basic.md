# 認證框架 - 基本認證 (Basic Authentication)

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

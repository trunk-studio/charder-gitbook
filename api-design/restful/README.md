# RESTful 建議設計方式

這裡範例是以 Web API 設計為主

<!-- HTTP Request 由「HTTP Method 動詞 + URL 名詞 + Content Types 格式」所組成 -->

**什麼是 RESTful？**

一個架構符合 REST 原則，就稱它為 RESTful 架構。

**什麼時候會需要 RESTful API 架構？**

當有數組資源要被多種不同平台使用時

**舊設計風格 vs. RESTful 設計風格**

舊設計風格

```
/getAllUsers
/getUser/1
/createUser
/updateUser/1
/deleteUser/1
```

RESTful 設計風格

```
GET /users
GET /users/1
POST /users
PUT /users/1
DELETE /users/1
```

## 統一介面

### 唯一資源識別方法

URL + HTTP methods = 唯一資源識別方法

**操作一般 Resource 時，URL 使用複數名詞。**

```
/v1.0/user/1 (X)
/v1.0/users/1 (O)
```

**操作唯一 Resource 時，URL 使用單數名詞。**

對 Client 而言，只有一份的資源時用單數名詞。例如 GitHub watching API 中的 GET /user/subscriptions，其中 user 是指目前驗證的使用者，所以用單數。

[Watching | GitHub Developer Guide](https://developer.github.com/v3/activity/watching/#list-repositories-being-watched)

**如果某些動作是 HTTP 動詞表示不了的，你就應該把動作做成一種資源。**

<!--
動名詞(Gerunds)也算是名詞的一種, ex: /MoneyTransfers
(POST) Create a “MoneyTransfers” object, 內容是把錢從 A 轉到 B
 -->

```
POST /accounts/1/transfer/500/to/2
```

換成

```
POST /transaction HTTP/1.1
Host: 127.0.0.1
　　
from=1&to=2&amount=500.00
```

**如果 API 有多個 table 的關聯**

* 把它當成獨立的 Resource

**操作非 Resource (Utility API)時，使用動詞。**

```
GET /translate?from=de_DE&to=en_US&text=Hallo
GET /calculate?para2=23&para2=432
```

**使用 sub-resources**

```
get /users/1/albums/1
```

**盡量不要用縮寫，除非它是普羅大眾都知道的縮寫。**


#### Query 參數

* 沒有特別規定，可以底線分隔或使用駝峰命名，須保持一致風格。
* 但建議使用駝峰命名，符合大部分程式語言的 code style。
* 以 path 參數傳送必要資訊，query 參數傳送選擇性資料。

```
get /search/users/nickname/alin (X)
get /search/users?nickname=alin (O)
```

**Filtering**

```
GET /tickets?level=vip
```

**排序 (Sorting)**

```
GET /tickets?sort=-priority,created_at
```

**Field selection**

```
GET /tickets?fields=id,subject,customer_name,updated_at
```

**分頁 (Paging)**

```
/v1.0/users?limit=25&offset=50
```

### 自我描述

使用 HTTP Methods 操作 Resources

**CRUD 範例**

| Resource URI         | 意義                        |
| :------------------- | :-------------------------- |
| get  /users          | 取得所有使用者資料             |
| get  /users/1        | 取得使用者 ID 是 1 的資料      |
| post /users          | 批次新增                     |
| post /users/1        | 單筆新增                     |
| put  /users          | 批次更新                     |
| put  /users/1        | 更新單筆全部內容               |
| patch  /users/1      | 更新單筆部分內容               |
| delete /users        | 批次刪除                     |
| delete /users/1      | 單筆刪除                     |
| get /users/1/albums/1| 取得 userId=1 的第一本相簿資料 |

### 資源有多種呈現方式

#### Request 格式

* 放到 URL 裡面，例如 `GET /users.json`
* 放到 Header 裡面 Accept: application/json (推薦)
  * application/json (這不能上傳檔案)
  * application/x-www-form-urlencoded (網頁表單預設，不能上傳檔案)
  * multipart/form-data (可以上傳檔案)

```
GET /users
```

#### Response 格式

* raw
* json
* xml

<!-- 優先選擇 JSON 格式，特別是會用到 javascript 來處理 response 時，因為 JSON 本就是 javascirpt 的預設處理格式。 -->

### Restful level

[Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)

* Level 0
* Level 1 - Resources
* Level 2 - HTTP Verbs
* Level 3 - Hypermedia Controls

### 練習題

1. 設計一個 [待辦事項](http://gcloud-todos.appspot.com/examples/angularjs/#/) 的線上服務，前台所使用的 API。

功能如下：

* 會員可以註冊
* 會員可以登入
* 會員可以新增自己的待辦事項
* 會員可以修改自己的待辦事項
* 會員可以刪除自己的待辦事項
* 會員可以查看自己的待辦事項
* 待辦事項可以設定提醒時間

<!--
```
post /register?account=&password=
patch /login?account=&password=
patch /users/1?nickname=...
post /users/1/todos
patch /users/1/todos/1
delete /users/1/todos/1
get /users/1/todos
```
-->

1. 以下的 API，改用 RESTful 風格設計。

```
第一組

/getmysqltime
/getswver
/updateswver
/getpri-matno
/getmatnoinfo
/login

第二組

/chkstationmacisexist
/writestation-testitem
/chkmatnoisfix
/getparaname
/getnonfix-paradata
/getfix-paradata

第三組

/registerpdid
/chkpdidisexist
/getfixjudgeresult
/writeerorcode-pdid
/writetestlist
/writetetestdietial
```

<!--
/getmysqltime -> get /times?mysql=
/getswver -> get /swVersion
/updateswver -> patch /swVersion
/getpri-matno -> get /partNumber?filter=
/getmatnoinfo -> get /partNumber/123456/info
/login -> post /login or patch /login
/chkstationmacisexist -> get /stationMac/1/check
/writestation-testitem -> post /stationMac/1?type=test
/chkmatnoisfix -> get /partNumber/123456/check?fixture=true
/getparaname -> get /parameters?fixture=true
/getnonfix-paradata -> get /parameters?fixture=false
/getfix-paradata -> get /parameters?fixture=true
/registerpdid -> post /products/register
/chkpdidisexist -> get /products/123456/check
/getfixjudgeresult -> get /fixtures/123456/judgeResults
/writeerorcode-pdid -> post /products/123456/errors
/writetestlist -> post /stations/123456/results?type=test
/writetetestdietial -> post /stations/results
 -->


### 實踐 RESTful 的 API

* [GitHub API v3 | GitHub Developer Guide](https://developer.github.com/v3/)
* [REST API reference - PayPal Developer](https://developer.paypal.com/docs/api/)
* [REST APIs — Twitter Developers](https://dev.twitter.com/rest/public)

### 延伸閱讀

* [Gitbook - HTTP API 設計指南](https://kcyeu.gitbooks.io/http-api-design-guide-tc/content/)
* [ihower App 開發基礎講義 - 給初學者的應用程式開發基礎知識](https://ihower.tw/cs/web-apis.html)
* [GitHub - aisuhua/restful-api-design-references: RESTful API 设计参考文献列表，可帮助你更加彻底的了解REST风格的接口设计。](https://github.com/aisuhua/restful-api-design-references)
* [IBM developerWorks - 基於 REST 的 Web 服務：基礎](http://www.ibm.com/developerworks/cn/webservices/ws-restful/)


<!-- ### Best Practices

* [mwaysolutions - 10 Best Practices for Better RESTful API](http://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/)
https://blog.philipphauer.de/restful-api-design-best-practices/ -->

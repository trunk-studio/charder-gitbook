# RESTful 實踐常見慣例

<!-- HTTP Request 由「HTTP Method 動詞 + URL 名詞 + Content Types 格式」所組成 -->

### URI

**操作一般 Resource 時，URL 使用複數名詞。**

```
get /v1.0/user/1 (X)
get /v1.0/users/1 (O)
```

**操作唯一 Resource 時，URL 使用單數名詞。**

亦即對 client 而言只有一份的資源）用單數名詞。例如 GitHub watching API 中的GET /user/subscriptions，其中 user 是指目前驗證的使用者，所以用單數。

[Watching | GitHub Developer Guide](https://developer.github.com/v3/activity/watching/#list-repositories-being-watched)

**如果某些動作是HTTP動詞表示不了的，你就應該把動作做成一種資源。**

```
POST /accounts/1/transfer/500/to/2
```

換成

```
POST /transaction HTTP/1.1
Host: 127.0.0.1
　　
from=1&to=2&amount=500.00
```

**操作非 Resource (Utility API)時，使用動詞。**

```
GET /translate?from=de_DE&to=en_US&text=Hallo
GET /calculate?para2=23&para2=432
```

**若 method type 是 get 的 API，只單純取得資料，不能改變資料的狀態。**

**使用 sub-resources**

```
get /users/1/albums/1
```

**盡量不要用縮寫，除非它是普羅大眾都知道的縮寫。**

**以 path parameter 傳送必要資訊，query parameter 傳送選擇性資料。**

```
get /search/users/nickname/alin (X)
get /search/users?nickname=alin (O)
```

### 使用 HTTP Methods 操作你的 Resources

* safe：該操作不會改變伺服器端的資源狀態
* idempotent：該操作不管做 1 遍或做 n 遍，都會得到同樣的資源狀態結果，但不一定得到同樣的回傳值，例如第 2 次 DELETE 請求可能回傳404，但可以放心重傳。

| HTTP Methods | 意義                        |
| :----------- | :-------------------------- |
| GET          | 讀取資源 (safe & idempotent) |
| POST         | 新增資源                     |
| PUT          | 替換資源 (idempotent)        |
| PATCH        | 更新資源部份內容              |
| DELETE       | 刪除資源 (idempotent)        |

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


**練習題**

* 改良以下的 URL 設計

<!--
getmysqltime -> get /time
getswver -> get /sw/version
getpri-matno -> get /pri/matno
chkstationmacisexist -> get check/station/mac
writestation-testitem -> post station/test/item
chkmatnoisfix
getparaname -> parameters
getnonfix-paradata ->
getfix-paradata ->
registerpdid -> post /register/pid
chkpdidisexist -> get /check/pid
writeerorcode-pdid -> post /error-code/pid
getfixjudgeresult -> get fix/judge/result
writetestlist -> post /info/
writetetestdietial -> post /info/detail
 -->

### Query 參數

* 沒有特別規定，可以底線分隔或使用駝峰命名，須保持一致風格。
* 但建議使用駝峰命名，符合大部分程式語言的 code style。

```
/v1.0/users?limit=25&offset=50
```

### Request Format

* application/x-www-form-urlencoded (網頁表單預設，不能上傳檔案)
* multipart/form-data (可以上傳檔案)
* application/json (這不能上傳檔案)

### Response Format

放到 Header 裡面 Accept: application/json

或

放到 URL 裡面，例如 `GET /users.json`

優先選擇 JSON 格式，特別是會用到 javascript 來處理 response 時，因為 JSON 本就是 javascirpt 的預設處理格式。

### Provide filtering, sorting, field selection and paging for collections

**Filtering**

**排序 (Sorting)**

**Field selection**

**分頁 (Paging)**

### 版本管理

* 不是每一次修改都要改 API 的版號，盡量將 API 可以做成向後相容，就不需要跳版本。例如：
新增一個欄位屬性，是向後相容的。
* 修改屬性名稱、刪除欄位、修改格式等等，會造成不向後相容。client app 抓不到該欄位可能會當機。

```
api.yourdomain/v1.0/users
yourdomain/api/v1.0/users
```

或

```
api.yourdomain/users?version=1.0
```

或

```
Accept: api.yourdomain+json; version=1.0
```

### HTTP 狀態碼

| 狀態碼     | 意義                       |
| :-------- | :------------------------ |
| 2xx       | 成功                       |
| 4xx       | client error 應用層級錯誤   |
| 5xx       | server error 非預期的錯誤   |

[List of HTTP status codes - Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)Ω

### 錯誤代碼

[Restful API 中的错误处理 | Scarletsky](http://scarletsky.github.io/2016/11/30/error-handling-in-restful-api/)

```
{
  "errors": [
   {
    "userMessage": "Sorry, the requested resource does not exist",
    "internalMessage": "No car found in the database",
    "code": 34,
    "more info": "http://dev.mwaysolutions.com/blog/api/v1/errors/12345"
   }
  ]
}
```

```
// 400 Bad Request
{
  "message": "You submitted an invalid state. Valid state values are 'internal' or 'external'",
  "errorCode": 352,
  "additionalInformation" : "http://www.domain.com/rest/errorcode/352"
}
```

https://api.github.com/user

```
Request URL:https://api.github.com/user
Request Method:GET
Status Code:401 Unauthorized
```

```
{
  "message": "Requires authentication",
  "documentation_url": "https://developer.github.com/v3"
}
```

### Caching

### Restful level

[Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)

* Level 0
* Level 1 - Resources
* Level 2 - HTTP Verbs
* Level 3 - Hypermedia Controls

### 實踐 RESTful 的 API

[GitHub API v3 | GitHub Developer Guide](https://developer.github.com/v3/)
[REST API reference - PayPal Developer](https://developer.paypal.com/docs/api/)
[REST APIs — Twitter Developers](https://dev.twitter.com/rest/public)

### 延伸閱讀

* [Gitbook - HTTP API 設計指南](https://kcyeu.gitbooks.io/http-api-design-guide-tc/content/)
* [ihower App 開發基礎講義 - 給初學者的應用程式開發基礎知識](https://ihower.tw/cs/web-apis.html)
* [GitHub - aisuhua/restful-api-design-references: RESTful API 设计参考文献列表，可帮助你更加彻底的了解REST风格的接口设计。](https://github.com/aisuhua/restful-api-design-references)



<!-- ### Best Practices

* [mwaysolutions - 10 Best Practices for Better RESTful API](http://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/)
https://blog.philipphauer.de/restful-api-design-best-practices/ -->

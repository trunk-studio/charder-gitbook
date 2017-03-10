# 例外狀況處理

* 使用正確的 HTTP 狀態碼

### HTTP 狀態碼

| 狀態碼     | 意義                       |
| :-------- | :------------------------ |
| 2xx       | 成功                       |
| 3xx       | 轉導                       |
| 4xx       | client error 應用層級錯誤   |
| 5xx       | server error 非預期的錯誤   |

[List of HTTP status codes - Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

### 錯誤代碼

[Restful API 中的错误处理 | Scarletsky](http://scarletsky.github.io/2016/11/30/error-handling-in-restful-api/)

### 單筆錯誤訊息範例

```
Request URL: ....
Request Method:GET
Status Code: 400
```

```
{
  "message": "You submitted an invalid state. Valid state values are 'internal' or 'external'",
  "errorCode": 352,
  "additionalInformation" : "http://www.domain.com/rest/errorcode/352"
}
```

```
Request URL: https://api.github.com/user
Request Method:GET
Status Code:401 Unauthorized
```

```
{
  "message": "Requires authentication",
  "documentation_url": "https://developer.github.com/v3"
}
```

### 多筆錯誤訊息範例

```
Request URL: ....
Request Method:GET
Status Code: 400
```

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

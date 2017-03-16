# 補充

* API 應該是 stateless，也就是一項工作單元不應由二個或二個以上 API 組成。
* REST API 所呈現的資源，是從應用面及 client 角度來思考，並不需要和後端的資源儲存形式（例如資料庫schema）維持一對一的關係。
* XML-RPC -> SOAP -> RESTful API -> GraphQL

API testing
API mock

### The future of API design: The orchestration layer

* LSUDs（Large set of Unknown Developers）：網站設計出來的 API 是直接給大眾使用的，並沒有分族群
* SSKDs（Small set of Known Developers）：設計 API 的人清楚知道是哪些程式設計師要來使用這個 API，所以會為這些人量身打造適合他們使用的 API。

http://www.danieljacobson.com/blog/306


### "API FIRST" development

* Build your REST platform first.
* Rest platform must be "stateless"
* Your first "app" should be the API test.
* Build your app or website on top of the those API's.

### Why "API-FIRST" ?

### SSO

### Atomic (原子性)

不能用兩個(或以上)的 API 呼叫去完成一個動作，每一個動作都必需是 atomic，一個完整執行後的 API call 不能讓伺服器端數據停留在不一致的狀態。例如 User A 轉帳 100 給 User B 付錢買火車票。

post timestamp 也是要存進 redis 或資料庫中囉？ Yes, 放 Redis 就行了，設個 5 分鐘即可。也不用開保護，通常真的遺失也沒關係。
如何測試 atomic api -> 應該是由商業邏輯來定義，所以在談 user requirement 中，會需要不斷的問客戶問題！ex: 轉帳轉到一半斷線的話怎麼辦？

API應該是 stateless，也就是一項工作單元不應由二個或二個以上API組成。這也引申出一個有趣的問題：REST API 如何支援transaction

兩個不同的 API 應該要怎麼實踐

### 處理重複的 request

伺服器端要懂如何處理重複的 request 用 POST 建立新物件時，把客戶端的 timestamp 也放進 API request 中。就可以讓伺服器端辨別是不是收到重複的 HTTP POST。

### 不要把 API 設計成 DB 一對一的 CRUD

應該要以前台的角度去思考 Resource 定義。

REST API所呈現的資源，是從應用面及client角度來思考，並不需要和後端的資源儲存形式（例如資料庫schema）維持一對一的關係。

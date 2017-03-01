# 補充

* API應該是 stateless，也就是一項工作單元不應由二個或二個以上 API 組成。
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

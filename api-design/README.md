# API 設計

**什麼是 API**

* 全名 Application Programming Interface (應用程式介面)
* 良好的介面設計
  * 可以降低系統各部分的相互依賴
  * 提高組成單元的內聚性
  * 降低組成單元間的耦合程度
  * 提高系統的維護性和擴充功能性。
* API 本身是抽象的，它僅定義了一個介面，而不涉及應用程式在實際實現過程中的具體操作。

https://en.wikipedia.org/wiki/Application_programming_interface

**什麼是對 API 重要的事**

* 可以正常執行
* API 跟 API 文件一致
* 易維護 / 擴充
* API 版本化
* 設計前跟使用者溝通

**API 生命週期**

* feedback
* design
* prototype
* implementation
* delivery

**兩大設計主流**

* RESTful API
* GraphQL：主要是解決 RESTful API 在取得複雜資料時，大量的 Query 的次數，並同時保有 RESTful 的簡單設計方式。

### 延伸閱讀

* [从达标到卓越 —— API 设计之道 | Taobao FED | 淘宝前端团队](http://taobaofed.org/blog/2017/02/16/a-guide-to-api-design/)
* [REST - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/REST)
* [HTTP API Design · GitBook](https://www.gitbook.com/book/geemus/http-api-design/details)

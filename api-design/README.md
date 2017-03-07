# API 設計

**什麼是 API**

* 全名 Application Programming Interface，應用程式介面
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
* 易維護
* 易擴充
* API 版本化
* API 一旦公開 release 後，interface 不可能再修改。
* 設計前跟使用者溝通

**API 生命週期**

* feedback
* design
* prototype
* implementation
* delivery

### RESTful API

**REST 是什麼**

* 是 Representational State Transfer 的縮寫。
* 是一種架構風格，不是標準。
* 是 Roy Thomas Fielding 在他 2000 年的博士論文中提出的。Fielding 是 HTTP協議（1.0版和1.1版）的主要設計者，及Apache基金會的第一任主席。所以一經發表後馬上就引起了關注。

**RESTful**

如果一個架構符合 REST 原則，就稱它為 RESTful 架構。

**什麼時候會需要 RESTful API 架構**

* 當有數組資源要被多種不同平台使用時

### GraphQL

主要是解決 RESTful API 在取得複雜資料時，大量的 Query 的次數，並同時保有 RESTful 的簡單設計方式。

### 延伸閱讀

* [从达标到卓越 —— API 设计之道 | Taobao FED | 淘宝前端团队](http://taobaofed.org/blog/2017/02/16/a-guide-to-api-design/)
* [REST - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/REST)
* [HTTP API Design · GitBook](https://www.gitbook.com/book/geemus/http-api-design/details)

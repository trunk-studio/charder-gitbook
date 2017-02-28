# API 設計

* API：Application Programming Interface
* LSUD（Large set of Unknown Developers）：網站設計出來的 API 是直接給大眾使用的，並沒有分族群
* SSKD（Small set of Known Developers）：設計 API 的人清楚知道是哪些程式設計師要來使用這個 API，所以會為這些人量身打造適合他們使用的 API。

### RESTful API

**REST**

* 是 Representational State Transfer 的縮寫。
* 是Roy Thomas Fielding 在他 2000 年的博士論文中提出的。Fielding 是 HTTP協議（1.0版和1.1版）的主要設計者，及Apache基金會的第一任主席。所以一經發表後馬上就引起了關注。
* 是一個設計風格，不是標準。

**RESTful**

如果一個架構符合 REST 原則，就稱它為 RESTful 架構。

### GraphQL

主要是解決 RESTful API 在取得複雜資料時，大量的 Query 的次數，並同時保有 RESTful 的簡單設計方式。

### 延伸閱讀

* [从达标到卓越 —— API 设计之道 | Taobao FED | 淘宝前端团队](http://taobaofed.org/blog/2017/02/16/a-guide-to-api-design/)
* [REST - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/REST)

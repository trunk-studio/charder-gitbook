# REST 的設計理念與架構

### 什麼是 REST

* 是一種架構風格，不是標準。
* 是 `Roy Thomas Fielding` 在他 2000 年的博士論文中提出的。Fielding 是一開始 HTTP 協議的主要設計者，也是 Apache 基金會的第一任主席，所以一經發表後，馬上就引起了關注。

### 從字面上來上

* REST 是 (Resources) Representational State Transfer 的縮寫

**資源 (Resources)**

* 資源表示一種實體，所以應該是名詞，動詞應該使用在 HTTP method。

**表現層 (Representation)**

* Content-Type：JSON 或 XML 格式
* 例如可以用 HTML 格式、XML 格式、JSON 格式

**狀態轉換 (State Transfer)**

* 具體來說，就是 HTTP 協議裡面，四個表示操作方式的動詞：GET、POST、PUT、DELETE。

### REST 不是什麼

* REST is not pretty URLs
* REST is not HTTP Verbs
* REST is not CRUD
* REST is not JSON

## REST 原則 (Constraints)

* 使用 Client-Server 架構設計
* 無狀態（Stateless）
* 可實作快取（Cacheable）
* 分層架構（Layered System）
* 統一介面（Uniform Interface)
  * 唯一資源識別方法 (Identification of resources)
  * 資源有多種呈現方式 (Manipulation of resources through representations)
  * 自我描述 (Self-descriptive) messages
  * HATEOAS
* Code on demand：(非必要) 可執行程式碼的設計

#### 無狀態 (Stateless)

* Client 與 Server 的溝通不需依賴狀態，每一個 Request 必須包含所有需要的資訊，而不需依賴其他 Request 的狀態。
* Server 不保留 Client 的狀態
* 每個 request 包含足夠的訊息
* 任何一個 session 狀態，須由 client 自行處理。

### 可實作快取（Cacheable）

快取機制可以在 Client 或 Server 中實作

### 分層架構（Layered System）

每個組件只能看到與其交互的鄰層

### 統一介面（Uniform Interface)

定義了四種原則

* 唯一資源識別方法 (Identification of resources)：在 HTTP 就是 URL
* Manipulation of resources through representations
  * 透過特定的方式來操作資源：在 HTTP 就是 GET, POST, PUT, DELETE methods
* 自我描述 (Self-descriptive) messages：在 HTTP 就是 Content-Type
* Hypermedia as the engine of application state (HATEOAS)

#### HATEOAS

* 全名是 Hypermedia As The Engine Of Application State
* 在返回結果中提供超連結，連向其他 API 方法，讓使用者不需要查文件，也知道還有哪些相關 API 可以使用。

https://api.github.com/

```
{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations"
}
```

[HATEOAS - Wikipedia](https://en.wikipedia.org/wiki/HATEOAS)

### 優點

* 可利用快取來提升速度
* 無狀態的特性，可以讓不同的伺服器處理一系列不同的 request，提高使用伺服器的彈性。
* REST 是疊在原有的 HTTP 協定之上的機制，非常的輕量，學習成本也低。

### 缺點

* 在取得複雜資料時，會產生大量的查詢次數。

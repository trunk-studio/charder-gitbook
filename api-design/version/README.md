# API 版本管理

* API 一旦公開 release 後，interface 不可能再修改。
* 修改屬性名稱、刪除欄位、修改格式等等，會造成無法向後相容，出現 Error。

### 不是每一次修改都要改 API 的版號

* 盡量將 API 可以做成向後相容，就不需要跳版本。例如：新增一個欄位屬性，是向後相容的。
* 新增一個欄位時，若此欄位是必填，請給預設值，讓舊的應用程式也可以相容。

<!-- 什麼是向後相容 vs 向下相容 -->
<!--  向後相容 ??? -->

### 設計建議

```
api.yourdomain/v1/users
yourdomain/api/v1/users
```

或

```
api.yourdomain/users?v=1.0
```

或

```
Accept: api.yourdomain+json; version=1.0
```

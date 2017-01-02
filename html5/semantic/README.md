# 語意化

語意化的網路是可以讓電腦能夠更加理解網頁的內容，對於像是搜尋引擎的優化（SEO）或是推薦系統可以有很大的幫助。

* New tags：新的標籤，像是 `<header>`、`<section>` 等
* Application tags：也是新的標籤，像是 `<meter>`、`<progress>` 等
* Microdata：加入語意的資料讓搜尋引擎等網站可以正確顯示
* Form type：`<form>` 可以加入的 type 便多了，包含 email 和 tel 等屬性，瀏覽器會協助進行資料格式的驗證
* 有特殊意義的元素，由名稱可以了解到它與其他內容的差異。
* 語意元素全部都是 block elements


| 名稱            |        描述     |
| :------------- | :-------------  |
| article        | 通常擁有自己的標題 |
|                | `<article>` 中，還可以在包含 `<article>` |
|                | 表示網頁中一段完整的文件，或可單獨使用的文件 |
| aside          | 適合放置廣告       |
| details        | 定義使用者可顯示或隱藏之額外詳細資料 |
| figcaption     | 描述圖片的標題     |
| figure         | 用來包含影像及其說明，以便將圖及說明一連結在一起。 |
| section        | 包含內容及標題      |
|                | 可以將一段文章，分成好幾個 `<section>` |
| header         | 可以加入 table     |
|                | 可以加入搜尋表單    |
|                | 可以加入 `<nav>`   |
| footer         | 一個網頁中，可以有多個 `<footer>` |
|                | 適合用來表示版權資訊 |
|                | 適用用來表示相關的文章連結資訊 |
| main           |                   |
| mark           | 文字中要突顯的部分   |
| nav            | Defines navigation links |
| summary        | 定義 `<details>` 元素之可見標題 |
| time           | 適合用來表示時間     |


*題庫解析*：2-36, 2-38, 2-40, 2-41

### figure

```html
<figure>
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
  <figcaption>Fig.1 - A view of the pulpit rock in Norway.</figcaption>
</figure>
```

* [demo](http://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_figcaption)


**練習題**

* 官網上有哪些地方可以被改進。
* 官網上原始碼，哪些再轉換成 HTML5 時需要被改變？

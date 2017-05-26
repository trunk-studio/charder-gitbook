# 測試金字塔 (Test Pyramid)

![](https://img3.doubanio.com/lpic/s6246942.jpg)

測試金字塔的概念是由 Mike Cohn 所提出的一個測試開發概念，被 [Martin Fowler](http://search.books.com.tw/search/query/key/Martin+Fowler/adv_author/1/) 大師轉述而聲名大噪，相關細節描述在 [Succeeding with Agile](https://www.tenlong.com.tw/products/9780321579362) 這本書中，其中很重要的一點是強調你應該擁有更多低階的單元測試。

![](assets/test-pyramid.png)

層級 | 測試程式的數量 | 描述
---------|----------|---------
 第三層 | 10% | UI 測試 / 前端 (end-to-end) 測試
 第二層 | 20% | 商業邏輯測試 / 整合測試
 第一層 | 70% | 單元測試：針對程式中的最小測試單元進行驗證。

 相關資料來源：<https://martinfowler.com/bliki/TestPyramid.html>

<!--
[搞笑談軟工: BDD（21）從測試金字塔看BDD的自動化驗收測試](http://teddy-chen-tw.blogspot.tw/2017/03/bdd21bdd.html)
[软件测试反模式——杯型蛋糕 – ThoughtWorks洞见](http://insights.thoughtworkers.org/introducing-software-testing-cupcake-anti-pattern/)
-->
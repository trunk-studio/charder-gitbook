# 認證設計

### 認證 vs. 授權

這是常見大家容易搞混的兩個觀念：

* 認證 (Authentication)
  * 發 request 的人是誰？
  * 判斷使用者是不是他所宣稱的那個人
* 授權 (Authorization)
  * OAuth2.0：第三分授權，例如：整合 Facebook 登入，
  * [授权机制说明 - 微博API](http://open.weibo.com/wiki/%E6%8E%88%E6%9D%83%E6%9C%BA%E5%88%B6%E8%AF%B4%E6%98%8E)

<!-- 可以房仲的例子為說明 -->

### API Keys vs. Username/Password 驗證

* 可獨立存在 (Independence)
* 速度 (Speed)
* 減少暴露 (Reduced Exposure)：每暴露一次，就多一次機會有可能被側錄。
* 可追蹤 (Traceability)

http://demo.drfdocs.com/

### 常見認證機制

* 基本認證 (Basic Authentication)
* Session Authentication
* Token Authentication

### 延伸閱讀

* [API Token 入門](https://www.slideshare.net/chickenwu/api-token)
* [OAuth - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/OAuth)
* [【獨家】被駭攏係假！　遠通APP漏洞惹禍 | 即時新聞 | 20140115 | 蘋果日報](http://www.appledaily.com.tw/realtimenews/article/new/20140115/327006/)
* [淺談RESTful API認證 Token機制使用經驗分享](https://www.slideshare.net/TunYuChang/restful-api-token)

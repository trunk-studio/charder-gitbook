# API 文件管理 with Swagger

### API Framework / Platform

處理 API 文件、體驗介面與工具鏈的支援

[Swagger – The World’s Most Popular Framework for APIs.](http://swagger.io/)
  * [demo - 臺中交通資訊 API](http://e-traffic.taichung.gov.tw/DataAPI/swagger/ui/index#/)
  * Open Source
  * 定義了一套結構來描述 HTTP API
  * 以 [YAML](https://zh.wikipedia.org/wiki/YAML) 或 JSON 格式撰寫

[Apiary | Platform for API Design, Development & Documentation](https://apiary.io/)
  * [Apiary demo](http://docs.pandurangpatil.apiary.io/#reference/user/user-collection/list-all-users?console=1)
  * 以 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 格式撰寫

  <!--
  以臺中交通資訊API為例，哪些地方有改善的空間？
  版號管理
  參數風格不一致
  -->

**延伸閱讀**

* [Markdown editing with Visual Studio Code](https://code.visualstudio.com/Docs/languages/markdown)
* [Online YAML Parser](http://yaml-online-parser.appspot.com/)
* [API Blueprint | API Blueprint](https://apiblueprint.org/)
* [Github apiaryio - api blueprint](https://github.com/apiaryio/api-blueprint)

### Swagger 有哪些功能

* generator code
* 動態文件產生器
* 動態 API 的呼叫介面

### 誰有使用 Swagger

* Paypal
* Microsoft
* Amazon AWS API gateway

### Swagger 工具鍊

* Swagger Code Generator
* Swagger Editor, server code generator, client code generator:
  * swagger 的線上編輯器，可匯入匯出或格式轉換工具，並產生 client / server side 的程式碼下載，支援多種語言。
* Swagger UI:
  * HTML based API document & API test runner。從 swagger definitions 產生一組 HTML UI, 能夠直接查閱 API 的說明及用法， 甚至包含線上的測試工具，讓你直接免工具就可呼叫 API 看看結果。
* Tools & Integration:
  * 其他的 tool chain, 有興趣的可以直接參考 [Open Source Integrations](http://swagger.io/open-source-integrations/)

### [Swagger Editor]([Swagger Editor](http://editor.swagger.io/)

* swagger 的線上編輯器，匯入匯出及格式轉換工具，到產生 client / server side code

<!-- demo 使用方式，留 5 分鐘讓他們玩玩看 -->

### Swagger UI

* 從瀏覽器以視覺化的方式，測試以 Swagger 定義的 REST API。
* 內建的測試功能，可讓您以圖形方式來探索 API、測試 API 和檢查結果。
* 對應到 ide 下載的 Generate Server code

### Swagger CodeGen

* 支援多種語言 nodejs, java, ruby, go...
* 可產生各種語言的 server 端的 code

```
git clone https://github.com/swagger-api/swagger-codegen
cd swagger-codegen
mvn clean package
java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate  -i http://petstore.swagger.io/v2/swagger.json  -l nodejs-server  -o samples/server/petstore/nodejs
```

```
java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -i http://petstore.swagger.io/v2/swagger.json -l spring -o samples/server/petstore/spring
```

<!-- demo generate 出來的 code -->

**延伸閱讀**

* [Server stub generator HOWTO · swagger-api/swagger-codegen Wiki · GitHub](https://github.com/swagger-api/swagger-codegen/wiki/Server-stub-generator-HOWTO#nodejs)

### 如何開始

* 先用 IDE 編寫好 Swagger definition
* 之後匯出 JSON 檔
* 再把 JSON 檔匯入至 Swagger Codegen 產生出 server 端的 code

### Swagger 文件說明 (specification)

[Swagger  Specification](http://swagger.io/specification/)

**必要的欄位**

* swagger
* info
* paths

**最基本範例**

```
swagger: '2.0'
info:
  version: 0.0.0
  title: Simple API
paths:
  /:
    get:
      responses:
        200:
          description: OK
```

**Security Definitions Object Example**

```
securityDefinitions:
  api_key:
    type: apiKey
    name: api_key
    in: header
  petstore_auth:
    type: oauth2
    authorizationUrl: http://petstore.swagger.io/api/oauth/dialog
    flow: implicit
    scopes:
      write_pets: modify pets in your account
      read_pets: read your pets
```


<!-- ### 好處 / 優點 -->

### Swagger Hub

* [SwaggerHub and Open Source Comparison](https://swaggerhub.com/swagger-open-source-comparison/)
* [SwaggerHub Powerful API Design Platform, Built for Teams](https://swaggerhub.com/)

### 練習題

* 以 API 使用說明書為例子，改寫成 Swagger 格式的文件，並把 json 下載下來，commit 到 Git。

### Video

* [API Design with Swaggerhub - YouTube](https://www.youtube.com/watch?v=G3FQc5hcV2U)
* [Generate client stubs & document your REST-API using Swagger & Spring by Johannes Fiala - YouTube](https://www.youtube.com/watch?v=43GhBbP--oI)
* [Swagger tutorial — How to add Swagger OpenAPI to your REST API documentation - YouTube](https://www.youtube.com/watch?v=wC5hxY0RItQ)

### 更多用 Swagger 製作文件的例子

* [Reverb API Documentation](https://reverb.com/swagger#!/accounts)
* [VocaDB API Documentation](http://vocadb.net/swagger/ui/index)
* [Watson Developer Cloud Documentation](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/apis/)
* [Pet Store](http://petstore.swagger.io)
* [learnapidoc API](http://learnapidoc.com/swagger/)

### 延伸閱讀

* [API & SDK Design #4, API 上線前的準備 - Swagger + Azure API Apps · 安德魯的部落格](http://columns.chicken-house.net/2016/11/27/microservice6/)
* [Swagger - Rest API 的描述語言](https://zhuanlan.zhihu.com/p/21353795)
[使用 Swagger 文档化和定义 RESTful * API](http://www.ibm.com/developerworks/cn/web/wa-use-swagger-to-document-and-define-restful-apis/index.html)
* [Swagger API文档编写格式指南 | 研发100](http://120.26.63.93/topic/4/swagger-api%E6%96%87%E6%A1%A3%E7%BC%96%E5%86%99%E6%A0%BC%E5%BC%8F%E6%8C%87%E5%8D%97)
* [Swagger入门教程 - JoiT - 博客园](http://www.cnblogs.com/JoiT/p/6378086.html)
* [Swagger tutorial | I’d Rather Be Writing](http://idratherbewriting.com/pubapis_swagger/)
* [GitHub - typicode/jsonplaceholder: A simple online fake REST API server](https://github.com/typicode/jsonplaceholder)

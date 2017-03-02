# API 文件管理 with Swagger

### API Blueprint / framework

* Apiary.io
  * [Apiary demo](http://docs.pandurangpatil.apiary.io/#reference/user/user-collection/list-all-users?console=1)
  * 以 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 格式撰寫
* [Swagger – The World’s Most Popular Framework for APIs.](http://swagger.io/)
  * open source
  * 以 [YAML](https://zh.wikipedia.org/wiki/YAML) 或 JSON 格式撰寫

**延伸閱讀**

* [Markdown editing with Visual Studio Code](https://code.visualstudio.com/Docs/languages/markdown)
* [Online YAML Parser](http://yaml-online-parser.appspot.com/)
* [API Blueprint | API Blueprint](https://apiblueprint.org/)
* [Github apiaryio - api blueprint](https://github.com/apiaryio/api-blueprint)

<!--
以臺中交通資訊API為例，哪些地方有改善的空間？

* 版號管理
* 參數風格不一致
-->

### 誰有使用 Swagger

* Paypal
* Microsoft
* Amazon AWS API gateway

### Tools

* Swagger Editor：編輯 document 的 IDE
* Swagger UI：Generate Client
* Swagger CodeGen：Generate Server Stub

### [Swagger Editor]([Swagger Editor](http://editor.swagger.io/)

* swagger 的線上編輯器，匯入匯出及格式轉換工具，到產生 client / server side code

<!-- demo 使用方式，留 5 分鐘讓他們玩玩看 -->

### Swagger UI

* 從瀏覽器以視覺化的方式，測試以 Swagger 定義的 REST API。
* 內建的測試功能，可讓您以圖形方式來探索 API、測試 API 和檢查結果。
* 對應到 ide 下載的 Generate Server code

**延伸閱讀**

* [臺中交通資訊 API](http://e-traffic.taichung.gov.tw/DataAPI/swagger/ui/index#/)

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

### getting started

* 先用 IDE 編寫好 Swagger definition 後，匯出 json 檔，再把 json 檔匯入至 Swagger Codegen 產生出 server 端的 code

### 規範標準 (specification)

<!-- 下週在教編修 swagger doc -->

[Swagger  Specification](http://swagger.io/specification/)

**範例**

```
swagger: "2.0"
info:
  version: "1.0"
  title: "Hello World API"
paths:
  /hello/{user}:
    get:
      description: Returns a greeting to the user!
      parameters:
        - name: user
          in: path
          type: string
          required: true
          description: The name of the user to greet.
      responses:
        200:
          description: Returns the greeting.
          schema:
            type: string
        400:
          description: Invalid characters in "user" were provided.
```

**必要的欄位**

* swagger
* info
* paths

<!-- ### 好處 / 優點 -->

<!-- ### 共同協助撰寫 API document -->

### SwaggerHub

* [SwaggerHub and Open Source Comparison](https://swaggerhub.com/swagger-open-source-comparison/)
* [SwaggerHub Powerful API Design Platform, Built for Teams](https://swaggerhub.com/)

### 其他 Tools

[Open Source Integrations](http://swagger.io/open-source-integrations/)

* [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
* [swaggerize-express](https://www.npmjs.com/package/swaggerize-express)

### 練習題

* 以 API 使用說明書為例子，改寫成 Swagger 格式的文件，並把 json 下載下來，commit 到 Git。

### Video

* [API Design with Swaggerhub - YouTube](https://www.youtube.com/watch?v=G3FQc5hcV2U)
* [Generate client stubs & document your REST-API using Swagger & Spring by Johannes Fiala - YouTube](https://www.youtube.com/watch?v=43GhBbP--oI)

### 延伸閱讀

* [API & SDK Design #4, API 上線前的準備 - Swagger + Azure API Apps · 安德魯的部落格](http://columns.chicken-house.net/2016/11/27/microservice6/)
* [Swagger - Rest API 的描述語言](https://zhuanlan.zhihu.com/p/21353795)
[使用 Swagger 文档化和定义 RESTful * API](http://www.ibm.com/developerworks/cn/web/wa-use-swagger-to-document-and-define-restful-apis/index.html)
* [Swagger API文档编写格式指南 | 研发100](http://120.26.63.93/topic/4/swagger-api%E6%96%87%E6%A1%A3%E7%BC%96%E5%86%99%E6%A0%BC%E5%BC%8F%E6%8C%87%E5%8D%97)
* [Swagger入门教程 - JoiT - 博客园](http://www.cnblogs.com/JoiT/p/6378086.html)

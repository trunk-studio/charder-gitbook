# API 測試

### API 的需求層級

![](http://apiux.com/wp-content/uploads/2013/05/APIMaslowPyramid.png)

* Usability(可用性)：

<!--可用性位於金字塔的底部，因為它是最重要的特徵，它將決定您的API在開發人員中的成功。

您的API是否容易由開發人員設置和使用？您應該確保任何開發人員不要花費超過3秒鐘來了解您的API，30秒找到正確的端點和3分鐘即可開始使用（  3：30：3規則，由Ori Pekelman）。
-->

* Functionality（功能性）：API 的使用方式要跟 API 文件一致

<!--您的API是否按預期工作？ 您的API端點應該與文檔中所公佈的完全一致。在發生意外事件的情況下，您應該提供易於使用的錯誤代碼。-->

* Reliability(可靠性)：正常的運行時間，速率限制

<!--您的API是否完美無缺？ 您應該關心正常運行時間，速率限制和限制，以確保根據您的使用政策正確處理每個API調用。如果你有一個關於你的API的商業模式，那麼你應該特別注意這個可靠性。-->

* Proficiency(能力)： Swagger

 <!--在滿足所有以前的需求之後，您應該準備使用文檔和圖書館，教育開發人員，擴大他們的技能。如有可能，提供鼓勵討論和參與的工具。-->

* Creativity(創造力)：

<!--通過將不同的API混合在一起來構建新產品。如果您對開發人員可以做什麼或不能做的太僵硬，您的API人氣肯定會降低。-->


### 常見的工具

* supertest / superagent
* Postman (GUI)
* JMeter
* SoapUI(有提供安全測試的功能)

```
SQL Injection : tries to exploit bad database integration coding
XPath Injection : tries to exploit bad XML processing inside your target service
Boundary Scan : tries to exploit bad handling of values that are outside of defined ranges
Invalid Types : tries to exploit handling of invalid input data
Malformed XML : tries to exploit bad handling of invalid XML on your server or in your service
XML Bomb : tries to exploit bad handling of malicious XML request (be careful)
Malicious Attachment : tries to exploit bad handling of attached files
Cross Site Scripting : tries to find cross-site scripting vulnerabilities
Custom Script : allows you to use a script for generating custom parameter fuzzing values
```

### 延伸閱讀

* [API Hierarchy of Needs | API UX](http://apiux.com/2013/05/29/api-hierarchy-needs/)

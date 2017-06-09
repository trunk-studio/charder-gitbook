# TDD (Test-driven development) 測試驅動開發

TDD 是一種程式開發的技巧，簡單來說就是**先寫測試程式，然後才實作功能**，藉由先定義規格，在尚未實作前就能知道開發方向是否正確，實作完成後能讓下一個開發者藉由測試快速得知輸入和輸出結果。

* 從測試去思考程式如何實作
* 用自然語言描述測試案例
  * 使用者和工程師用同一種語言，避免溝通成本
  * 測試後的輸出結果可以直接做為文件閱讀

![TDD lift circle](http://www.agilenutshell.com/assets/test-driven-development/tdd-circle-of-life.png)

剛開始寫測試時會先定義 function 的輸入輸出，一開始測試會 Test fail，實作 function 後能讓測試能順利通過，實作完成為了增加程式碼的可讀性、重用性、效能等等因素重構，導致 Test fail 直至重構完成，測試能快速驗證重構後的結果，不會導致其他狀況發生，形成 TDD 的正向循環。

## TDD 的優點

* 快速驗證 function 正確性
* 寫測試就是寫文件，有輸入輸出
* 多人有效並無障礙的溝通
* 程式完成後不怕重構

## 一個完整的測試

* 準備環境
* 準備資料
* 定義輸入
* 執行 function
* 驗證輸出  

## [Mocha](https://mochajs.org/) 測試框架

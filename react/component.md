# Component
  - Component 本身足以完整的自我表達其可能的顯示變化和擁有的行為
  - Component 能抽象化的傳遞接口，就像是物件導向的概念，能產生 UI 的實體，外面能傳遞參數進去
  - 每個 Component 結構的第一層，只能有一個根節點元素
  - Component Class 名稱首字母必須大寫
  - 組合 - 一個組件易於和其它組件一起使用，或者嵌套在另一個組件內部。如果一個組件內部創建了另一個組件，那麼說父組件擁有它創建的子組件，通過這個特性，一個複雜的UI可以拆分成多個簡單的UI組件
  - 重用 - 每個組件都是具有獨立功能的，它可以被使用在多個UI場景
  - 維護 - 每個小的組件僅僅包含自身的邏輯，更容易被理解和維護

![](https://i2.read01.com/uploads/0A2m4r01.jpg)


React 練習專案
https://github.com/agileworks-tw/react-basic-practice.git

練習:
TodoListItem
  - 客製化一個 TodoListItem，能顯示文字

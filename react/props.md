# Props
- Props 是將資料從 Component 外部傳遞給 Component 內部的媒介
- 在 Component 內部透過 this.props 取得傳遞進來的 Props 資料物件
- 當 Props 資料傳遞到 Component 內部後，應是不可再變更的固定值
- 設計 Component 時抽象化出跟問題相關的 Props，以方便進行重用
- 若想要傳遞的 Props 的值是字串的話，可以直接使用雙引號，其他型別的值則需要使用 {} 來包住
- propTypes - 提示使用 Component 的人，該 Component 有哪些 props 能用
- defaultProps - Props 預設值


練習:
TodoList
  - 傳入 Array 使用 TodoListItem 顯示出來
  - 能新增 todo
  - 能刪除 todo 
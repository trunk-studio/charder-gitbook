# Virtual DOM
如果，你有像下方的表格需要呈現，可以根據不同欄位排序、搜尋，欄位的點擊事件等等
![](https://camo.githubusercontent.com/ac106f4ec3a61bb86f6e94d5f6dda8da668e5415/687474703a2f2f6c69766f7261732e6769746875622e696f2f626c6f672f7669727475616c2d646f6d2f736f72742d7461626c652e706e67)

- Virtual DOM 定義 UI 要怎麼呈現，而 React 負責 Render 和操作畫面，不用開發者煩惱
- 純資料的物件結構，映射到實際的 DOM
- 複雜或頻繁的DOM操作通常是性能瓶頸、Bug 產生的原因
- UI 開發最大的挑戰，「重用」、「反應變化」

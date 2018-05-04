# 開發流程

![development-flow](assets/development-flow.png)

> 注意：每次修改 native module，都要重新 install App。

## 使用 yarn link

![yarn-link](assets/yarn-link.png)

---

## 使用 react-native link

![react-native-link](assets/react-native-link.png)

---

## 引用 module

```javascript
  import { toast } from ‘react-native-my-module’;

  import { wifiManager } from ‘react-native-my-module’; 

  // 假設有 show() method
  toast.show();
```
# Libraries
- 純 Component 的 Libraries 
- 包含原生程式碼的 Libraries
  - 使用 `react-native link` 設定套件，rnpm link 已棄用
  - 使用 `yarn add` 內建 `react-native link` 
  - 移除套件需要 `react-native unlink 套件名稱`，在移除 node module
  - link 套件後需 `react-native run-android` 重新編譯

## Sample 

[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
```
npm install react-native-router-flux --save
```

### 成功畫面
![](./assets/link.png)


```
import {
  Scene,
  Router,
  Actions,
  Stack,
} from 'react-native-router-flux';

<Router>
  <Stack key="root">
    <Scene key="list" component={List} title="List"/>
    <Scene key="listDetail" component={ListDetail} title="內容"/>
  </Stack>
</Router>
```
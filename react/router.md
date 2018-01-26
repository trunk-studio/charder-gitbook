# Router
- 切換頁面
- Darwer
- Tab

## Sample 

[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
```
npm install react-native-router-flux --save
```

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

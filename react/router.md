# Router、Navigation
- 切換頁面
- Tab
- Darwer

![](https://f8-app.liaohuqiu.net/static/images/iOS%20vs.%20Android@3x.png)


## Sample 

[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
```
npm install react-native-router-flux --save
```
## Props

key - 切換頁面時要呼叫的 key  
component - 該頁面 Component  
title - 預設標題  
initial - 預設頁面  

```
import { Router, Stack, Scene } from "react-native-router-flux";

<Router>
  <Stack key="root">
    <Scene key="button" component={ButtonSample} title="按鈕"/>
    <Scene key="list" component={List} title="List"/>
  </Stack>
</Router>
```

## 常用方法

```
import { Actions } from "react-native-router-flux";
```

切換到其他頁面

```
Actions.key()
```

切換到其他頁面，並且帶入 props

```
Actions.key({ title: '新的標題' })
```

回到上一個頁面

```
Actions.pop()
```

回到上一個頁面，並且更新 props

```
Actions.pop({
  refresh: {
    title: '更新的標題'
  }
})
```

更新當前 Component props

```
Actions.refresh({ title: '刷新標題' })
```

## Route 切換動畫

```
npm install --save react-navigation
```

```
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

<Router
  transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}
>
  <Stack key="root">
    <Scene key="button" component={ButtonSample} title="按鈕"/>
    <Scene key="list" component={List} title="List"/>
  </Stack>
</Router>
```

## Deep Link
從網頁跳轉到 APP 的功能，可帶入預設值，像是網頁的 Get 參數一樣 `/user/1` 代表會跳轉到頁面 user id 1 的使用者，在 RNRF 也能使用類似的功能  

常見使用情境
- Email 認證驗證碼跳轉
- 電商 APP 跳轉到特定商品下單頁面


### 使用方法

AndroidManifest.xml 設定

```
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="app" android:host="test" />
</intent-filter>
```
根據 scheme 跟 host 的設定，如果網頁連結是 `app://test` 將會打開該 APP

程式碼
```
<Router uriPrefix={'test'}>
  <Stack key="root">
    <Scene key="button" path={"/button/:string"} component={ButtonSample} title="按鈕"/>
    <Scene key="list" path={"/list/:search"} component={List} title="List"/>
  </Stack>
</Router>
```

如果連結為 `app://test/button` 將會打開 button 頁面  
如果連結為 `app://test/list/a` 將會打開 list 頁面，並帶入參數 a 
可以用 this.props.search 拿到 **a** 字串

### 測試方法

```
$ adb shell am start
        -W -a android.intent.action.VIEW
        -d <URI> <PACKAGE>

$ adb shell am start -W -a android.intent.action.VIEW -d "app://test" com.test2
```

## 客製 NavBar

```
<Router uriPrefix={'test'} navBar={CustomNavBar}>
</Router>
```

```
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default class CustomNavBar extends React.Component {

  _renderLeft() {
    if (this.props.scene.index > 0) {
      return (
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.navBarItem, { paddingLeft: 10, backgroundColor: 'red'}]}>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={[ styles.navBarItem, { backgroundColor: 'red'}]}/>
      )
    }
  }

  _renderMiddle() {
    return (
      <View style={[styles.navBarItem, { backgroundColor: 'blue' }]}>
      </View>
    )
  }

  _renderRight() {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={[styles.navBarItem, { paddingLeft: 10, backgroundColor: 'yellow' }]}>
      </TouchableOpacity>
    )
  }

  render() {
    console.log(this.props);
    return (
      <View style={[styles.container]}>
        { this._renderLeft() }
        { this._renderMiddle() }
        { this._renderRight() }
      </View>
    )
  }
}
```

## LightBox

Route
```
<Router uriPrefix={'test'} navBar={CustomNavBar}>
  <Lightbox>
    <Stack key="root">
      <Scene key="button" component={ButtonSample} title="按鈕"/>
      <Scene key="list" path={"/list/:search"} component={List} title="List"/>
      <Scene key="detail" path={"/user/:id"} component={Detail} rightTitle="編輯"/>
      <Scene key="update" component={Update} />
    </Stack>
    <Scene key="modal" component={ErrorBox} />
  </Lightbox>
</Router>
```

BaseLightbox
```

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class BaseLightbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 1,
    }).start();
  }

  closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 0,
    }).start(Actions.pop);
  }

  _renderLightBox = () => {
    const { children, horizontalPercent = 1, verticalPercent = 1 } = this.props;
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;
    return (
      <View
        style={{
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingBottom: 30,
        }}
      >
        {children}
        <Button title="Close" onPress={this.closeModal}  />
      </View>
    );
  }

  render() {
    return (
      <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
        {this._renderLightBox()}
      </Animated.View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

ErrorModal
```
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Modal from './BaseLightbox.js';

const ErrorModal = () => (
  <Modal hideClose verticalPercent={0.5} horizontalPercent={0.5}>
    <View flex={1} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
      <Text>Error</Text>
      <Text>Slides up from the bottom, and covers the entire screen with no transparency</Text>
    </View>
  </Modal>
);

const styles = StyleSheet.create({

});


export default ErrorModal;
```

## [Tabs](https://github.com/aksonov/react-native-router-flux/blob/master/docs/API.md#tabs-tabs-or-scene-tabs)

```
<Router>
  <Stack key="root">
    <Tabs
      tabBarStyle={{ backgroundColor: "#eee" }}
      activeBackgroundColor="white"
      inactiveBackgroundColor="#BBB"
      tabBarPosition={'bottom'}
    >
      <Scene
        title="按鈕"
        key="button"
        hideNavBar
        component={ButtonSample}
        icon={() => {
          return <Icon name={'rocket'} size={20} color={'#ccc'} />
        }}
      />
      <Scene
        title="清單"
        key="tabList"
        component={List}
        hideNavBar
        icon={() => {
          return <Icon name={'search'} size={20} color={'#ccc'} />
        }}
      />
    </Tabs>
    <Scene key="list" component={List} title="List"/>
  </Stack>
</Router>
```

## Drawer

```
Action.drawerOpen();
```

```
<Router>
  <Stack key="root">
    <Drawer
      hideNavBar
      key="drawer"
      contentComponent={DrawerContent}
      drawerWidth={300}
    >
      <Scene key="button" component={ButtonSample} title="按鈕"/>
      <Scene key="list" component={List} title="List"/>
    </Drawer>
  </Stack>
</Router>
```


DrawerContent
```
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15
  },
});

class DrawerContent extends React.Component {

  render() {
      return (
        <View style={styles.container}>
          {/* 樣式 */}
        </View >
      );
  }
}

export default DrawerContent;
```

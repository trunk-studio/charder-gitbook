# Text
用於顯示文本的 React Component，並且它也支持嵌套、樣式，以及觸摸處理。

常用 style:
```
color: 顏色
fontSize: 字型大小
fontWeight: 字型寬度，'normal', 'bold', '100'~'900'(切記是字串)
textAlign: 對齊方式
```
常用 props:
```
allowFontScaling: 是否根據系統字型大小調整字型大小
numberOfLines: 根據 View 佈局換行最多行數，超過行數變為...
```

```
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

export default class TextSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>HelloJS</Text>
        <Text style={styles.baseText}>
          <Text style={styles.title}>HelloJS</Text>
          <Text style={styles.desc}> Good</Text>
        </Text>
        <Text
          style={{ fontSize: 40 }}
          numberOfLines={1}
          onPress={() => {
            Alert.alert("阿!!", "你點到我了");
          }}
        >
          測試測試測試測試測試測試測試
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
  text1: {
    fontSize: 30,
  },
  baseText: {
    fontSize: 18,
    color: 'blue'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  desc: {
    color: 'red',
  }
})
```

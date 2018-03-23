# 動畫
流暢、有意義的動畫對於移動應用用戶體驗來說是非常重要的。  
現實生活中的物體在開始移動和停下來的時候都具有一定的慣性  
React Native提供了兩個互補的動畫系統：用於全局的佈局動畫LayoutAnimation  
和用於創建更精細的交互控制的動畫Animated。  
  
React Native 使用動畫上跟 React 網頁有顯著的差異  

## React - 使用 react-addons-css-transition-group

```javascript
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

render: function() {
  return (
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
      <h1>Fading at Initial Mount</h1>
    </ReactCSSTransitionGroup>
  );
}
```
CSS

```javascript
.example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
```

## React Native - 使用 Animated

Animated 使開發者可以非常容易地實現各種各樣的動畫和交互方式，並且具備極高的性能。 Animated 可以聲明的形式來定義動畫的輸入與輸出，在其中建立一個可配置的變化函數，然後使用簡單的 start / stop 方法來控制動畫按順序執行。
 Animated 封裝了四個可以動畫化的組件：View、Text、Image 和 ScrollView
 
 帶有淡入動畫效果的 Component：

```javascript
import React, { Component } from 'react';
import {
  Animated,
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.show();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.show();
    } else {
      this.hide();
    }
  }
  
  show = () => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
      }
    ).start();
  }
  
  hide = () => {

  }
  
  render() {
    return (
      <Animated.View 
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
```

接下來就能使用 FadeInView 來做出淡入的 View 了

```javascript
import FadeInView from './FadeInView'

<FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
  <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
</FadeInView>
```

練習ㄧ: 對 FadeInView 傳入 props visible 根據 visible 淡入淡出

練習二: 寫一個 MoveRightView 會慢慢滑動到右邊的動畫
```
transform: [
  { translateX: this.state.xPosition },
]
```

### timing

duration: 動畫持續時間，預設 500 ms  
easing: 動畫過度曲線，預設值: Easing.inOut(Easing.ease)，[支援曲線](https://reactnative.cn/docs/0.51/easing.html#content)，[曲線參考](http://xaedes.de/dev/transitions/)  
delay: 動畫持續時間  

練習三: 使用 MoveRightView 嘗試不同的過度曲線

### decay
推動一個值以一個初始的速度和一個衰減係數逐漸變為0。  
像是摩擦力的感覺。  
velocity: 初始速度，必填  
deceleration: 衰減係數，默認值0.997  

## 組合動畫
多個動畫可以通過 sequence（順序執行）、parallel（同時執行）來組合使用。它們中的每一個都接受一個要執行的動畫數組，並且自動在適當的時候調用 start / stop。舉個例子：

### sequence
按順序執行一個動畫陣列裡的動畫，等待一個完成後再執行下一個。如果當前的動畫被中止，後面的動畫則不會繼續執行。

左右來回動畫
```javascript
Animated.sequence([
  Animated.timing(this.state.xPosition, { toValue: 200 }),
  Animated.timing(this.state.xPosition, { toValue: 0 }),
]).start();
```

### loop(animations)

重複執行動畫
```javascript
Animated.loop(
  Animated.sequence([
    Animated.timing(this.state.xPosition, { toValue: 200 }),
    Animated.timing(this.state.xPosition, { toValue: 0 }),
  ]).start();
)
```

### interpolate
在更新屬性之前對值進行插值。譬如：把 0 - 1 映射到 0deg - 360deg。

```javascript
const rotate = this.state.rotate.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})
```

練習四: 做一個簡單的旋轉 loading 動畫
```javascript
transform: [
  {
    rotate: '45deg',
  },
]
```

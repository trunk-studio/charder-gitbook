# TextInput
輸入框
```
<TextInput 
  style={{ height: 50  }}
  onChangeText={(text) => { this.setState({ text: text.toUpperCase() }) }}
  underlineColorAndroid={'transparent'}
/>
```

## Props
## onChangeText
```
onChangeText={(text) => { this.setState({ text }) }}
```
## value
強制設定顯示顯示的值

## 延伸閱讀
[KeyboardAvoiding](https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580)

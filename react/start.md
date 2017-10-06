# 專案環境

## CLI

`$ npm install -g react-native-cli`

## 開新專案

```
$ react-native init app
$ cd app
$ npm start
$ react-native run-android
```

**react-native init**
- 新增乾淨的專案

**npm start**
- 開啟 Bundle server
  - Bundle server 負責把 JavaScaript 程式碼轉為 Native Code
  - 負責接收、傳送 Debug 訊息

**react-native run-android、react-native run-ios**
- 負責安裝開發模式的 react native app 至專案

## 專案結構
```
.
├── __tests__
├── android
├── index.android.js
├── index.ios.js
├── ios
├── node_modules
└── package.json
```

App 名稱位置 : `./android/app/src/main/res/values/strings.xml`  
App icon: `./android/app/src/main/res/mipmap-*`

## 進入點
- index
- .ios、.android
- AppRegistry

## Debug 選單 
- Debug JS Remote
  - http://localhost:8081/debugger-ui
- reload
- touchable
- Hot reload
- Live Reload

## 常見問題

```
Packager can't listen on port 8081
```
解法: 有其他 React Native Bundle server 正在執行

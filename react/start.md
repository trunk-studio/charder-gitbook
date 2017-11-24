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
├── android
├── App.js
├── app.json
├── index.js
├── ios
├── node_modules
├── npm-debug.log
├── package.json
├── __tests__
└── yarn.lock
```

App 名稱位置 : `./android/app/src/main/res/values/strings.xml`  
App icon: `./android/app/src/main/res/mipmap-*`

## 進入點
- index.js
- App.js
- .ios、.android

## Debug 選單 
- Debug JS Remote
  - http://localhost:8081/debugger-ui
- reload
- touchable
- Hot reload
- Live Reload

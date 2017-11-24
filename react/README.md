# React 介紹
  * React 起源於 Facebook
  * 為數據提供渲染的 JavaScript 庫
  * Facebook、Instagram、Netflix、Airbnb 都在用
  * Learn Once, Write Anywhere

React 捨棄了傳統使用 HTML 的開發方式，
改成完全由 JavaScript 程式來代管 DOM 的產生與操作，
實現 100% 純粹的 Client-Side Rendering。
- 傳統網頁
  - HTML 定義有哪些 Dom
  - JavaScript 定義互動行為
  - CSS 定義樣式
- React
  - 不使用 HTML 定義畫面，因為 HTML 不是一個程式語言，沒有邏輯處理的能力，函數等功能，無法處理複雜的互動
  - 完全使用 JavaScript 做 UI 的產出

**僅僅是 UI**
* React 本身並不是一個完整的前端框架，而是一個只處理 View 的函式庫，也就是負責定義 UI 並自動管理 DOM 的產生與操作
* React 是一個中間媒介，連結了 UI 的定義層面與 DOM 的實體層面

React 工作分為兩個部分
- react 將定義的 UI 組出一個虛擬的畫面結構
- react-dom、react-native: 以這個虛擬結構作為依據，產生對應的 DOM，例如:網頁、React Native、React VR 等等

Sample: https://snack.expo.io/
```
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url. You get a new url each time you save.
        </Text>
      </View>
    );
  }
}
```

**React Native  是什麼？**

* 2013 年夏天 Facebook 內部駭客松的 project
* 2015 年 1 月 React.js Conf 發表， 2015 年 5 月正式發佈，當時只有 IOS 版本，2015 年 9 月 Android 才正式支援
* Learn once, write anywhere: Build mobile apps with React
    * iOS
    * Apple TV
    * Android
* 用 JavaScript 撰寫真正的原生 App，不是所謂的 mobile web app、HTML5 app、 hybrid app


**特色**

* 使用同一套專案 Code Base 即可達成跨平台 App 開發建置與維護。
* 效能與使用體驗接近原生開發。
* 採用與 Web 前端相同的 REST API / JWT 存取後端資料服務。
* 維護人員進入門檻低(熟悉 JavaScript 語言之開發人員)。
* 可同步使用 iOS 與 Android 雙平台裝置進行測試與調校。
* 開發時可以快速的更新 UI，不用重新編譯
* 免送審更新程式之機制，Microsoft CodePush。
* 更新週期快速 v0.40 以前每兩週 release 一個版本，目前每個月 release 一個版本
* [Product Pains](https://react-native.canny.io/feature-requests/) - 讓社群投票表決 feature

**缺點**
* 開發環境對於電腦硬體需求較高。
* 需熟悉了解 React

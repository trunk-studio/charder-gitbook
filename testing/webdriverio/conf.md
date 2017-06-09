# WebdriverIO 設定檔

wdio.conf.js

```js
exports.config = {
    
    //
    // ==================
    // 測試程式放置的位置
    // ==================
    //
    specs: [
        './test/specs/**/*.js'
    ],
    //
    // ============
    // 設定要測試的瀏覽器屬性值
    // ============
    // <https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities>
    capabilities: [{
        browserName: 'firefox'
    }],

    // 使用同步模式
    sync: true,

    // 設定 log 的層級 : silent | verbose | command | data | result | error
    logLevel: 'error',

    // 測試錯誤截圖放置的位置
    screenshotPath: './errorShots/',

    // 要測試的網站 domain 網址
    baseUrl: 'http://localhost',

    // 預設 waitFor* 檔案 timeout 的時間
    waitforTimeout: 10000,

    // 當 Selenium Grid 對於我們送的 request 沒有反應的時候，預設多久算 timeout。
    connectionRetryTimeout: 90000,

    // 預設重連線幾次
    connectionRetryCount: 3,

    // 使用的外掛
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // 使用的服務
    services: ['testingbot'],

    // 使用哪一種測試框架來跑我們的前端測試程式
    // 支援: Mocha, Jasmine, and Cucumber
    framework: 'mocha',

    // 報表格式
    reporters: ['spec'],
    
    // Mocha 的 Option 設定
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
}
```
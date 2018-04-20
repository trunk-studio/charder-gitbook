# Release

用 keytool 生成一個私有密鑰的 key，在 terminal 下
```
keytool -genkey -v -keystore ${名稱}.keystore -alias ${別名} -keyalg RSA -keysize 2048 -validity 10000
```

例如:
```
keytool -genkey -v -keystore demo.keystore -alias demo -keyalg RSA -keysize 2048 -validity 10000
```

會詢問你一些相關的資訊  

![http://ithelp.ithome.com.tw/upload/images/20170111/20103341gGlj6tw8nn.png](http://ithelp.ithome.com.tw/upload/images/20170111/20103341gGlj6tw8nn.png)  
  
最後就會生成一個有效期限為 10000 天的 demo.keystore 放在當前的目錄下，這把 key 一定要保管好，不然以後上架會很麻煩的，還有 React Native 的 .gitignore 預設有 `*.keystore` 並不會把 key 加入 git 裡面版本控制，如果移除 ignore 把 key 加上版控，會有嚴重的資安問題。

# 設定 gradle

- 把 `demo.keystore` 放到 `/adnroid/app` 目錄下
- 編輯 `~/.gradle/gradle.properties` ，如果沒有這個檔案自己新增一個，然後新增下列文字
```
KEY_STORE_FILE=demo.keystore
KEY_ALIAS=demo
STORE_PASSWORD=這裡輸入儲存庫密碼
KEY_PASSWORD=這裡輸入金鑰密碼
```
這個會設定 gradle 的全域變數，等等會拿來給 App 簽名


# 設定專案中的 gradle
然後開啟專案當中的 `android/app/build.gradle`，新增下列的配置
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

# Build Bundle

我們能用下列指令把 Bundle build 到我們的本地，平時我們在開發時的 `npm start` 其實就是開發的 Bundle server，但是 production 版本不可能讓使用者每次打開都來我們 server 拿 Bundle.js 吧，所以要打包一個檔案放進去一起編譯成 apk。
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

# Build Release Apk

```
cd android && ./gradlew assembleRelease
```

生成一個 Apk 路徑是 `android/app/build/outputs/apk/app-release.apk`
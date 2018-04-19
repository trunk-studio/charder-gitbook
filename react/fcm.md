# [FCM](https://github.com/evollu/react-native-fcm)
跨平台的推播服務，能推播訊息到 Android 與 iOS

# Install

```
npm install react-native-fcm --save
react-native link
```

android/build.gradle
```
dependencies {
    classpath 'com.android.tools.build:gradle:2.0.0'
+   classpath 'com.google.gms:google-services:3.0.0'
```

android/app/src/main/AndroidManifest.xml
```
<application
    ...
    android:theme="@style/AppTheme">

    <!--<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@mipmap/ic_notif"/>-->
    <service android:name="com.evollu.react.fcm.MessagingService" android:enabled="true" android:exported="true">
      <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT"/>
      </intent-filter>
    </service>

    <service android:name="com.evollu.react.fcm.InstanceIdService" android:exported="false">
      <intent-filter>
        <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
      </intent-filter>
    </service>
</application>
```

android/app/build.gradle
```
 dependencies {
     compile project(':react-native-fcm')
+    compile 'com.google.firebase:firebase-core:10.0.1' //this decides your firebase SDK version
+    compile 'com.google.firebase:firebase-messaging:10.0.1'
```

# Configure Firebase Console

- Firebase 新增專案  
- 下載 google-services.json 放置 'android/app'  

# Usage

```
import FCM, {NotificationActionType} from "react-native-fcm";

async componentDidMount() {
  console.log("componentDidMount");
  FCM.getInitialNotification().then(notif => {
    console.log("TOKEN (getFCMToken)", notif);
  });
  FCM.getFCMToken().then(token => {
    console.log("TOKEN (getFCMToken)", token);
    this.setState({token: token || ""})
  });
}
```
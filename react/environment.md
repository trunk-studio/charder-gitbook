# 開發環境

## VM 使用教學
- 開啟 Genymotion
- 開啟 Genymotion 當中的 Android 虛擬機 **Custom Phone - 7.1.0 - API 25 - 768x1280**，等待開機完成
- 命令提示字元執行指令
  ```
  $ adb devices
  $ adb tcpip 5556
  ```
- 開啟 VirtualBox 當中的 HelloJS-RNC9 
- HelloJS-RNC9 出現 login 字樣，開啟網頁 http://localhost:9083/ide.html
- 到 C9 terminal 視窗輸入指令
  ```
  $ adb connect $ip:5556
  $ adb devices
  /* 測試是否有連上 */
  $ adb shell am start -a android.settings.SETTINGS
  ```
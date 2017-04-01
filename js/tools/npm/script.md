# NPM Script

* 你可以把它想成是 Hook，指定 npm 特定生命週期時，執行 script。
* 例如：(pretest) 測試前需要清除舊測試報表，(test) 測試時需要執行預先寫好的測試 bash，(posttest) 測試完成後需要發送測試結果的 email 給需要被告知的人。

```json
  "scripts": {
    "start": "node demo-npm-config.js",
    "test": "echo 'execute npm test script' && exit 1",
    "preinstall": "echo 'execute npm preinstall script'",
    "install": "echo 'execute npm install script'",
    "postinstall": "echo 'execute npm postinstall script'"
  }
```

![](assets/demo-script.png)

```
{
  "scripts":{
    "preinstall":"./configure",
    "install":"make && make install",
    "test":"make test"
  }
}
```

* prepare
* publish、postpublish
* preinstall
* install、postinstall
* preuninstall、uninstall
* postuninstall
* preversion、version: 修改套件版本號之前執行
* postversion: 修改套件版本號之後執行
* pretest、test、posttest
* prestop、stop、poststop
* prestart、start、poststart
* prerestart、restart、postrestart: 如果指定 restart script，restart 命令將會執行 stop script 再執行 start script。

**新增 script**

```
{
  "scripts":{
    "start":"node demo.js",
    "demo":"node demo.js"
  }
}
```

**執行 script**

```
npm run demo
npm start
```

**練習題**

新增一個名稱叫 demo 的 script，並可以成功執行。

# NPM Package.json

* [package.json | nam Documentation](https://docs.npmjs.com/files/package.json)
* [package.json文件 — JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/nodejs/packagejson.html)

<!-- 
* 說明 package.json 的用途
-->

```
{
  "name": "xx",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "nodemon": "^1.11.0"
  },
  "devDependencies": {
    "mocha": "^1.11.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "alincode <alincode@gmail.com>",
  "license": "ISC"
}
```

### 版本

* version: 必須匹配確切的版本號
* >version、>=version、<version、<=version
* ~version
  * ~1.2.3 := >=1.2.3 <1.3.0
  * ~1.2 := >=1.2.0 <1.3.0
  * ~1 := >=1.0.0 <2.0.0
  * ~0.2.3 := >=0.2.3 <0.3.0
  * ~0 := >=0.0.0 <1.0.0
  * ~1.2.3-beta.2 := >=1.2.3-beta.2 <1.3.0
* ^version
  * ^1.2.3 := >=1.2.3 <2.0.0
  * ^0.2.3 := >=0.2.3 <0.3.0
  * ^0.0.3 := >=0.0.3 <0.0.4
  * ^1.2.3-beta.2 := >=1.2.3-beta.2 <2.0.0
  * ^0.0.3-beta := >=0.0.3-beta <0.0.4
  * ^1.2.x := >=1.2.0 <2.0.0
  * ^0.0.x := >=0.0.0 <0.1.0
  * ^0.0 := >=0.0.0 <0.1.0
  * ^1.x := >=1.0.0 <2.0.0
* *
* latest

### scripts

指定 npm 生命週期是執行

```
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}
```

* prepublish
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

### config

**設定**

```
{
  "name":"foo",
  "config":{
    "port":"8080"
  }
}
```

**在程式中取得**

```
process.env.npm_package_config_port
```

```
npm config set foo:port 80
```
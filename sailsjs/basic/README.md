# Sails.js 基礎

**什麼是 Sails.js**

![](assets/squiddy.png)

Sails.js 主要是使用 Express 的核心，再整合其他常用的 Express middleware 並搭配常用的模組，約定大於配置的目標為發展導向。所以我們只要使用 Sails.js 框架，即可達到簡單並快速的建構一個具有 MVC 架構的網站，內含的模組跟功能。

* socket.io
* 多種選配的資料庫 adapter
* 透過 cli 即可建立 REST API
* 內建基本的 grunt task
* (略...)

**安裝**

首先需把 Sails 做全域安裝，

`npm -g install sails`

接著，就可以直接少用 cli 指令，快速建立一個 MVC 架構的新專案雛形。

`sails new testProject`

啟動整個專案

`cd testProject && npm start`


**延伸閱讀**

* [Sails.js Getting Started](http://sailsjs.com/get-started)
* [Sails.js vs Meteor - What are the advantages of both?](http://stackoverflow.com/questions/22202286/sails-js-vs-meteor-what-are-the-advantages-of-both)

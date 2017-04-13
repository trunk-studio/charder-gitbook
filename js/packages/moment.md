# Moment.js

日期處理套件

* <https://momentjs.com/>
* <http://momentjs.cn/docs/>

### 安裝

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js"/>
```

```
npm i --save moment
```

### old style

```js
//輸出 YYYY-MM-DD hh:mm:ss.mmm
function getDate() {
    var now = new Date();

    var yyyy = now.getFullYear();
    var mm = now.getMonth() + 1;
    var dd = now.getDate();

    var hh = now.getHours();
    var MM = now.getMinutes();
    var ss = now.getSeconds();
    var mmm = now.getMilliseconds();

    mm = (mm < 10) ? '0' + mm : mm;
    dd = (dd < 10) ? '0' + dd : dd;
    hh = (hh < 10) ? '0' + hh : hh;
    MM = (MM < 10) ? '0' + MM : MM;
    ss = (ss < 10) ? '0' + ss : ss;

    var today = hh.toString() + ':' + MM.toString() + ':' + ss.toString() + '.' + mmm.toString();

    return today;
}
```

### 常用指令

```js
moment().format('YYYY-MM-DD hh:mm:ss');
moment().add(7, 'days');
moment().subtract(7, 'days');
// n years ago
moment([2007, 0, 29]).fromNow();
moment.utc();

// 設定
moment().set({'year': 2013, 'month': 3});
moment().seconds(30);

// 取得
moment().seconds(); 

// 第幾季
moment().quarter(); 

moment().startOf('month');
moment().endOf("month");

moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); 
```
<!-- 用 codepen demo 一次，然後讓大家花一點時間試試看。 -->

### 延伸閱讀

* [Moment.js | Docs](https://momentjs.com/docs/)
* [Moment.js中文文档系列之一安装使用与日期时间解析 - IT笔录](https://itbilu.com/nodejs/npm/VkCir3rge.html)
* [Moment.js中文文档系列之二日期时间的设置与取值（Get + Set） - IT笔录](https://itbilu.com/nodejs/npm/Vk3t77Dlx.html)
* [Moment.js中文文档系列之三日期时间的加减等操作（Manipulate） - IT笔录](https://itbilu.com/nodejs/npm/EJlmbFhgg.html)
* [Moment.js中文文档系列之四日期时间的格式化显示（Display） - IT笔录](https://itbilu.com/nodejs/npm/4kz3tOClx.html)
* [Moment.js中文文档系列之五日期时间的查询（Query） - IT笔录](https://itbilu.com/nodejs/npm/Ny2sYBN-e.html)
* [Moment.js中文文档系列之六日期时间的国际化（i18n） - IT笔录](https://itbilu.com/nodejs/npm/4k1vtctZl.html)
* [Moment.js中文文档系列之七日期时间的自定义（Customize） - IT笔录](https://itbilu.com/nodejs/npm/4Jxk-Ti-l.html)
* [Moment.js中文文档系列之八时间段（Durations） - IT笔录](https://itbilu.com/nodejs/npm/4JkB42p-x.html)
* [Moment.js中文文档系列之九工具类（Utilities） - IT笔录](https://itbilu.com/nodejs/npm/NJRXTDRWe.html)
* [Moment.js中文文档系列之十插件（Plugins） - IT笔录](https://itbilu.com/nodejs/npm/V1k1JpA-l.html)

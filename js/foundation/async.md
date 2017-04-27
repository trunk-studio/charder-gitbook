# 非同步 (async)

* JavaScript 語言的一大特點就是單執行緒，同一個時間只能做一件事。
* 所有事件可以分為 synchronous 和 asynchronous。
* 同步事件指的是，在主線程上排隊執行的任務，只有前一個任務執行完畢，才能執行後一個任務。
* 非同步事件指的是，先進入 task queue，task queue 通知主線程，若主線程有空該任務才會進入主線程執行。

<!--
1-1 start coding (async)
2 answer customer phone (sync)
3-1 buy drink - call phone (async)
1-2 continue coding (async)
3-2 drink is comming (async)
1-3 finish coding (async)
-->

```js
function now() {
  return 'Hello......';
}

function later() {
  message += 'World';
  console.log(message);
}

var message = now();
setTimeout(later, 5000);
```

```js
var fs = [];

for (var i = 0; i < 10; i++){
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})
```

### 事件迴圈 (event loop)

* [Philip Roberts: Help, I’m stuck in an event-loop. on Vimeo](https://vimeo.com/96425312)

<!-- 從 6:40 開始看 -->


### 延伸閱讀

* [並發模型和事件循環 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/EventLoop)
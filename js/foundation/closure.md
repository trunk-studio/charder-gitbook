# 閉包 (closure)

* closure 最常見的方式，就是直接回傳 function。
* 在傳回一整個函數時，可以順便把外層的變數給包進來。

**範例一**

```js
var myObject = function(){
  var value = 0;

  return {
    increment: function(inc){
      value += inc;
    },
    getValue: function(){
      return value;
    }
  }
}

var counter = myObject();
counter.increment(1);
counter.increment(1);
counter.getValue();
```

<!-- Closure 不當的使用時，有可能會造成記憶體洩漏，主要是因為被參考的變數無法被垃圾收集機制處理，造成佔用的資源無法釋放，所以使用上必須考慮清楚 -->

**範例二**

```js
// 錯誤示範
function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // create phase
    arr.push(
      function() {
        console.log(i);
      }
    )
  }
  return arr;
}

var fs = buildFunctions();

// involve phase
fs[0]();
fs[1]();
fs[2]();
```
<!-- 3, 3, 3 -->

```js
function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // llfe & closure
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
```
<!-- 0, 1, 2 -->

**範例三**

```js
function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
```
<!-- Hello John Doe -->
<!-- Hola John Doe -->

**範例四**

```js
function greet() {
  var greeting = 'Hi';
  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

greet();
```

**範例五**

```js
var person = (function() {
  // var self = this;
  var nickname = 'alincode';
  
  function a() {
    console.log('hi', nickname);
  }

  function b() {
    console.log('eat', nickname);
  }

  function c() {
    console.log('OMG', nickname);
  }

  return {
    a: a,
    b: b,
    reset: function() {
      nickname = 'alin';
      // dont do that...
      // self.nickname = 'alin';
      // dont do that...
      // this.nickname = 'alin';
    }
  };
})();

person.a();
person.b();
person.reset();
person.a();
```

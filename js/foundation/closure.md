# 閉包 (closure)

* closure 最常見的方式，就是直接回傳 function。
* 在傳回一整個函數時，可以順便把外層的變數給包進來。

```js
function sub(a,b) {         
  return a-b;
}
 
function sub5(a) {
  return sub(a, 5);
}
 
function fsub5(a) {
  return function() {
    return sub(a, 5);
  };
}
 
console.log("sub(8,5)="+sub(8, 5));
console.log("sub5(8)="+sub5(8));
console.log("fsub5(8)="+fsub5(8));
console.log("fsub5(sub,8)()="+fsub5(8)());
```

<!--Closure 不當的使用時，有可能會造成記憶體洩漏，主要是因為被參考的變數無法被垃圾收集機制處理，造成佔用的資源無法釋放，所以使用上必須考慮清楚-->
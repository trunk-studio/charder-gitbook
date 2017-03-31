# 閉包 (closure)

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

在傳回一整個函數時、順便把外層的變數給包進來而已。
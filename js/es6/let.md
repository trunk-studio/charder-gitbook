# var / let / const

**var**

宣告一個可隨意更改其內容的變數

**let**

宣告一個可隨意更改其內容的區塊(block)區域變數

```js
if(true){
  let a = 1;
  console.log(a);
}
console.log(a);
```

**const**

宣告一個只可讀取的不可變常數

```js
const a = 1;
a = 2; // error
```

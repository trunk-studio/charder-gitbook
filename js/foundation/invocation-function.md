# 呼叫模式 (invocation pattern)

每個函式都有兩個參數
- this
- argument

### 方法呼叫模式 (method invocation pattern)

```js
varr myObject() = {
  value: 0,
  increment: function (inc){
    this.value += inc;
  }
}

myObject.increment(1);
console.log(myObject.value);
```

### 函式呼叫模式 (function invocation pattern)

```js
var value = 0;

function increment(inc){
  value += inc;
}

increment(1)
console.log(value)


```

### 建構式呼叫模式 (constructor invocation pattern)

### apply 呼叫模式 (apply invocation pattern)
# 模板字串

### 多行字串

**ES6**

```js
console.log(`Hi,
My name is alincode.
How are you?`);
```

**ES5**

```js
console.log('Hi,' +
'My name is alincode.' +
'How are you?');
```

### 內插運算式

**ES6**

```js
let name = 'alincode';
console.log(`Hi, ${name}`);
```

```js
let a = 1;
let b = 1;
console.log(`1 + 1 = ${ a + b}`);
```

**ES5**

```js
let name = 'alincode';
console.log('Hi, ' + name);
```

```js
let a = 1;
let b = 1;
console.log('1 + 1 = ' + (a + b));
```

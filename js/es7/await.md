# ES7 Await

```js
function asyncDoSomething(){
  return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('hi');
    }, 5000);
  });
}

async function func(){
  let message = await asyncDoSomething();
  console.log(message);
}

func();
```
# Fetch
- 跟 Server 獲取、提交資料的方法
- 提供了和 web 標準一至的 Fetch API
- 有用過 ajax 使用起來就會很上手

## 使用教學
```
const IP ='192.168.2.101';
let response = await fetch(`http://${IP}:1337/users/1`);
let responseJson = await response.json();
console.log(responseJson);
this.setState({
  name: responseJson.name
})
return responseJson;
```

## 延伸閱讀
[API](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%8F%A3)  
[REST](https://zh.wikipedia.org/wiki/REST)  
[RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)  
- GET（SELECT）：從 server 取出資源（一項或多項）。
- POST（CREATE）：在 server 新建一個資源。
- PUT（UPDATE）：在 server 更新資源（客戶端提供改變後的完整資源）。
- PATCH（UPDATE）：在 server 更新資源（客戶端提供改變的屬性）。
- DELETE（DELETE）：從 server 刪除資源。

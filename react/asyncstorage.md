# AsyncStorage
- 類似瀏覽器 localStorage
- 持久化的 Key-Value 
- App's global storage
- 未加密

## Sample 

```
try {
  await AsyncStorage.setItem('@token', '1234456');
} catch (error) {
  // Error saving data
}

try {
  const token = await AsyncStorage.getItem('@token');
  if (value !== null){
    // We have token!!
    console.log(token);
  }
} catch (error) {
  // Error retrieving data
}
```

```
const token = await AsyncStorage.getItem('token');
fetch('https://mywebsite.com/endpoint/', {
  method: 'get',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});
```
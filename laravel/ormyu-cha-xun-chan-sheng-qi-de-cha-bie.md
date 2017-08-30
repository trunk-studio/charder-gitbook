# 集合 Collection

### toArray\(\)：

**將集合轉換成純 PHP**`陣列`**。假如集合的數值是Eloquent模型，也會被轉換成陣列**

```
return dd(User::all()->toArray());
```

### toJson\(\)：

**將集合轉換成 JSON**

```
return dd(User::all()->toJson());
```

### plunk\(\)：

**取得所有集合中給定鍵的值**

```
return dd(User::all()->pluck('id'));
//or 
return dd(User::all()->pluck('email','id'));
```

### diff\(\)：

**拿該集合與其他集合或純 PHP**`陣列`**進行比較**

```
$collection = collect(["0":1, "1":2, "2":3, "3":4, "4":5]);

$diff = $collection->diff(["0":2, "1":4, "2":6, "3":8]);

return dd($diff->all());
```

### 




# 集合 Collection

### toArray\(\)：

**將集合轉換成純 PHP**`陣列`**。假如集合的數值是Eloquent模型，也會被轉換成陣列**

```
return dd(User::all()->toArray());
```

### plunk\(\)：

**取得所有集合中給定鍵的值**

```
return dd(User::all()->pluck('id'));
```

### diff\(\)：

**拿該集合與其他集合或純 PHP**`陣列`**進行比較**

```
$collection = collect([1, 2, 3, 4, 5]);

$diff = $collection->diff([2, 4, 6, 8]);

return dd($diff->all());
```

### 

### plunk\(\)：

**方法取得所有集合中給定鍵的值**

```
return dd(User::all()->pluck('id'));
```




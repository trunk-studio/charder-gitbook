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
$collection = collect([1, 2, 3, 4, 5]);

return dd($collection->diff([2, 4, 6, 8]));
```

### take\(\)：

**回傳有著指定數量項目的集合**

```
$collection = collect([0, 1, 2, 3, 4, 5]);

return dd($collection->take(2));
```

**也可以傳入負整數以取得從集合倒數來算指定數量的項目**

```
$collection = collect([0, 1, 2, 3, 4, 5]);
return dd($collection->take(-2));
```

### transform\(\)：

**拿該集合與其他集合或純 PHP`陣列`的項目將會被回呼函式回傳的數值取代掉**

```
$collection = collect([1, 2, 3, 4, 5]);

return dd(
    $collection->transform(function ($item, $key) {
        return $item * 2;
    })
);
```

### map\(\)：

**拿該集合與其他集合或純 PHP**`陣列`**的項目將會被回呼函式可以任意修改並回傳項目組成的新集合**

```
$collection = collect([1, 2, 3, 4, 5]);

return dd(
    $collection->map(function ($item, $key) {
        return $item * 2;
    })
);
```




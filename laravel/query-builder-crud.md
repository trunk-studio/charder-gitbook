# 查詢產生器：CRUD

### 建立資料 \(Create\)

```
//insert 方法接受一個陣列，包含要插入的欄位名稱及值
DB::table('users')->insert(
    ['email' => 'john@example.com', 'name' => 'john']
);

//若資料表有一自動遞增的 id，使用 insertGetId 方法來插入記錄並取得其 ID
$id = DB::table('users')->insertGetId(
    ['email' => 'john@example.com', 'name' => 'john']
);
```

### 取得資料 \(Read\)

```
DB::table('users')->value('email');
DB::table('users')->orderBy('id', 'desc');
```

### 更新 \(Update\)

```
DB::table('users')->where('id', 1)->update(['name' => 'John']);
```

### 刪除 \(Delete\)

```
DB::table('users')->where('id', '=', 1)->delete();
```




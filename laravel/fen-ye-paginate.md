# 分頁 Paginate

撈出資料後，以**兩筆為一分頁**

```
$users = User::all()->paginate(2);
```




# 分頁 Paginate

**撈出資料後，以兩筆為一分頁**

UserController.php 

```
$users = User::all()->paginate(2);
```




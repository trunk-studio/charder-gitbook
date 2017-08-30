# 分頁 Paginate

UserController.php

**撈出資料後，以兩筆為一分頁**

```
$users = User::all()->paginate(2);
```




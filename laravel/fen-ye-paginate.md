# 分頁 Paginate

UserController.php

**撈出資料後，以兩筆為一分頁**

```
return User::all()->paginate(2);
```

在URL中加入GET page參數切換分頁

```
http://XXXX.com?page=1
```




# 分頁 Paginate

UserController.php

**撈出資料後，以兩筆為一分頁**

```
$user = User::all()->paginate(2);
return $user;
```

**在URL中加入GET page參數切換分頁**

```
http://XXXX.com?page=1
```

**使用「上一頁」、「下一頁」控制分頁**

```
$html = "
<a href="/?page=".$user->perPage()."></a>

";
return $html;
```




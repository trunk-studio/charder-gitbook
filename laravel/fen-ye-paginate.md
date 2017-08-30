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
$user = User::paginate(1);
$html = '
<a href="'.$user->previousPageUrl().'">Prev</a>
<font color="red">'.$user->currentPage().'</font>
<a href="'.$user->nextPageUrl().'">Next</a>
';
return $html;
```




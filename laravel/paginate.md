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

**使用「**previousPageUrl\(\)**上一頁」、「**currentPage\(\)**當前頁碼」、「**nextPageUrl\(\)**下一頁」客製控制分頁**

```
$user = User::paginate(1);
$html = json_encode($user->items()[0]).'<br><br>
<a href="'.$user->previousPageUrl().'">Prev</a>
<font color="red">'.$user->currentPage().'</font>
<a href="'.$user->nextPageUrl().'">Next</a>
';
return $html;
```

**使用內建render\(\)視圖產生分頁控制**

```
return $user->render();
```




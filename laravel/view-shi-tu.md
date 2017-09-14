# View 視圖-Blade 模板

Laravel 的視圖是放在 `resource/views`目錄內

### 建立共用的視圖

1.在`resource/views`建立共用視圖取名為app.blade.php

```
<!-- resource/view/app.blade.php -->
<!doctype html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <title>我的網站</title>
</head>

<body>
    <div class="container">
        @yield('content')
    </div>

    @yield('other_info')
</body>

</html>
```

2.在`resource/views`建立article.blade.php後，extends共用視圖app.blade.php

```
<!-- resource/view/article.blade.php -->
@extend('app')

@section('content')
    <h1>文章標題</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
@stop


@section('other_info')
    其他資訊
@stop
```

## include共用的視圖 {#引入共用的視圖}

1.在`resource/views`建立user.blade.php

```
<p>作者：{{ $full_name }}</p>
```

2.在`resource/views/article.blade.php`內，include共用視圖user.blade.php並給予回傳參數full\_name

```
<!-- resource/view/article.blade.php -->
@extend('app')

@section('content')
    <h1>文章標題</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
    @include('user', ['full_name' => 'hi blade'])
@stop


@section('other_info')
    其他資訊
@stop
```

### Blade取用方式

如果你想要取用`resource/views/article/app.blade.php` 有以下方式

```
<!-- 引用 -->
@extend('article.app')
@extend('article/app')

<!-- 載入 -->
@include('article.app')
@include('article/app')
```

### Controller回傳參數給View呈現在 Blade

```
Route::get('welcome', function () {
    return view('article', ['name' => 'Samantha']);
});
```

### 迴圈






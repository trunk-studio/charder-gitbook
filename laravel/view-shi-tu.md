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

1.在`routes/web.php`內新增

```
Route::get('htmlcode', function () {
    return view('article', ['html_code' => '<font color="red">html_code</font>']);
});
```

2.在`resource/views/article.blade.php`內新增

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

    <!-- 顯示純字串 -->
    {{ $html_code or ''}}

    <!-- 可顯示為html tag -->
    {!! $html_code or '' !!}
@stop


@section('other_info')
    其他資訊
@stop
```

### If如果、else否則、unless除非

```
<!-- resource/view/article.blade.php -->
@extend('app')

@section('content')

    @if ($user == "blade")
        I have blade!
    @elseif ($user == "laravel")
        I have laravel!
    @else
        I don't have any records!
    @endif

    @unless ($user)
        I don't have any records!
    @endunless

@stop


@section('other_info')
    其他資訊
@stop
```

### empty如果為空值、isset是否此參數存在

```
<!-- resource/view/article.blade.php -->
@extend('app')

@section('content')

    @isset($records)
        isset any records!
    @endisset

    @empty($records)
        empty any records!
    @endempty

@stop


@section('other_info')
    其他資訊
@stop
```

### 迴圈

1.在`routes/web.php`內新增

```
use App\User;
Route::get('htmlcode', function () {
    return view('article', ['users' => User::all()]);
});
```

2.在`resource/views/article.blade.php`內新增

```
<!-- resource/view/article.blade.php -->
@extend('app')

@section('content')

    @for ($i = 0; $i < 10; $i++)
        The current value is {{ $i }}
    @endfor

    @foreach ($users as $user)
        <p>This is user {{ $user->id }}</p>
    @endforeach

    @forelse ($users as $user)
        <li>{{ $user->name }}</li>
    @empty
        <p>No users</p>
    @endforelse

    @while (true)
        <p>I'm looping forever.</p>
    @endwhile

@stop


@section('other_info')
    其他資訊
@stop
```




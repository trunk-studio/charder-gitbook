# View 視圖 - Blade 模板

Laravel 的視圖是放在 `resource/views` 目錄內

**app/routes.php**

```php
Route::get('/about', function () {
    return view('about');
});
```

練習題：新增另一個 html 頁面

### 建立共用的視圖

1.在 `resource/views` 建立共用視圖取名為 `app.blade.php`

```php
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

2.在 `resource/views` 建立 `article.blade.php` 後，extends 共用視圖 `app.blade.php`

```php
<!-- resource/view/article.blade.php -->
@extends('app')

@section('content')
    <h1>文章標題</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
@endsection


@section('other_info')
    其他資訊
@endsection
```

## include共用的視圖 {#引入共用的視圖}

1. 在 `resource/views` 建立 user.blade.php

```
<p>作者：{{ $full_name }}</p>
```

2. 在 `resource/views/article.blade.php` 內，include 共用視圖 user.blade.php 並給予回傳參數 full\_name

```php
<!-- resource/view/article.blade.php -->
@extends('app')

@section('content')
    <h1>文章標題</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
    @include('user', ['full_name' => 'hi blade'])
@endsection


@section('other_info')
    其他資訊
@endsection
```

### 使用 boolean 條件來判斷顯示 include

```
@section('content')
    @includeWhen(true, 'user', ['full_name' => 'hi blade'])
@endsection
```

### Blade 取用方式

如果你想要取用 `resource/views/article/app.blade.php` 有以下方式

```
<!-- 引用 -->
@extends('article.app')
@extends('article/app')

<!-- 載入 -->
@include('article.app')
@include('article/app')
```

### Controller 回傳參數給 View 呈現在 Blade

1. 在`routes/web.php`內新增

```php
Route::get('htmlcode', function () {
    return view('article', ['html_code' => '<font color="red">html_code</font>']);
});
```

2. 在`resource/views/article.blade.php`內新增

```php
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
@endsection


@section('other_info')
    其他資訊
@endsection
```

3. 可改用 {!! $value !!} 顯示出 html tag

```php
@section('content')

    <!-- 可顯示為html tag -->
    {!! $html_code or '' !!}
@endsection
```

### If如果、else否則

在`resource/views/article.blade.php`內新增

```php
<!-- resource/view/article.blade.php -->
@extends('app')

@section('content')

    @if ($user == "blade")
        I have blade!
    @elseif ($user == "laravel")
        I have laravel!
    @else
        I don't have any records!
    @endif

@endsection


@section('other_info')
    其他資訊
@endsection
```

### unless除非

```
@section('content')

    @unless ($user)
        I don't have any records!
    @endunless

@endsection
```

### empty 如果為空值

在 `resource/views/article.blade.php` 內新增

```php
<!-- resource/view/article.blade.php -->
@extend('app')

@section('content')

    @isset($records)
        isset any records!
    @endisset

    @empty($records)
        empty any records!
    @endempty

@endsection


@section('other_info')
    其他資訊
@endsection
```

### isset 是否此參數存在

```
@section('content')

    @isset($records)
        isset any records!
    @endisset

@endsection
```

### For 迴圈

1. 在 `routes/web.php` 內新增

```php
use App\User;

Route::get('htmlcode', function () {
    return view('article', ['users' => User::all()]);
});
```

2. 在`resource/views/article.blade.php` 內新增

```php
<!-- resource/view/article.blade.php -->
@extends('app')

@section('content')

    @for ($i = 0; $i < 10; $i++)
        The current value is {{ $i }}
    @endfor

    @while (true)
        <p>I'm looping forever.</p>
    @endwhile

@endsection


@section('other_info')
    其他資訊
@endsection
```

### Foreach 迴圈

```php
@section('content')

    @foreach ($users as $user)
        <p>This is user {{ $user->id }}</p>
    @endforeach

@endsection
```

### Foreach 迴圈

```
@section('content')

    @foreach ($users as $user)
        <p>This is user {{ $user->id }}</p>
    @endforeach

@endsection
```

### forelse迴圈

1. 在 `routes/web.php` 內新增

```php
Route::get('htmlcode', function () {
    return view('article', ['users' => ["user1","","user3"]);
});
```

2. 在 `resource/views/article.blade.php` 內新增

```php
@section('content')

    @forelse ($users as $user)
        <li>{{ $user }}</li>
    @empty
        <p>No users</p>
    @endforelse

@endsection
```

### Foreach 迴圈

```php
@section('content')

    @forelse ($users as $user)
        <li>{{ $user->email }}</li>
    @empty
        <p>No users</p>
    @endforelse

@endsection
```

### 使用 foreach 的 Loop 循環變量

[https://laravel.com/docs/5.4/blade\#loops](https://laravel.com/docs/5.4/blade#loops)

```php
<!-- resource/view/article.blade.php -->
@extends('app')

@section('content')

    @foreach ($users as $key => $user)
        <p>This is user {{ $user->id }}</p>
        @if ($loop->first)
            This is the first user.{{$key}}
        @endif
        @if ($loop->last)
            This is the last user.{{$key}}
        @endif
    @endforeach

@endsection


@section('other_info')
    其他資訊
@endsection
```

### 使用原生 php 區塊

```php
<!-- resource/view/article.blade.php -->
@extends('app')

@section('content')

    @php
        $detail = 'detail';
    @endphp

    @if ($detail)
        {{$detail}}
    @else
        I don't have any detail!
    @endif

@endsection


@section('other_info')
    其他資訊
@endsection
```

### 註解方式

```
{{-- This comment will not be present in the rendered HTML --}}
```
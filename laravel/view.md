# View

* resources/views

**app/routes.php**

```php
Route::get('/about', function () {
    return view('about');
});
```

練習題：新增另一個 html 頁面
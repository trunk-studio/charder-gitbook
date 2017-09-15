# Middleware 中介層



```
Route::get('about', [
    'middleware'  => 'auth',
    'uses'=> 'HomeController@about'
]);
```












# Errors

Try&Catch

```
use Exception;
use Log;

try {
        Log::info('Showing Error Exception');
    } catch (Exception $e) {
        throw e;
    }
```

跳轉客製Errors回應

```
return parent::render($request,$e);
```

跳轉客製Http例外

```
return abort(403, 'Unauthorized action.');
```

跳轉客製Errors Html樣板

```
return response()->view('errors.503', [], 503);
```




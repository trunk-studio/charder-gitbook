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

客製Errors回應

```
return parent::render($request,$e);
```

客製Http例外

```
abort(403, 'Unauthorized action.');
```

客製

```
return response()->view('errors.503', [], 503);
```




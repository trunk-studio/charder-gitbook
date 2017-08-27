# Errors

Try&Catch

```
use Exception;
use Log;

try {
        Log::info('Showing Error Exception');
    } 
catch (Exception $e) {
        throw e;
    }
```

客製Errors回應

```
return parent::render($request,$e);
```




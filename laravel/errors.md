# Errors

```
use Exception;

try {
            $api_url = '/' . $meId . "/adaccounts?fields=name";
            return $this -> apiRequest($api_url);
    } catch (Exception $e) {
        throw e;
    } 
```








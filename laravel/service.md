# Service

**Service 範例**

```php
<?php
namespace App\Services;

use App\Article;
use Exception;
use Validator;

class ArticleService
{
    public function create($data)
    {
        try {
            return Article::create($data);
        } catch (Exception $e) {
            throw $e;
        }
    }
}
```

**Controller 範例**

```php
namespace App\Http\Controllers;

use App\Article;
use App\Services\ArticleService;

class ArticleController extends Controller
{
    protected $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    protected function store(Request $request)
    {
        $data = [
            'title' => $request->title,
            'content' => $request->content
        ];

        $this->articleService->create($data);
        $data["result"] = true;
        $data["message"] = "建立成功";
        return response()->json($data);
    }
}
```
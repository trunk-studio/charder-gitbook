# Laravel

是一種快速的應用程式開發架構

[API 文件](https://laravel.com/api/5.4/index.html)

**網站開發常見的元件**

* 身份驗證
* 輸入驗證
* 資料庫存取
* 模板 (templete)
* 發信
* 社群第三方服務串接(Facebook, Twitter...)
* queue
* 發送 email
* Cache

**thinking over**

在沒有框架的情況下，我們是怎麼做的？結果會是？ 
<!-- 1. 依照自己喜好，組織專案 -->
<!-- 2. 套自己的喜好選用套件 -->

為什麼要用框架？ 
<!-- 1. 承襲優良的組織架構 -->
<!-- 2. 依靠框架來選擇套件 -->

缺點是？
<!-- 1. 高度依賴框架，若框架走向死亡，專案也就... -->

### Laravel 的特色

* 約定大於配置 (convention over configuration)
* 簡化學習曲線


<!--* [Laravel 5 Fundamentals](https://laracasts.com/series/laravel-5-fundamentals/)-->



empty($request->username)

if(Auth::check()){

error_log("=== $id ===" . $id);

protected $roleService;

public function __construct(RoleService $roleService)
{
    $this-> roleService = $roleService;
}
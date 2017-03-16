# Session 認證

### 缺點

* 通常 Session 都是保存在伺服器記憶體中，隨著 Session 的增長，server 的 loading 會明顯增長。
* 在分善式的應用上，相應的限制了 loading balancer 的能力。
* 因為是基於 cookie 來進行用戶識別的, cookie 如果被攔截，使用者就會很容易受到 CSRF 攻擊。

## 練習題

```
資料表

users
    id - integer
    user_name - string
    full_name - string
    email - string
    password - string

profiles
    id - integer
    user_id - integer
    birthday - date
    code - string
    address - string

articles
    id - integer
    title - string
    description - longText
    user_id - integer

tags
    id - integer
    name - string

articles_tags
    article_id - integer
    user_id - integer
```

1. 新增一個 One to One
   * User
   * Profile
2. 新增一個 One to Many
   * User
   * Article
3. 新增一個 Many to Many
   * Article
   * Tag




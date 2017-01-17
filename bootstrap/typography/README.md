# Typography

### 標題 (Headings)

* h1 ~ h6

### Body copy

* lead

```html
<p>...</p>
<p class="lead">...</p>
```

### Inline text elements

* mark
* del
* s
* ins
* u
* small
* strong
* em

### 對齊類別 (Alignment classes)

```html
<p class="text-left">靠左</p>
<p class="text-center">置中</p>
<p class="text-right">靠右</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```

### 轉換類別 (Transformation classes)

```
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
```

顯示結果

```
lowercased text.
UPPERCASED TEXT.
Capitalized Text.
```

### 縮寫 (Abbreviations)

```
<abbr title="attribute">attr</abbr>
<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
```

### 地址 (Addresses)

```
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>
```

### Blockquotes

靠左

```
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```

靠右

```
<blockquote class="blockquote-reverse">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```

### List

**無序列表**

* ul > li
* ul.list-unstyled > li

```
<ul class="list-unstyled">
  <li>...</li>
</ul>
```

**有序列表**

* ol > li

**Inline**

```
<ul class="list-inline">
  <li>...</li>
</ul>
```

**Description**

![](./assets/dl.png)

```
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

![](./assets/dl-horizontal.png)

```
<dl class="dl-horizontal">
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

**延伸閱讀**

[Bootstrap - Typography](http://getbootstrap.com/css/#type)

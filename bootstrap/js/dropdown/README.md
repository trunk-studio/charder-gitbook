# 下拉式選單 Dropdown

### 觸發方式

**透過 data 屬性 trigger**

```html
<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown Example</a>
```

**透過 JS trigger**

```js
$('.dropdown-toggle').dropdown();
```

**Plugin Classes**

* dropdown (必要)
* dropdown-menu (必要，dropdown-menu-right 二選一)
* dropdown-menu-right
* dropdown-header
* dropup (往上)
* disabled
* divider (分隔線)

[demo](http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_dropdown&stacked=h)

**Methods**

* dropdown("toggle")

**Events**

* show.bs.dropdown
* shown.bs.dropdown
* hide.bs.dropdown
* hidden.bs.dropdown

### 範例

[w3cschool bootstrap - dropdown demo](http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_dropdown&stacked=h)

```
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>    
    </ul>
  </div>
```

### 延伸閱讀

* [w3cschool bootstrap - Multi-Level Dropdowns](http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_dropdown_multilevel&stacked=h)

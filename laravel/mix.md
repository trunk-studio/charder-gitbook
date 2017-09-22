# 靜態資源管理

<https://laravel.com/docs/5.4/mix>

**執行**

```
npm run dev
npm run production
npm run watch
```

```js
mix.copy('node_modules/foo/bar.css', 'public/css/bar.css');
```

* webpack.mix.js

```js
let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

```

**合併多個 css**

```js
mix.styles([
    'public/css/vendor/normalize.css',
    'public/css/vendor/videojs.css'
],  'public/css/all.css');
```

**版本控制 & cache**

```js
mix.js('resources/assets/js/app.js', 'public/js')
   .version();
```

```html
<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
```
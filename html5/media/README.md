# 多媒體 (Media)

**Video**

![html video](http://i.imgur.com/FsuEJ6t.png)

```html
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

**Audio**

![html audio](http://i.imgur.com/HtpegQ3.png)

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

**SVG**

![html svg](http://i.imgur.com/1ydlDvL.png)

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

**畫布 (Canvas)**

![html canvas](http://i.imgur.com/uihyz3H.png)

```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
```

@someone else please prettify this.. make it look professional (actual link to script is not uploaded yet...)

---

<div align="center">
  <img src="./static/logo.png">
</div>

<br />

<div align="center">numCaptchaJS is a <i>Javascript</i> Library that allows you to use <u>numCAPTCHA</u> easily on your website.</div>

<br />

<div align="center">
  <img src="./static/numCaptcha-1.png">
</div>

---

### Usage

In your index.html, numCaptcha dynamically renders in a `<div>` tag with the id of `captcha-wrapper`

```html
<body>
	<div id="captcha-wrapper"></div>
</body>
```

<br />

You also need to import the minified script using a script tag

```html
<script src="https://numcaptcha.s3.amazonaws.com/lib/numCaptchaJS/numCaptcha-js.min.js"></script>
```

> :warning: Remember to import numCaptchaJS <u>after</u> the \<body\> tag

<br />

After importing the script, you would have access to the `useNumCaptcha()` function in the global `windows` object. The function returns a promise which resolves with the value of `true` when user completes <u>numCAPTCHA</u>.

```js
window.useNumCaptcha().then((res) => {
	// do something
});
```

---

#### Others numCAPTCHA Libraries...

If you are using awesome _VueJS_, do check out [numCaptchaVUE](https://github.com/Kabbage-Babbage/libraryVUE) :tada:

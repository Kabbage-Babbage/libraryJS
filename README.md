<div align="center">
  <img src="https://numcaptcha.s3.amazonaws.com/static/logo.png">
</div>

<br />

<div align="center">numCaptchaJS is a <i>Javascript</i> Library that allows you to use <u>numCAPTCHA</u> easily on your website.</div>

<br />

<div align="center">
  <img src="https://numcaptcha.s3.amazonaws.com/static/numCaptcha-1.png">
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
<script src="https://numcaptcha.s3.amazonaws.com/lib/numCaptchaJS/numcaptcha-js.min.js"></script>
```

> :warning: Remember to import numCaptchaJS <u>after</u> the \<body\> tag

<br />

After importing the script, you would have access to the `useNumCaptcha()` function in the global `windows` object. The function returns a promise which resolves with the value of `true` when user successfully completes <u>numCAPTCHA</u>, else it would reject with the value of `false` when user is identified as a bot.

```js
window
	.useNumCaptcha()
	.then((res) => {
		// do something onSuccess
	})
	.catch((err) => {
		// do something onFailed
	});
```

---

#### Others numCAPTCHA Libraries...

If you are using awesome _VueJS_, do check out [numCaptchaVUE](https://github.com/Kabbage-Babbage/libraryVUE) :tada:

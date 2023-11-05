# Prove That Your Visitors Are Human

An embedabble Captcha that asks your site visitors to prove that they are human by supporting Israel.

## How To Embed

You can embed this Captcha anywhere on the web with just 3 lines of
code.

```html
<div id="captcha-container"></div>
<script
  type="module"
  src="https://support-israel-captcha.vercel.app/assets/embed.js"
></script>
<link
  rel="stylesheet"
  href="https://support-israel-captcha.vercel.app/assets/main.css"
/>
```

Simply add these 3 lines of code anywhere you would like to embed the Captcha.

## Customize The Id

By default the Captcha is mounted on the HTML element with the id of `captcha-container`.

If you want to mount the Captcha on a different element, you can customize the mount point by configuring your id like so:

```html
<div id="my-container"></div>
<script>
  window.captchaContainerId = "my-container";
</script>
<script
  type="module"
  src="https://support-israel-captcha.vercel.app/assets/embed.js"
></script>
<link
  rel="stylesheet"
  href="https://support-israel-captcha.vercel.app/assets/main.css"
/>
```

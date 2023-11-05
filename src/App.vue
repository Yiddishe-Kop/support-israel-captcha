<template>
  <AppHeader />
  <section class="py-12 bg-sky-100 md:py-32">
    <div class="max-w-screen-xl mx-auto text-center">
      <h1 class="text-3xl md:text-5xl/tight font-black">
        Prove That Your Visitors<br />
        Are Human
      </h1>
      <Captcha class="mt-12 md:mt-24" />
    </div>
  </section>
  <div class="max-w-2xl my-8 px-2 mx-auto">
    <article>
      <p>
        The above is a demo of an embedabble Captcha that asks your site
        visitors to prove that they are human by supporting Israel.
      </p>
      <h2 id="embed">How To Embed</h2>
      <p>
        You can embed this Captcha anywhere on the web with just 2 lines of
        code.
      </p>
      <p>
        <pre>{{
          embedCode
        }}</pre>
      </p>
      <p>
        Simply add these 2 lines of code anywhere you would like to embed the
        Captcha.
      </p>
      <h2 id="js-only">Embed with JS only</h2>
      <p>
        If you prefer to embed the Captcha with JavaScript only, you can do so
        like this:
      </p>
      <pre>{{ jsEmbedCode }}</pre>
      <h2 id="customize-id">Customize The Id</h2>
      <p>
        By default the Captcha is mounted on the HTML element with the id of <code>captcha-container</code>
      </p>
      <p>
        If you want to mount the Captcha on a different element, you can customize the mount point by configuring your id like so:
      </p>
      <p>
        <pre>{{
          customEmbedCode
        }}</pre>
      </p>
      <p>
        Share this page with your friends and colleagues to help spread the word.
      </p>
    </article>
  </div>
  <AppFooter/>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Captcha from "./components/Captcha.vue";

const domain = window.location.origin;
const embedCode = `\<div id="captcha-container">\<\/div>
<script type="module" src="${domain}/assets/embed.js?mount=1">\<\/script>`;

const jsEmbedCode = `const script = document.createElement('script')
script.src = 'https://support-israel-captcha.vercel.app/assets/embed.js'
script.type = 'module'
script.onload = () => {
  window.mountIsraelCaptcha('captcha-container')
}
document.head.appendChild(script)`;

const customEmbedCode = `\<div id="my-container">\<\/div>
<script>
  window.captchaContainerId = "my-container";
\<\/script>
<script type="module" src="${domain}/assets/embed.js?mount=1">\<\/script>`;
</script>

<style lang="scss">
article {
  p {
    margin-bottom: 1rem;
  }
  h2 {
    @apply text-xl font-bold mt-10 mb-3;
  }
}
code {
  @apply bg-slate-100 px-2 rounded-md py-0.5;
}
pre {
  @apply bg-slate-100 p-6 rounded-md text-sm/relaxed overflow-auto text-slate-950;
}
</style>

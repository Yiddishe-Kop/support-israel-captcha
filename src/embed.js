import { createApp } from "vue";
import Captcha from "./components/Captcha.vue";
import "./assets/main.css";

function getScriptUrl() {
  console.log("getScriptUrl", document.currentScript, import.meta.url);
  if (document.currentScript) {
    const scriptSrc = document.currentScript.src;
    const url = new URL(scriptSrc);
    console.log({ scriptSrc, url, origin: url.origin });
  } else {
    // If document.currentScript is not available (e.g., in some older browsers), you might need a fallback.
    return window.location.href;
  }
}
const DOMAIN = "https://support-israel-captcha.vercel.app";

function loadStyles() {
  const url = getScriptUrl();
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = `${DOMAIN}/assets/main.css`;
  document.head.appendChild(style);
}

function mountIsraelCaptcha() {
  loadStyles();
  const containerId = window.captchaContainerId || "captcha-container";
  console.log({ containerId });
  createApp(Captcha).mount(`#${containerId}`);
}

// Mount the captcha manually using the global function
window.mountIsraelCaptcha = mountIsraelCaptcha;

const urlParams = new URLSearchParams(getScriptUrl().search);
const shouldAutoMount = urlParams.get("mount");

if (shouldAutoMount) {
  document.addEventListener("DOMContentLoaded", function () {
    mountIsraelCaptcha();
  });
}

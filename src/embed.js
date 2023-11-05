import { createApp } from "vue";
import Captcha from "./components/Captcha.vue";
import "./assets/embed.scss";

function getScriptUrl() {
  return new URL(import.meta.url);
}

function loadStyles() {
  const url = getScriptUrl();
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = `${url.origin}/assets/main.css`;
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

const urlParams = getScriptUrl().searchParams;
const shouldAutoMount = urlParams.get("mount");
console.log({ url: getScriptUrl(), urlParams, shouldAutoMount });

if (shouldAutoMount) {
  document.addEventListener("DOMContentLoaded", function () {
    mountIsraelCaptcha();
  });
}

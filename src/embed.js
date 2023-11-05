import { createApp } from "vue";
import Captcha from "./components/Captcha.vue";
import "./assets/main.css";

function loadStyles() {
  const domain = window.location.origin;
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = `${domain}/assets/main.css`;
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

const urlParams = new URLSearchParams(window.location.search);
const shouldAutoMount = urlParams.get("mount");

if (shouldAutoMount) {
  document.addEventListener("DOMContentLoaded", function () {
    mountIsraelCaptcha();
  });
}

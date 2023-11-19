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
  style.href = `${url.origin}/assets/embed.css`;
  document.head.appendChild(style);
}

function mountIsraelCaptcha(props = {}) {
  loadStyles();
  const containerId = window.captchaContainerId || "captcha-container";
  createApp(Captcha, props).mount(`#${containerId}`);
  console.log("captcha mounted", props);
}

// Mount the captcha manually using the global function
window.mountIsraelCaptcha = mountIsraelCaptcha;

const urlParams = getScriptUrl().searchParams;
const shouldAutoMount = urlParams.get("mount");
const hideInfo = !!urlParams.get("hide_info");
console.log({ url: getScriptUrl(), urlParams, shouldAutoMount, hideInfo });

if (shouldAutoMount) {
  document.addEventListener("DOMContentLoaded", function () {
    mountIsraelCaptcha({
      hideInfo,
    });
  });
}

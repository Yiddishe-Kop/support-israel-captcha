import { createApp } from "vue";
import Captcha from "./components/Captcha.vue";
import "./assets/main.css";

document.addEventListener("DOMContentLoaded", function () {
  const containerId = window.captchaContainerId || "captcha-container";
  console.log({ containerId });
  createApp(Captcha).mount(`#${containerId}`);
});

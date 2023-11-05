<template>
  <div class="captcha-embed">
    <p class="font-bold font-sans">Verify that you're human:</p>
    <label
      ref="captchaContainer"
      for="captcha"
      class="px-4 py-3 font-sans mt-2 border-2 relative inline-flex select-none cursor-pointer transition-all hover:border-blue-600 bg-gray-50 hover:bg-gray-100 rounded items-center group"
    >
      <!-- hidden checkbox -->
      <input
        id="captcha"
        type="checkbox"
        class="opacity-0 appearance-none absolute top-0 start-0 w-px h-px"
        v-model="checked"
      />
      <!-- visible checkbox -->
      <svg
        :class="{
          'text-slate-200 group-hover:text-slate-300': !checked,
          'text-green-600': checked,
        }"
        class="transition-all group-hover:scale-110 w-8"
        viewBox="0 0 24 24"
      >
        <transition name="fade">
          <path
            v-if="!checked"
            fill="currentColor"
            d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0 0q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q3.35 0 5.675 2.325T20 12q0 3.35-2.325 5.675T12 20Z"
          />
          <path
            v-else
            fill="currentColor"
            d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
          />
        </transition>
      </svg>
      <p class="ms-4">I support Israel</p>
      <IsraelLogo class="w-10 ms-3 -my-1.5" theme="dark" full />
    </label>
    <p class="font-sans text-gray-700 mt-2 text-xs">
      Please click the checkbox above to prove that you're not a robot.
    </p>
    <p class="font-sans text-gray-700 mt-2 text-sm">
      <a
        href="https://oct7map.com/"
        target="_blank"
        class="underline text-gray-600 underline-offset-4 hover:underline-offset-[3px] transition-all hover:text-blue-900"
      >
        <svg class="w-4 inline me-1" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="m12 2l.642.005l.616.017l.299.013l.579.034l.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29l.046.553l.041.727l.006.15l.017.617L22 12l-.005.642l-.017.616l-.013.299l-.034.579l-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03l-.553.046l-.727.041l-.15.006l-.617.017L12 22l-.642-.005l-.616-.017l-.299-.013l-.579-.034l-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29l-.046-.553l-.041-.727l-.006-.15l-.017-.617l-.004-.318v-.648l.004-.318l.017-.616l.013-.299l.034-.579l.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03l.553-.046l.727-.041l.15-.006l.617-.017c.21-.003.424-.005.642-.005zm0 9h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876L12 11zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986L12.01 8z"
            />
          </g>
        </svg>
        <span>Having trouble?</span>
      </a>
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { confettiBurst } from "../composables/confetti";
import IsraelLogo from "./IsraelLogo.vue";

const captchaContainer = ref(null);
const checked = ref(false);

watch(checked, (isChecked) => {
  if (isChecked) {
    confettiBurst(captchaContainer.value);
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0 !important;
}
</style>

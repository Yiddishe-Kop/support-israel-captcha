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
        class="underline text-gray-600 underline-offset-4 hover:underline-offset-2 transition-all hover:text-blue-900"
        >Having trouble?</a
      >
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

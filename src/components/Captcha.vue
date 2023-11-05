<template>
  <div class="">
    <p class="font-bold">Verify that you're human:</p>
    <label
      ref="captchaContainer"
      for="captcha"
      class="px-4 pe-6 py-3 mt-2 border-2 relative inline-flex select-none cursor-pointer transition-all hover:border-blue-600 bg-gray-50 hover:bg-gray-100 rounded items-center"
    >
      <!-- hidden checkbox -->
      <input
        id="captcha"
        type="checkbox"
        class="opacity-0 appearance-none absolute top-0 start-0 w-px h-px"
        v-model="checked"
      />
      <!-- visible checkbox -->
      <div
        :class="{
          'ring-2': !checked,
        }"
        class="relative bg-white rounded w-5 h-5 flex items-center justify-center"
      >
        <transition name="fade">
          <svg
            v-if="checked"
            class="w-10 absolute text-green-600 -bottom-1 -start-1"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
            />
          </svg>
        </transition>
      </div>
      <p class="ms-4">I support Israel</p>
      <svg alt="Israeli Flag" class="w-7 ms-3" viewBox="0 0 36 36">
        <path
          fill="#EDECEC"
          d="M20.666 19l-.467.809h.934zM18 21.618l.467-.809h-.934z"
        />
        <path
          fill="#FFF"
          d="M0 25h36V11H0v14zM.294 7.5h35.413A4 4 0 0 0 32 5H4A3.999 3.999 0 0 0 .294 7.5z"
        />
        <path
          fill="#FFF"
          d="M21.133 16.191h-.934l.467.809zm-5.332 0h-.934l.467.809zm3.243 3.618L20.089 18l-1.045-1.809h-2.088L15.911 18l1.045 1.809zM15.334 19l-.467.809h.934zM18 14.382l-.467.809h.934z"
        />
        <path
          fill="#0038B8"
          d="M.294 7.5A3.982 3.982 0 0 0 0 9v2h36V9c0-.531-.106-1.036-.294-1.5H.294z"
        />
        <path
          fill="#FFF"
          d="M.294 28.5h35.413A4 4 0 0 1 32 31H4a3.999 3.999 0 0 1-3.706-2.5z"
        />
        <path
          fill="#0038B8"
          d="M.294 28.5A3.982 3.982 0 0 1 0 27v-2h36v2c0 .531-.106 1.036-.294 1.5H.294zm16.084-7.691L18 23.618l1.622-2.809h3.243L21.244 18l1.622-2.809h-3.243L18 12.382l-1.622 2.809h-3.243L14.756 18l-1.622 2.809h3.244zm1.622.809l-.467-.809h.934l-.467.809zm3.133-5.427l-.467.809l-.467-.808h.934zM20.666 19l.467.808h-.934l.467-.808zM18 14.382l.467.809h-.934l.467-.809zm-1.044 1.809h2.089L20.089 18l-1.044 1.809h-2.089L15.911 18l1.045-1.809zm-1.155 0l-.467.809l-.467-.808h.934zM15.334 19l.467.808h-.934l.467-.808z"
        />
      </svg>
    </label>
    <p class="text-gray-700 mt-2 text-sm">
      Please click the checkbox above to prove that you're not a robot.
    </p>
    <p class="text-gray-700 mt-2 text-sm">
      <a
        href="https://oct7map.com/"
        target="_blank"
        class="underline text-gray-600 hover:text-blue-900"
        >Having trouble?</a
      >
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { confettiBurst } from "../composables/confetti";

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

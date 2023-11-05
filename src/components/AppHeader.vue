<template>
  <header
    id="top"
    class="sticky text-gray-950 border-b border-white/40 py-2 top-0 bg-white/50 backdrop-blur-xl z-40"
  >
    <div
      class="ps-2 md:ps-6 flex max-w-screen-xl mx-auto shrink-0 items-center"
    >
      <Logo class="w-14 sm:w-16 shrink-0" theme="dark" full />
      <div class="mx-4">
        <h2 class="text-brand text-blue-800 text-sm/none font-bold uppercase">
          Support Israel
        </h2>
        <h1
          class="text-blue-950 uppercase font-black whitespace-nowrap text-xl/none sm:text-2xl/none"
        >
          in its war against terror
        </h1>
        <p
          class="font-bold uppercase text-blue-800 text-brand text-[0.67rem]/none"
        >
          Share the truth <span class="font-thin">&</span> show the world!
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";
</script>

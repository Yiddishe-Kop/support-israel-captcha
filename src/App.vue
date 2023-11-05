<template>
  <div class="">
    <input type="checkbox" v-model="checkbox" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const checkbox = ref(false);
</script>

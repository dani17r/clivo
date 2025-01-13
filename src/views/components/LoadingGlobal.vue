<template>
  <div v-if="showLoader">
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const showLoader = ref(true);

onMounted(async () => {
  await nextTick();
  showLoader.value = false;
});
</script>
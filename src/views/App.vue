<template>
  <LoadingGlobal>
    <router-view />
  </LoadingGlobal>
</template>

<script setup lang="ts">
import LoadingGlobal from '@components/LoadingGlobal.vue';
import 'aos/dist/aos.css';
</script>
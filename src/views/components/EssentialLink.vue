<template>
  <q-item clickable :to="link" exact>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';

export interface EssentialLinkProps {
  title: ComputedRef<string>;
  caption?: ComputedRef<string>;
  link?: {
    name: string;
  };
  icon?: string;
};

withDefaults(defineProps<EssentialLinkProps>(), {
  link: () => ({ name: '' }),
  caption: () => computed(() => ''),
  icon: '',
});
</script>

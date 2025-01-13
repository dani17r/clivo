<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-modedark text-modedark">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ $t('header.bienvenido') }} CLIVO - Adonys martinez
        </q-toolbar-title>

        <q-select v-model="locale" :options="localeOptions" dense borderless emit-value map-options options-dense
          style="min-width: 110px; padding-right: 30px;" />

        <div>V {{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          {{ $t('menu.title') }}
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title.value" v-bind="link" />
      </q-list>
      <q-toggle @update:model-value="toggle()" v-model="val" :icon="isDark ? 'dark_mode' : 'light_mode'"
        class="toggle_mode_dark" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import modeDark from '@composables/dark';
import EssentialLink, { type EssentialLinkProps } from '@components/EssentialLink.vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { isDark, val, toggle, init } = modeDark();

const { locale, t } = useI18n({ useScope: 'global' });
const localeOptions = ref([
  { value: 'es-LAT', label: 'Español' },
  { value: 'en-US', label: 'Ingles' },
]);

const linksList: EssentialLinkProps[] = [
  {
    title: computed(() => t("menu.panel.title")),
    caption: computed(() => t("menu.panel.description")),
    icon: 'apps',
    link: { name: 'panel' }
  },
  {
    title: computed(() => t("menu.perfil.title")),
    caption: computed(() => t("menu.perfil.description")),
    icon: 'account_circle',
    link: { name: 'profile' }
  },
  {
    title: computed(() => t("menu.pagos.title")),
    caption: computed(() => t("menu.pagos.description")),
    icon: 'credit_card',
    link: { name: 'pay' }
  },
  {
    title: computed(() => t("menu.soporte.title")),
    caption: computed(() => t("menu.soporte.description")),
    icon: 'help',
    link: { name: 'support' }
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

onBeforeRouteUpdate(() => {
  document.body.style.overflow = 'hidden';
});

onMounted(() => {
  init();
  document.body.style.overflow = '';
});
</script>


<style>
.toggle_mode_dark {
  position: absolute;
  bottom: 5px;
  left: 5px;
}
</style>
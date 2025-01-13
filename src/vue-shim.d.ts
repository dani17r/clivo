// src/types/vue-shim.d.ts
// import type { ComputedRef } from 'vue';
import type { Pinia } from 'pinia'; // Importa Pinia si lo necesitas
import type { Quasar } from 'quasar';
import type { I18nT } from 'vue-i18n';
import type { Router } from 'vue-router';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // $isDark: ComputedRef<boolean>;
    // $stylesDark: {
    //   bg: ComputedRef<string>
    // };
    $router: Router;
    $pinia: Pinia;
    $q: Quasar;
    $t: I18nT;
  }
}
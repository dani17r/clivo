<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-gradient-personal t-sticky t-top-0 t-z-50 t-transition-all t-duration-300 !-t-mb-10"
      :class="{ 't-shadow-md': isScrolled }">
      <q-toolbar class="t-container t-mx-auto t-px-4 t-py-7 t-transition-all" :class="{ '!t-py-1.5': isScrolled }">

        <router-link class="t-mr-4" :to="{ name: 'init' }">
          <img src="src/assets/logo-dark.png" alt="Logo" class="t-h-8 md:t-h-10" v-if="isDark">
          <img src="src/assets/logo-light.png" alt="Logo" class="t-h-8 md:t-h-10" v-else>
        </router-link>
        <q-select v-model="locale" :options="localeOptions" dense borderless emit-value map-options options-dense
          style="min-width: 50px; padding-right: 30px" color="secondary" />

        <q-space />

        <!-- Desktop Navigation -->
        <div class="t-hidden lg:t-flex t-gap-6 t-items-center t-mr-6" v-if="route.path == '/'">
          <q-btn v-for="(nav, index) in navigation" :key="index" flat :label="nav.label"
            class="hover:t-text-secondary t-font-medium t-text-sm lg:t-text-base t-text-gray-dark t-rounded-full t-transition-all t-duration-300"
            @click="scrollToSection(nav.scroll)"
            :class="[activeSection === nav.scroll ? 't-bg-secondary t-bg-opacity-10 t-text-secondary' : '']" />
        </div>

        <!-- Mobile Menu Button -->
        <div class="xl:t-hidden t-ml-2">
          <q-toggle @update:model-value="toggle()" v-model="val" :icon="isDark ? 'dark_mode' : 'light_mode'"
            color="secondary" :keep-color="true" />
        </div>

        <q-btn flat round icon="menu" class="xl:t-hidden t-ml-2 text-modedark" @click="showMenu = !showMenu" />

        <!-- Desktop Buttons -->
        <div class="t-hidden xl:t-flex t-gap-4 t-items-center">
          <template v-if="!store.auth.$state.current?.id">
            <q-btn :to="{ name: 'login' }" flat :label="$t('pages.login.link')"
              class="hover:t-text-third t-text-sm lg:t-text-base t-text-gray-neutral t-rounded-full" />

            <q-btn :to="{ name: 'register' }" unelevated color="primary" :label="$t('pages.register.link')"
              class="t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark" />
          </template>
          <template v-else>
            <q-btn :to="{ name: 'panel' }" unelevated color="primary" :label="$t('pages.panel.link')"
              class="t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark" />
          </template>

          <q-toggle @update:model-value="toggle()" v-model="val" :icon="isDark ? 'dark_mode' : 'light_mode'"
            color="secondary" :keep-color="true" />
        </div>
      </q-toolbar>

      <!-- Mobile Menu -->
      <q-slide-transition>
        <div v-show="showMenu"
          class="t-absolute t-inset-x-0 md:t-inset-x-20 t-top-full bg-gradient-personal t-shadow-lg lg:t-hidden flex t-justify-center t-content-center">
          <div class="t-container t-px-4 t-py-6">
            <div class="t-flex t-flex-col t-gap-4 ">
              <q-btn v-for="(nav, index) in navigation" :key="index" flat :label="nav.label"
                class="t-justify-start hover:t-text-secondary lg:t-hidden t-rounded-full t-text-gray-dark"
                @click="scrollToSection(nav.scroll)"
                :class="[activeSection === nav.scroll ? 't-bg-secondary t-bg-opacity-10 t-text-secondary' : '']" />
              <q-separator class="t-my-2 md:t-hidden" />
              <template v-if="!store.auth.$state.current?.id">
                <q-btn :to="{ name: 'login' }" flat :label="$t('pages.login.link')"
                  class="hover:t-text-third t-text-sm lg:t-text-base t-text-gray-neutral t-rounded-full" />

                <q-btn :to="{ name: 'register' }" unelevated color="primary" :label="$t('pages.register.link')"
                  class="t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark" />
              </template>
              <template v-else>
                <q-btn :to="{ name: 'panel' }" unelevated color="primary" :label="$t('pages.panel.link')"
                  class="t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark" />
              </template>
            </div>
          </div>
        </div>
      </q-slide-transition>
    </q-header>

    <q-page-container class="!t-pt-0">
      <router-view />
    </q-page-container>

    <footer class="t-bg-secondary t-text-dark-page t-py-12 md:t-py-20">
      <div class="t-container t-mx-auto t-px-4 t-grid t-grid-cols-1 sm:t-grid-cols-2 lg:t-grid-cols-5 t-gap-8">
        <div class="sm:t-col-span-2 lg:t-col-span-2">
          <img src="src/assets/logo-light.png" alt="Logo" class="t-h-6 md:t-h-8 t-mb-4 md:t-mb-6">

          <p class="t-text-dark-page t-text-sm md:t-text-base">
            La plataforma de marketing conversacional líder para WhatsApp, Instagram y Facebook.
          </p>
        </div>

        <div v-for="(col, index) in footerColumns" :key="index" class="sm:t-col-span-1">
          <h4 class="t-text-base md:t-text-lg t-font-bold t-mb-4 md:t-mb-6">{{ col.title }}</h4>
          <ul class="t-space-y-2 md:t-space-y-3">
            <li v-for="(link, i) in col.links" :key="i"
              class="t-text-dark-page hover:t-text-gray-light t-transition-colors">
              <a href="#" class="t-text-sm md:t-text-base">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useSectionScroll } from '@composables/useSectionObserver'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import superComposable from '@composables/super';
import modeDark from '@composables/dark';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap'
import AOS from 'aos'


const { isDark, val, toggle, init } = modeDark()
const { store, route } = superComposable();

const isScrolled = ref(false)
const showMenu = ref(false)

const navigation = [
  { label: 'Inicio', scroll: 'inicio' },
  { label: 'Clientes', scroll: 'nuestros-clientes' },
  { label: 'Sobre Nosotros', scroll: 'servicios' },
  { label: 'Contactanos', scroll: 'contactanos' }
]

const { locale } = useI18n({ useScope: 'global' })
const localeOptions = ref([
  { value: 'es-LAT', label: 'ES' },
  { value: 'en-US', label: 'IN' },
])

const footerColumns = [
  {
    title: 'Producto',
    links: ['Características', 'Aplicación móvil', 'Integraciones', 'Seguridad']
  },
  {
    title: 'Recursos',
    links: ['Casos de éxito', 'Centro de ayuda', 'Developers']
  },
  {
    title: 'Empresa',
    links: ['Sobre nosotros', 'Contactanos']
  }
]

const { activeSection, scrollToSection } = useSectionScroll({
  sectionIds: navigation.map(s => s.scroll),
  offset: 40,
  init: String(navigation[0]?.scroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  init()
  document.body.style.overflow = ''

  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-quad'
  })

  gsap.from('.q-header', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power4.out'
  })
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

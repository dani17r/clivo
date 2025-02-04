<template>
  <swiper v-bind="swiperOptions" class="t-select-none t-py-4 t-w-full">
    <swiper-slide v-for="img in imgs" :key="img.id" class="t-flex t-justify-center t-self-center">
      <img :src="img.url" :alt="img.titulo"
        class="t-w-[220px] t-h-auto t-object-contain t-mx-4 t-opacity-70 hover:t-opacity-100 t-transition-opacity">
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import { ref } from 'vue';

const swiperOptions = {
  modules: [Autoplay, EffectCoverflow],
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0.5,
        slideShadows: false
      }
    },
    640: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 0.5,
        slideShadows: false
      }
    },
    1024: {
      slidesPerView: 4,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 0.5,
        slideShadows: false
      }
    },
    1280: {
      slidesPerView: 4,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 450,
        modifier: 0.5,
        slideShadows: false
      }
    }
  },
  effect: 'coverflow' as const,
  grabCursor: true,
} satisfies SwiperOptions;


const imgs = ref([
  {
    id: 1,
    titulo: 'N8N',
    url: 'src/assets/img/herramientas/n8n-logo.png'
  },
  {
    id: 2,
    titulo: 'supabase',
    url: 'src/assets/img/herramientas/supabase-logo.png'
  },
  {
    id: 3,
    titulo: 'notion',
    url: 'src/assets/img/herramientas/notion-logo.png'
  },
  {
    id: 4,
    titulo: 'DeepSeek',
    url: 'src/assets/img/herramientas/deepseek-logo.png'
  },
  {
    id: 5,
    titulo: 'Python',
    url: 'src/assets/img/herramientas/python-logo.png'
  },
  {
    id: 6,
    titulo: 'openai',
    url: 'src/assets/img/herramientas/openai-logo.png'
  },
  {
    id: 7,
    titulo: 'lanchaing',
    url: 'src/assets/img/herramientas/lanchaing-logo.png'
  },
  {
    id: 9,
    titulo: 'gemini',
    url: 'src/assets/img/herramientas/gemini-logo.png'
  },
]);
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/effect-creative';

.swiper-wrapper {
  @apply t-transition-transform t-duration-1000 t-ease-out;
}

.swiper-slide-active {
  @apply t-opacity-100 t-scale-110;
}

.swiper-slide-next,
.swiper-slide-prev {
  @apply t-opacity-80 t-scale-95;
}
</style>
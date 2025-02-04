<template>
  <!-- <q-page class="row items-center justify-evenly">
      <h3 class="t-text-3xl">{{ $t("pages.init.title") }}</h3>
    </q-page> -->
  <q-page>
    <section class="t-container t-mx-auto t-px-4 t-py-12 md:t-py-24" id="inicio">
      <div class="t-flex t-flex-col lg:t-flex-row t-items-center t-gap-8">
        <div class="lg:t-w-1/2 t-text-center lg:t-text-left">
          <h1 class="t-text-3xl sm:t-text-4xl md:t-text-5xl lg:t-text-6xl t-font-bold t-mb-4 md:t-mb-6 t-leading-tight"
            data-aos="fade-up">
            Clivo tu asistencia personalizada
            <span class="t-text-secondary t-block">para hacer crecer tu negocio</span>
          </h1>
          <p class="t-text-base md:t-text-lg t-text-gray-600 t-mb-6 md:t-mb-8 t-max-w-2xl t-mx-auto lg:t-mx-0 font-michroma"
            data-aos="fade-up" data-aos-delay="200">
            Nos encargamos de tus clientes, de tu marketing, diseño, publicidad, SEO,
            desarrollo web a la medida y mas.
          </p>
          <div class="t-flex t-flex-col sm:t-flex-row t-gap-3 sm:t-gap-4 t-justify-center lg:t-justify-start"
            data-aos="fade-up" data-aos-delay="400">
            <q-btn unelevated color="primary" label="Inicia sesion"
              class="t-rounded-full t-px-6 t-py-2 md:t-px-8 md:t-py-3 t-text-sm md:t-text-base !t-text-gray-dark"
              :to="{ name: 'login' }" />
            <q-btn outline color="primary" label="Registrate"
              class="t-rounded-full t-px-6 t-py-2 md:t-px-8 md:t-py-3 t-text-sm md:t-text-base !t-bg-gray-dark"
              :to="{ name: 'register' }" />
          </div>
        </div>

        <div class="lg:t-w-1/2 t-relative t-mt-12 lg:t-mt-0" data-aos="zoom-in">
          <img src="src/assets/img/fondo.jpg" alt="Demo"
            class="t-rounded-xl t-shadow-2xl t-relative t-z-10 t-w-full t-max-w-2xl lg:t-max-w-none t-mx-auto">
          <div
            class="t-absolute t-inset-0 t-bg-blue-200 t-rounded-xl t-transform t-translate-y-8 md:t-translate-y-12 t-opacity-30">
          </div>
        </div>
      </div>
    </section>

    <!-- Logos Section -->
    <section class="t-bg-gray-light-dark  t-py-8 md:t-py-12" data-aos="fade-up" id="nuestros-clientes">
      <div class="t-container t-mx-auto t-px-4 t-text-center">
        <h2 class="t-text-secondary t-text-lg md:t-text-4xl t-font-bold t-mb-8 font-michroma">Sobre Nosotros</h2>
        <p class="lg:t-px-60 t-px-30 t-my-10 t-text-lg md:t-text-xl">
          En Clivo, transformamos la atención al cliente con agentes inteligentes diseñados para optimizar
          procesos ⚙️, reducir costos y potenciar la eficiencia empresarial 📈. <br /> <br />Nuestro enfoque combina
          innovación,
          personalización y escalabilidad, permitiendo que negocios de todos los tamaños aprovechen el poder de la IA
          para ofrecer experiencias de cliente excepcionales.
        </p>

        <h3 class="font-michroma t-my-10">Herramientas de trabajo</h3>

        <CarruselLogosClients />
      </div>
    </section>

    <!-- Features Section -->
    <section class="t-container t-mx-auto t-px-4 t-py-12 md:t-py-24" id="servicios">
      <div class="t-text-center t-max-w-3xl t-mx-auto t-mb-12 md:t-mb-20">
        <h2 class="t-text-2xl md:t-text-3xl lg:t-text-4xl t-font-bold t-mb-4 md:t-mb-6 font-michroma"
          data-aos="fade-up">
          Nuestros servicios
        </h2>

        <p class="t-px-10 t-my-10 t-text-lg md:t-text-xl">
          En Clivo, ofrecemos una suite de soluciones basadas en Inteligencia Artificial que potencian la automatización
          y optimización del servicio al cliente.
        </p>
      </div>

      <div class="t-grid t-grid-cols-1 sm:t-grid-cols-2 lg:t-grid-cols-3 t-gap-6">
        <q-card v-for="(feature, index) in features" :key="index"
          class="t-p-6 md:t-p-8 t-rounded-xl hover:t-shadow-lg t-transition-all !t-shadow-lg dark:t-shadow-none"
          data-aos="fade-up" :data-aos-delay="index * 100">
          <q-icon :name="feature.icon" size="xl" color="primary" class="t-mb-4 t-p-3 md:t-p-4 t-rounded-full" />
          <h3 class="t-text-lg md:t-text-xl t-font-bold t-mb-2 md:t-mb-4">{{ feature.title }}</h3>
          <p class="t-text-sm md:t-text-base text-darkmode">{{ feature.text }}</p>
        </q-card>
      </div>
    </section>

    <ContactsClients />
  </q-page>
</template>


<script setup lang="ts">
import CarruselLogosClients from '@components/CarruselSettings.vue'
import ContactsClients from '@components/ContactsClients.vue';

const features = [
  {
    icon: 'rocket_launch',
    title: 'Automatización de Atención al Cliente',
    text: 'Agentes de IA que responden de manera inmediata, personalizada en redes sociales: WhatsApp, Telegram, Web, entre otros.'
  },
  {
    icon: 'analytics',
    title: 'Agentes Inteligentes',
    text: 'Soluciones conversacionales diseñadas para captar leads, resolver dudas y mejorar la experiencia del cliente en su negocio.'
  },
  {
    icon: 'support_agent',
    title: 'Soporte personalizado de IA',
    text: 'Asistencia personalizada para el manejo de chats con IA y su control al completo.'
  }
]
</script>

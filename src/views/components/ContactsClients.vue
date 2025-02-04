<template>
  <section class="t-container t-mx-auto t-px-4 t-py-16 md:t-py-24" data-aos="fade-up" id="contactanos">
    <div
      class="t-max-w-2xl t-mx-auto t-bg-gray-light-dark t-rounded-xl t-shadow-lg t-p-8 md:t-p-12 t-relative t-overflow-hidden">
      <div class="t-absolute t-inset-0 t-bg-gradient-to-r t-from-primary-50/50 t-to-secondary-50/50 t-opacity-30 t-z-0">
      </div>

      <div class="t-relative t-z-10">
        <h2 class="t-text-3xl md:t-text-4xl t-font-bold t-text-gray-800 t-mb-2 t-text-center">
          Contáctanos
        </h2>
        <p class="t-text-gray-600 t-text-center t-mb-8">
          ¿Tienes alguna pregunta? ¡Escríbenos!
        </p>

        <q-form @submit="onSubmit" class="t-space-y-6">
          <div class="md:t-grid md:t-grid-cols-2 md:t-gap-6">
            <div data-aos="fade-right" data-aos-delay="100">
              <q-input v-model="form.name" label="Nombre completo *" lazy-rules="ondemand"
                :rules="[val => !!val || 'Campo requerido']" clearable :dark="false">
              </q-input>

            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <q-input v-model="form.email" label="Correo electrónico *" type="email" lazy-rules="ondemand" :rules="[
                val => !!val || 'Campo requerido',
                val => /.+@.+\..+/.test(val) || 'Correo no válido'
              ]" clearable :dark="false">
              </q-input>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <q-input v-model="form.message" label="Mensaje *" type="textarea" lazy-rules="ondemand"
              :rules="[val => !!val || 'Campo requerido']" rows="5" clearable :dark="false">
              <template v-slot:prepend>
                <q-icon name="chat" class="t-text-primary-600" />
              </template>
            </q-input>
          </div>

          <div data-aos="zoom-in" data-aos-delay="400">
            <q-btn label="Enviar mensaje" type="submit" color="primary" class="t-w-full md:t-w-auto !t-text-gray-dark"
              :loading="loading">
              <template v-slot:loading><q-spinner-hourglass class="t-mr-2" />Enviando...</template>
            </q-btn>
          </div>
        </q-form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEmailSender } from '@/composables/useEmailSender'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { gsap } from 'gsap'

const { sendEmail, loading } = useEmailSender()
const $q = useQuasar()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const onSubmit = async () => {

  gsap.to('.q-btn', {
    y: -5,
    repeat: 1,
    yoyo: true,
    duration: 0.2,
    ease: 'power2.inOut'
  })

  try {
    await sendEmail({
      to_email: 'dannymetal17@gmail.com',
      from_name: form.value.email,
      message: form.value.message
    })

    $q.notify({
      color: 'positive',
      message: 'Mensaje enviado correctamente',
      icon: 'check_circle'
    })

    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error(err);
    $q.notify({
      color: 'negative',
      message: 'Error al enviar el mensaje',
      icon: 'error'
    })
  }
}
</script>

<style scoped>
.q-input {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  color: red !important;
}

.q-input__control {
  @apply t-rounded-lg t-transition-all t-duration-300;
}

.q-input:hover .q-field__control {
  @apply t-shadow-md;
}

.q-field--outlined .q-field__control:before {
  @apply t-border-gray-300 hover:t-border-primary;
}

.q-field--highlighted .q-field__control:before {
  @apply t-border-primary t-border-2;
}

.q-field__label {
  @apply t-text-gray-500;
}

.q-btn {
  @apply t-rounded-lg t-px-8 t-py-3 t-text-base t-font-medium t-transition-transform;
}

.q-btn::before {
  @apply t-hidden;
}
</style>
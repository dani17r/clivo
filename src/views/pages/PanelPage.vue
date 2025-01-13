<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md t-w-[90%] md:t-w-[85%]">

      <h3 class="t-text-3xl t-mb-12">{{ $t('pages.panel.title') }}</h3>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-screen-xl">
        <q-input v-model="name" :label="$t('pages.panel.form.nombre_empresa')" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

        <q-input type="number" v-model="age" :label="$t('pages.panel.form.miembros')" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]" />

        <q-input autogrow v-model="text" type="textarea" :label="$t('pages.panel.form.descripcion')" />

        <div style="padding-top: 30px">
          <q-btn :label="$t('general.btn.guardar')" type="submit" color="primary" no-caps size="16px" />
          <q-btn :label="$t('general.btn.resetear')" type="reset" color="primary" flat class="q-ml-sm" no-caps
            size="16px" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const $q = useQuasar()

const name = ref(null)
const age = ref(null)
const text = ref(null)

const onSubmit = () => {
  $q.notify({
    color: 'red-5',
    textColor: 'white',
    icon: 'warning',
    message: 'You need to accept the license and terms first',
  })
}

const onReset = () => {
  name.value = null
  age.value = null
  text.value = null
}
</script>

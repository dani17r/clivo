<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md t-w-[90%] md:t-w-[40%]">

      <div class="flex t-justify-between t-mb-12">
        <h3 class="t-text-3xl">{{ $t('pages.register.title') }}</h3>
        <router-link :to="{ name: 'login' }" class="hover:t-underline hover:t-text-blue-500">
          {{ $t('pages.login.ir_a') }}
        </router-link>
      </div>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-screen-xl">

        <q-input v-model="nombre_empresa" :label="$t('pages.register.form.nombre_empresa')" lazy-rules="ondemand"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

        <q-input v-model="email" :label="$t('pages.register.form.email')" lazy-rules="ondemand"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

        <q-input class="q-mt-md" v-model="password" :label="$t('pages.register.form.password')" lazy-rules="ondemand"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          :type="passwordView ? 'text' : 'password'">

          <template v-slot:append>
            <q-icon :name="!passwordView ? 'visibility_off' : 'visibility'
              " class="cursor-pointer" @click="passwordView = !passwordView" />
          </template>
        </q-input>

        <q-input class="q-mt-md" v-model="passwordConfirm" :label="$t('pages.register.form.passwordConfirm')"
          lazy-rules="ondemand" :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          :type="passwordConfirmView ? 'text' : 'password'">
          <template v-slot:append>
            <q-icon :name="!passwordConfirmView ? 'visibility_off' : 'visibility'
              " class="cursor-pointer" @click="passwordConfirmView = !passwordConfirmView" />
          </template>
        </q-input>

        <div style="padding-top: 30px">
          <q-btn :label="$t('general.btn.aceptar')" type="submit" color="primary" no-caps size="16px" />
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

const nombre_empresa = ref(null);
const email = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);

const passwordView = ref(false);
const passwordConfirmView = ref(false);

const onSubmit = () => {
  $q.notify({
    color: 'red-5',
    textColor: 'white',
    icon: 'warning',
    message: 'You need to accept the license and terms first',
  })
}

const onReset = () => {
  nombre_empresa.value = null
  email.value = null
  password.value = null
  passwordConfirm.value = null
}
</script>

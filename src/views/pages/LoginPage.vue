<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md t-w-[90%] md:t-w-[40%]">

      <div class="flex t-justify-between t-mb-12">
        <h3 class="t-text-3xl">{{ $t('pages.login.title') }}</h3>
        <router-link :to="{ name: 'register' }" class="hover:t-underline hover:t-text-blue-500">
          {{ $t('pages.register.ir_a') }}
        </router-link>
      </div>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-screen-xl" ref="formRef">

        <q-input v-model="email" :label="$t('pages.login.form.email')" lazy-rules="ondemand"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

        <q-input class="q-mt-md" v-model="password" :label="$t('pages.login.form.password')" lazy-rules="ondemand"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          :type="passwordView ? 'text' : 'password'">

          <template v-slot:append>
            <q-icon :name="!passwordView ? 'visibility_off' : 'visibility'
              " class="cursor-pointer" @click="passwordView = !passwordView" />
          </template>
        </q-input>

        <div style="padding-top: 30px">
          <q-btn :label="$t('general.btn.aceptar')" type="submit" color="primary" class="!t-text-gray-dark" no-caps
            unelevated size="16px" />
          <q-btn :label="$t('general.btn.resetear')" type="reset" color="secondary" flat class="q-ml-sm" no-caps
            size="16px" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import superComposable from '@composables/super';
import { QForm } from 'quasar';
import { ref } from 'vue'

const { store, router, $q } = superComposable();

const formRef = ref<QForm | null>(null);
const passwordConfirm = ref("");
const password = ref("");
const email = ref("");

const passwordView = ref(false);

const onSubmit = async () => {
  const isValid = await formRef.value?.validate();

  if (!isValid) return;

  store.auth.signIn(
    {
      email: email.value,
      password: password.value,
    },
    () => {
      $q.loading.show();
      setTimeout(() => {
        router.push({ name: 'panel' });
        $q.loading.hide();
      }, 350);
    },
  );

};

const onReset = () => {
  email.value = ""
  password.value = ""
  passwordConfirm.value = ""
}
</script>

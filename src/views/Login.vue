<script setup>

import {ref} from "vue";
import {useApiStore} from "@/stores/api";
import router from "@/router";
import {useUserStore} from "@/stores/user";

const phone = ref('');
const password = ref('');

const ApiStore = useApiStore();
const UserStore = useUserStore();

const error = ref(null);

const login = async () => {
  let success = true;
  await ApiStore.login({phone: phone.value, password: password.value}, async (res) => {
    console.log(res)
    success = false;
    UserStore.isAuthorized = false;
    switch (res.status) {
      case 419:
        error.value = await res.json();
        break;
    }
  })
  if(success) {
    router.push("/");
    UserStore.isAuthorized = true;
  }
};

</script>

<template>
  <div class="fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center">
    <div v-if="error" class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Danger</span>
      <div>
        <span class="font-medium">Возникли ошибки</span>
        <ul class="mt-1.5 list-disc list-inside">
          <li v-for="(err, field) in error.error.errors">{{ field }}: {{ err[0] }}</li>
        </ul>
      </div>
    </div>
    <form @submit.prevent="login" class="flex flex-col gap-2">
      <input type="text" v-model="phone" placeholder="Телефон">
      <input type="password" v-model="password" placeholder="Пароль">
      <input type="submit">
    </form>
  </div>

</template>

<style scoped>

</style>
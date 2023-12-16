<script setup>

import {useClientsStore} from "@/stores/clients";
import VTable from "@/components/UI/VTable.vue";
import Loader from "@/components/UI/Loader.vue";
import {ref} from "vue";

const ClientStore = useClientsStore();
const loader = ref(true);
(async () => {
  await ClientStore.getClients();
  loader.value = false;
})();

const headers = {
  id: "ID",
  name: "Имя",
  phone: 'Телефон',
  role: 'Роль',
  birthday: 'Дата рождения'
};


const selectedClients = ref([]);

</script>

<template>
  <h1 class="font-bold text-2xl">Клиенты</h1>
  <VTable
      v-if="!loader"
      :items="ClientStore.clients"
      :headers="headers"
      :selected-items="selectedClients"
  />
  <Loader :active="loader" message="Получение списка клиентов..." />
</template>

<style scoped>

</style>
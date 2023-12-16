<script setup>

import VTable from "@/components/UI/VTable.vue";
import {ref} from "vue";
import router from "@/router";

const fields = ref({});

fields.value = {
  id: 'ID',
  client_id: 'Клиент ID',
  date: 'Дата',
  time: 'Время'
};

const createNewRecord = () => {
  router.push('/records-create');
};

</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl flex">Записи <span @click="createNewRecord" class="mx-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Новая запись</span></h1>
    <div class="filter">
      <input type="text" placeholder="Клиент">
    </div>
    <VTable :headers="fields" :items="[]" />
  </div>
</template>

<style scoped>

</style>
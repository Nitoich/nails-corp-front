<script setup>
import VTable from "@/components/UI/VTable.vue";
import {useRecordsStore} from "@/stores/records";

const headers = {
  id: 'ID',
  client_name: "Клиент",
  time: 'Время'
};

const RecordsStore = useRecordsStore();
</script>

<template>
  <h1>Записи на сегодня</h1>
  <VTable
    :headers="headers"
    :items="RecordsStore.todayRecords"
  />
</template>

<style scoped>

</style>
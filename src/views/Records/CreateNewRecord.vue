<script setup>

const create = () => {};

</script>

<template>
  <form @submit.prevent="create">
    <input type="text" placeholder="Номер (gag)">
    <input type="text" placeholder="ФИО">
    <input type="date" placeholder="Дата">
    <input type="time" placeholder="Время">
    <input type="text" placeholder="Услуга (gag)">
    <input type="submit" value="Создать">
  </form>
</template>

<style scoped>

</style>
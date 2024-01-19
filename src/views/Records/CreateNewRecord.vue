<script setup>

import Selector from "@/components/UI/Inputs/Selector.vue";
import {ref} from "vue";
import {useProductsStore} from "@/stores/products";

const product = ref(null);
const ProductStore = useProductsStore();
ProductStore.getProducts();

const create = () => {
  console.log(product.value)
};

let errors = null;

</script>

<template>
  <form @submit.prevent="create">
    <input type="text" placeholder="Номер (gag)">
    <input type="text" placeholder="ФИО">
    <input type="date" placeholder="Дата">
    <input type="time" placeholder="Время">
    <Selector v-model="product" :items="ProductStore.selectorProducts" />
    <input type="submit" value="Создать">
  </form>
</template>

<style scoped>

</style>
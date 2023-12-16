<template>
  <div class="aside w-[100vw] md:h-[100vh] border-r-2 shadow-2xl md:hover:w-[250px] md:w-[75px] transition-all">
    <div class="panel p-3 justify-around flex md:block">
      <ASideButton v-for="button of buttons" :name="button.name" :icon="button.icon" :href="button.href"/>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import ASideButton from "@/components/ASidePanel/ASideButton.vue";

const buttons = ref([
  {
    name: "Главная",
    icon: "https://cdn-icons-png.flaticon.com/512/7133/7133312.png",
    href: "/"
  },
  {
    name: "Клиенты",
    icon: "https://cdn-icons-png.flaticon.com/512/7133/7133312.png",
    href: "/clients"
  },
  {
    name: "Рассылка",
    icon: "https://cdn-icons-png.flaticon.com/512/7133/7133312.png",
    href: "/newsletter"
  },
  {
    name: "Записи",
    icon: "https://cdn-icons-png.flaticon.com/512/7133/7133312.png",
    href: "/records"
  }
]);

</script>

<style scoped>

</style>
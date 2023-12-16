<script setup>

import Loader from "@/components/UI/Loader.vue";
import {useMainLoaderStore} from "@/stores/mainLoader";

const MainLoaderStore = useMainLoaderStore();

</script>

<template>
  <div v-if="MainLoaderStore.active" class="z-50 bg-white fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center">
    <Loader
        :active="MainLoaderStore.active"
        :message="MainLoaderStore.message"
    />
  </div>
</template>

<style scoped>

</style>
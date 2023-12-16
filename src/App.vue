<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ASidePanel from "@/views/ASidePanel.vue";
import {useUserStore} from "@/stores/user";
import FullscreenLoader from "@/components/UI/FullscreenLoader.vue";
import {useMainLoaderStore} from "@/stores/mainLoader";

const UserStore = useUserStore();
const MainLoaderStore = useMainLoaderStore();
MainLoaderStore.enable('Авторизация...');
(async () => {
  await UserStore.getUserInfo();
  MainLoaderStore.disable();
})();
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row min-h-[100vh]">
    <ASidePanel v-if="UserStore.isAuthorized" />
    <main class="md:min-h-[100vh] flex-auto p-5">
      <FullscreenLoader />
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>

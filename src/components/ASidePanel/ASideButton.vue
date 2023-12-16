<script setup>

import router from "@/router";

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "Button"
  },
  icon: {
    type: String,
    required: true,
    default: ""
  },
  href: {
    type: String,
    required: true,
    default: ""
  }
});

const buttonClick = () => {
  router.push(props.href)
};

</script>

<template>
  <div class="button overflow-hidden flex justify-between items-center cursor-pointer gap-4" @click="buttonClick">
    <div class="button-img w-[50px] h-[50px]">
      <img class="w-[50px] min-w-[50px] h-[50px]" :src="icon" :alt="name">
    </div>
    <div class="button-name hidden md:block flex-1 flex justify-center">
      {{ name }}
    </div>
  </div>
</template>

<style scoped>

</style>
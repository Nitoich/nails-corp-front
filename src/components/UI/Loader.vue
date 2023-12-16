<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  }
});

const size = 50;

</script>

<template>
  <div v-if="active" class="flex flex-col gap-2 items-center p-10 w-100">
    <div class="flex gap-4">
      <div :class="`w-[${size}px] h-[${size}px] bg-blue-600 animate-[pulse_1s_infinite_0s] animate-duration rounded-full`">
        <div :class="`w-[${size}px] h-[${size}px] bg-blue-600 animate-[ping_1s_infinite_0s] rounded-full`"></div>
      </div>
      <div :class="`w-[${size}px] h-[${size}px] bg-blue-600 animate-[pulse_1s_infinite_0.2s] rounded-full`">
        <div :class="`w-[${size}px] h-[${size}px] bg-blue-600 animate-[ping_1s_infinite_0.2s] rounded-full`"></div>
      </div>
      <div :class="`w-[${size}px] h-[${size}px] bg-blue-600 animate-[pulse_1s_infinite_0.4s] rounded-full`">
        <div :class="`w-[${size}px] h-[${size}px] bg-blue-600 animate-[ping_1s_infinite_0.4s] rounded-full`"></div>
      </div>
    </div>
    <div v-if="message !== ''">{{ message }}</div>
  </div>

</template>

<style scoped>

</style>
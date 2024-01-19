<script setup>
import {ref} from "vue";

const dropdownMenu = ref(null);

const props = defineProps({
  items: {
    required: true,
    type: Object,
    default: {}
  },
  modelValue: {}
});

const emit = defineEmits(['update:modelValue'])

const query = ref("");

const selected = ref(0);

const filteredItems = () => {
  const filtered = {};
  if(query.value === "") { return props.items; }
  Object.keys(props.items).forEach(key => {
    if(props.items[key].includes(query.value)) {
      filtered[key] = props.items[key];
    }
  });

  return filtered;
};

const isOpen = ref(false);

const toggleSelector = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (event, id) => {
  event.preventDefault();
  selected.value = id;
  emit("update:modelValue", selected.value);
  toggleSelector()
};
</script>

<template>
  <div class="relative group">
    <button @click="toggleSelector" id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
      <span class="mr-2">{{ selected < 1 ?  "Выбрать" : items[selected]}}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
    <div :class="isOpen ? '' : 'hidden'" id="dropdown-menu" class="absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
      <!-- Search input -->
      <input v-model="query" id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off">
      <!-- Dropdown content goes here -->
      <a @click="selectItem($event, key)" v-for="(item, key) in filteredItems()" href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">{{ item }}</a>
    </div>
  </div>
</template>

<style scoped>

</style>
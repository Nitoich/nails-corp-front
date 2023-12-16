<script setup>
const props = defineProps({
  headers: {
    type: Object,
    required: true,
    default: {}
  },
  items: {
    type: Array,
    required: true,
    default: []
  },
  selectedItems: {
    type: Array,
    required: false,
    default: []
  }
});

const isSelectedItem = (item_idx) => {
  const index = props.selectedItems.find((element) => element === item_idx);
  return typeof index !== "undefined";
};
</script>

<template>
  <div class="v-table overflow-x-auto">
    <table class="shadow-2xl w-100">
      <thead>
        <tr>
          <th class="border-2 bg-slate-200 p-3" v-for="(value, index) of headers" :key="index">{{ value }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="isSelectedItem(idx) ? 'bg-slate-400' : ''" v-for="(item, idx) of items" @click="$emit('item-click', {event: $event, data: item, tableIndex: idx})">
          <template v-for="(value, index) of headers">
            <th class="border-2 p-3">{{ item[index] }}</th>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
<script setup>
  import { ref } from 'vue'
  import GroceriesTable from '../../../GroceriesTable.vue'

  const groceries = ref([
    {'name': 'brood',        'price': 1.00, 'quantity': 1},
    {'name': 'broccoli',     'price': 0.99, 'quantity': 2},
    {'name': 'krentebollen', 'price': 1.20, 'quantity': 4},
    {'name': 'noten',        'price': 2.99, 'quantity': 0},
  ])
</script>

<template>
  <GroceriesTable v-model="groceries" />
</template>

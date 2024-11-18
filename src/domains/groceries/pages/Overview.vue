<script setup>
  import { ref } from 'vue'
  import GroceriesTable from '../../../GroceriesTable.vue'
  import { getAllGroceries } from '../../../store/Groceries.js'

  const groceries = getAllGroceries
</script>

<template>
  <GroceriesTable v-model="groceries" />
</template>

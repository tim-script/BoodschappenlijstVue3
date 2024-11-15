<script setup>
  import { ref } from 'vue'
  import GroceriesTable from './GroceriesTable.vue'

  const groceries = ref([
    {'name': 'brood',        'price': 1.00, 'quantity': 1},
    {'name': 'broccoli',     'price': 0.99, 'quantity': 2},
    {'name': 'krentebollen', 'price': 1.20, 'quantity': 4},
    {'name': 'noten',        'price': 2.99, 'quantity': 0},
  ])
</script>

<template>
  <h1>Boodschappen</h1>
  <GroceriesTable v-model="groceries" />
</template>

<style>
  #app {
    background: #eee;
    color: #000;
    font-family: verdana, sans-serif;
    line-height: normal;
    padding: 1rem;
    text-align: left;
  }
</style>

<style scoped>
  h1 {
    font-size: 1rem;
    margin: 0 0 1rem;
  }
</style>

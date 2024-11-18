<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { addGrocery } from '../../../store/Groceries.js'
  import GroceryForm from '../components/GroceryForm.vue'

  const router = useRouter()

  const grocery = {name: '', price: '', quantity: 1}

  const addGroceryToStore = (grocery) => {
    addGrocery(grocery)
    router.push({name: 'overview'})
  }
</script>

<template>
  <GroceryForm :grocery="grocery" @submit="addGroceryToStore" />
</template>

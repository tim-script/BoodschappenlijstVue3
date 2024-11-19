<script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getGroceryById, updateGrocery } from '../../../store/Groceries.js'
  import { formatPrice } from '..'
  import GroceryForm from '../components/GroceryForm.vue'

  const route = useRoute()
  const router = useRouter()

  let grocery = {...getGroceryById(route.params.id).value}
  grocery.price = formatPrice(grocery.price)

  const updateGroceryInStore = (grocery) => {
    updateGrocery(grocery)
    router.push({name: 'overview'})
  }
</script>

<template>
  <GroceryForm :grocery="grocery" @submit="updateGroceryInStore" />
</template>

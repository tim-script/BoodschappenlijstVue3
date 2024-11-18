<script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getGroceryById, updateGrocery } from '../../../store/Groceries.js'
  import GroceryForm from '../components/GroceryForm.vue'

  const route = useRoute()
  const router = useRouter()

  const grocery = {...getGroceryById(route.params.id).value}

  const updateGroceryInStore = (grocery) => {
    updateGrocery(grocery)
    router.push({name: 'overview'})
  }
</script>

<template>
  <GroceryForm :grocery="grocery" @submit="updateGroceryInStore" />
</template>

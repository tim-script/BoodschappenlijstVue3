<script setup>
  import { computed, ref } from 'vue'
  import { formatPrice } from './domains/groceries'

  const groceries = defineModel()

  const totalCost = computed(() =>
    groceries.value.reduce((total, grocery) => total + grocery.price * grocery.quantity, 0)
  )
</script>

<template>
  <table>
    <tbody>
      <tr v-for="grocery in groceries">
        <td class="name">{{grocery.name}}</td>
        <td class="price">{{formatPrice(grocery.price)}}</td>
        <td class="quantity"><input type="number" v-model="grocery.quantity"></td>
        <td class="price">{{formatPrice(grocery.price * grocery.quantity)}}</td>
        <td><RouterLink :to="{name: 'edit', params: { id: grocery.id }}">Bewerken</RouterLink></td>
        <td><RouterLink :to="{name: 'delete', params: { id: grocery.id }}">Verwijderen</RouterLink></td>
      </tr>
      <tr>
        <td colspan="3">Totaal</td>
        <td class="price">{{formatPrice(totalCost)}}</td>
        <td colspan="2"></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid #ccc;
    padding: .5rem 1rem;
  }
  td.price,
  td.quantity {
    width: 5rem;
  }
  td.price {
    text-align: right;
  }
  td.quantity input {
    border: 1px solid #ccc;
    font-size: 100%;
    text-align: right;
    width: 100%;
  }
</style>

<script setup>
  defineEmits(['submit'])

  const props = defineProps(['grocery'])
</script>

<template>
  <div>
    <label for="name">Naam:</label>
    <input id="name" name="name" type="text" v-model="grocery.name" required />
  </div>
  <div>
    <label for="name">Prijs:</label>
    <input id="name" name="name" type="text" v-model="grocery.price" required />
  </div>
  <div>
    <label for="quantity">Aantal:</label>
    <input id="quantity" name="quantity" type="number" v-model="grocery.quantity" required />
  </div>
  <div>
    <button @click="$emit('submit', grocery)">Toevoegen</button>
  </div>
</template>

<style scoped>
  div + div {
    margin-top: 1rem;
  }
  label {
    display: block;
    margin-bottom: .25rem;
  }
  input {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 100%;
    width: 100%;
  }
</style>

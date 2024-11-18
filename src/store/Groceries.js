import { computed, ref } from 'vue'

// State
const groceries = ref([
  {id: 0, name: 'brood',        price: 1.00, quantity: 1},
  {id: 1, name: 'broccoli',     price: 0.99, quantity: 2},
  {id: 2, name: 'krentebollen', price: 1.20, quantity: 4},
  {id: 3, name: 'noten',        price: 2.99, quantity: 0},
])

let nextId = 4

// Getters
export const getAllGroceries = computed(() => groceries.value)
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id))

// Actions

export const addGrocery = (grocery) => {
  grocery.id = nextId++
  groceries.value.push(grocery)
}

export const updateGrocery = (grocery) => {
  const index = groceries.value.findIndex(element => element.id === grocery.id)
  if (index != -1)
    groceries.value[index] = grocery
}

export const deleteGrocery = (id) => {
  const index = groceries.value.findIndex(element => element.id == id)
  if (index != -1)
    groceries.value.splice(index, 1)
}

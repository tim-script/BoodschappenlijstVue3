<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { deleteGrocery } from '../../../store/Groceries.js'

  const route = useRoute()
  const router = useRouter()

  deleteGrocery(route.params.id)
  router.push({name: 'overview'})
</script>

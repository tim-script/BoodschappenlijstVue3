import { createRouter, createMemoryHistory } from 'vue-router'
import Create from '../domains/groceries/pages/Create.vue'
import Edit from '../domains/groceries/pages/Edit.vue'
import Overview from '../domains/groceries/pages/Overview.vue'

const routes = [
  {path: '/',       component: Overview},
  {path: '/create', component: Create},
  {path: '/edit',   component: Edit},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router

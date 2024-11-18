import { createRouter, createWebHistory } from 'vue-router'
import Create from '../domains/groceries/pages/Create.vue'
import Delete from '../domains/groceries/pages/Delete.vue'
import Edit from '../domains/groceries/pages/Edit.vue'
import Overview from '../domains/groceries/pages/Overview.vue'

const routes = [
  {name: 'overview', path: '/',           component: Overview},
  {name: 'create',   path: '/create',     component: Create},
  {name: 'edit',     path: '/edit/:id',   component: Edit},
  {name: 'delete',   path: '/delete/:id', component: Delete},
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

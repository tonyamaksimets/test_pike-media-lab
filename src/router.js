import Vue from 'vue'
import Router from 'vue-router'
import catalog from './views/catalog.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: catalog
  },
  {
    path: '/:filmId',
    name: 'film',
    component: () => import('./views/film.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

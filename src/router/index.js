import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import ProductList from '@/pages/ProductList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    }
  ]
})

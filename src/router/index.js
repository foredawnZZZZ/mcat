import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import List from '../pages/list/List'
import Cart from '../pages/cart/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {path: '/list', component: List},
        {path: '/cart', component: Cart}
      ]
    }
  ]
})

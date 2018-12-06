import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Mens from '@/components/Mens'
import Womens from '@/components/Womens'
import Gear from '@/components/Gear'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/Mens',
      name: 'Mens',
      component: Mens
    },
    {
      path: '/Womens',
      name: 'Womens',
      component: Womens
    },
    {
      path: '/Gear',
      name: 'Gear',
      component: Gear
    }
  ]
})

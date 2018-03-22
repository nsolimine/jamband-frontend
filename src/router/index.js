import Vue from 'vue'
import Router from 'vue-router'
import Playerslist from '@/components/playerslist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Playerslist',
      component: Playerslist
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import playerslist from '@/components/playerslist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'playerslist',
      component: playerslist
    }
  ]
})

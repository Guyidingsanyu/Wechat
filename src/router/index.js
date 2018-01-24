import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/moduls/Home'
import Delicacy from '@/moduls/Product/Delicacy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/delicacy',
      name: 'Delicacy',
      component: Delicacy
    }
  ]
})

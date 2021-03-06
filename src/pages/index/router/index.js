import Vue from 'vue'
import Router from 'vue-router'
// index
import Home from '@/pages/index/views/home'
import Gallery from '@/pages/index/views/gallery'
import Contact from '@/pages/index/views/contact'
import About from '@/pages/index/views/about'

import '@/assets/css/common.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        keepAlive: false
      }
    }
  ]
})

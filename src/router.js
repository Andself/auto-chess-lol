import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/weaponry'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/weaponry',
      name: 'weaponry',
      component: () => import(/* webpackChunkName: "weaponry" */ './views/Weaponry/index.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/weaponry'
    },
    {
      path: '/weaponry',
      name: 'weaponry',
      component: () => import(/* webpackChunkName: "weaponry" */ './views/Weaponry/index.vue')
    }
  ]
})

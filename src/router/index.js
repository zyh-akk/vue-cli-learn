import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // do something
  if (to.meta === 'requireAuth') {
    next({
      name: 'login'
    })
  } else {
    next()
  }
})

// router.afterEach((to, from, next) => {
//   // to -》当前页面
//   // from -》来自页面
// })

export default router

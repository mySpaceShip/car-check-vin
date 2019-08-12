import Vue from 'vue'
import Notifications from 'vue-notification'
import VuePortal from 'portal-vue'

import App from './App.vue'
import './font-awesome'
import './vue-bootstrap'

import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!JSON.parse(localStorage.getItem('login'))) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next(
      )
    }
  }
  if (to.matched.some(record => record.meta.login)) {
    if (JSON.parse(localStorage.getItem('login'))) {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

Vue.use(VuePortal)
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

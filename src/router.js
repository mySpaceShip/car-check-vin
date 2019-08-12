import Vue from 'vue'
import Router from 'vue-router'
import authentication from '@/components/Autocode/Authentication'
import report from '@/components/Autocode/Report'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: authentication,
      meta: {login: true}
    },
    {
      path: '/',
      name: 'report',
      component: report,
      meta: {requiresLogin: true}

    },

  ],

})




import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import profile from '@/components/profile'
import courses from '@/components/courses'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: profile
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    }
  ]
})

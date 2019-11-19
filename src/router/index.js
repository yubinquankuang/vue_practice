import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'views/fault/HelloWorld'
import login from 'views/user/login'
import register from 'views/user/register'
import faultIndex from 'views/fault/faultIndex'
import fault from 'views/fault/fault'
import stragegy from 'views/strategy/strategy'
import modifier from 'views/modifier/index'
import secretBook from 'views/secretBook/index'
import station from 'views/fault/station'
import store from '@/store'

Vue.use(Router)

// 懒加载模式，用到才加载
const index = () => import('@/views/main/index')

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: {name: 'faultIndex'},
      beforeEnter (to, from, next) {
        if (!store.state.user.isLogin) {
          document.title = to.name
          next({
            path: '/login'
          })
        } else {
          next()
        }
      },
      children: [
        {
          path: 'strategy',
          name: 'strategy',
          component: stragegy
        },
        {
          path: 'modifier',
          name: 'modifier',
          component: modifier
        },
        {
          path: 'secretBook',
          name: 'secretBook',
          component: secretBook
        },
        {
          path: 'faultIndex',
          name: 'faultIndex',
          component: faultIndex,
          redirect: {name: 'HelloWorld'},
          children: [
            {
              path: 'fault',
              name: 'fault',
              component: fault
            },
            {
              path: 'station',
              name: 'station',
              component: station
            },
            {
              path: 'helloWorld',
              name: 'HelloWorld',
              component: HelloWorld
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // if (to.name !== 'login' & !store.state.isLogin) {
  //   next('/login')
  // } else {
  //   next()
  // }
  document.title = to.name
  next()
})
export default router

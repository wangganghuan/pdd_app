import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  //首页
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../components/tabBar/homePage/index.vue')
  },
  //聊天
  {
    path: '/chatpage',
    name: 'chatpage',
    component: () => import('../components/tabBar/chatPage/index.vue')
  },
  //个人中心
  {
    path: '/personalcenterpage',
    name: 'personalcenterpage',
    component: () => import('../components/tabBar/personalCenterPage/index.vue')
  },
  //搜索
  {
    path: '/recommendpage',
    name: 'recommendpage',
    component: () => import('../components/tabBar/recommendPage/index.vue')
  },
  //推荐
  {
    path: '/searchpage',
    name: 'searchpage',
    component: () => import('../components/tabBar/searchPage/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

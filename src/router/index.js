import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入Films组件
import Films from '@/views/Films'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
import Error from '@/views/Error'
import Detail from '@/views/Detail'

Vue.use(VueRouter)
const routes = [
  {
    path: '/films',
    component: Films,
    // 进行二级路由的配置
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/films/nowplaying'// 进行一级路由内部的重定向操作 /films===>/films/nowplaying
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/',
    redirect: '/films' // 重定向  / ==>films ===> /fimls/nowplaying
  },
  {
    path: '*',
    component: Error // 前面的路由都没有匹配上的话，就需要显示Error页面了
  }
]

const router = new VueRouter({
  routes
})

export default router

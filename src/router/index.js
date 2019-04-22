import Vue from 'vue'
import Router from 'vue-router'
import VueScroller from 'vue-scroller'

Vue.use(Router)
Vue.use(VueScroller)

import Index from '@/container/index' //主容器

import Home from '@/container/home'
import Singer from '@/container/singer'
import List from '@/container/list'
import My from '@/container/my'
import Search from '@/container/search'
import HotList from '@/container/musiclist/HotList'
import NewList from '@/container/musiclist/NewList'
import KingList from '@/container/musiclist/KingList'
import MoreList from '@/container/morelist'
import MusicPlay from '@/container/musicplay'
import SongerDetails from '@/container/songer/SongerDetails'
export default new Router({
  routes:[
    {
      path:'/musicplay',
      name:'MusicPlay',
      component:MusicPlay
    },
    {
      path:'/',
      component:Index,
      redirect:'/home',
      children:[
        {
          path:'home',
          component:Home,
          redirect:'/home/hot',
          children:[
            {
              path:'hot',
              component:HotList
            },
            {
              path:'new',
              component:NewList
            },
            {
              path:'king',
              component:KingList
            }
          ]
        },
        {
          path:'singer',
          component:Singer,
          
        },
        {
          path:'list',
          component:List
        },
        {
          path:'my',
          component:My
        },
        {
          path:'search',
          component:Search
        },
        {
          path:'more',
          name:'MoreList',
          component:MoreList
        },
        {
            path:'details',
            name:'SongerDetails',
            component:SongerDetails
        }
      ]
    }
  ]
})

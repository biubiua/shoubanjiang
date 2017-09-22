import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Zhaiquan from '@/components/zhaiquan'
import Hot from '@/components/hot'
import New from '@/components/new'
import My from '@/components/my'
import Shop from '@/components/shop'
import Shouban from '@/components/shouban'
import Login from '@/components/login'
import Register from '@/components/register'
import Gooddetail from '@/components/gooddetail'
import Homedetail from '@/components/homedetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:Home
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path: '/home/homedetail/:gid',
      name: 'Homedetail',
      component:Homedetail,
    },{
      path: '/my',
      name: 'my',
      component:My,
    },
    {
      path: '/shop',
      name: 'shop',
      component:Shop
    },
    {
      path:'/gooddetail/:gid',
      component:Gooddetail
    },
     {
      path: '/shouban',
      name: 'shouban',
      component:Shouban
    },
    {
      path:'/zhaiquan',
      component:Zhaiquan,
      children:[
        {
          path:'new',
          component:New
        },
        {
          path:'hot',
          component:Hot
        },
        {
          path:'/zhaiquan',
          redirect:'/zhaiquan/new'
        }
      ]
    },
    {
    	path:'/',
    	redirect:{name:"home"}
    }
  ]
})

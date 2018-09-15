import Router from "vue-router"
import Vue from "vue"
import home from '../components/home';

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      name: 'home'
    },
    {
      path: '/about/:id',
      component: () => import ('../components/about'),
      name:'about'
    },
    {
      path:'/login',
      name:'login',
      component: ()=>import ('../components/login')
    },
    {
      path:'/vuexDemo',
      component:()=>import('../components/vuexDemo')
    }
  ]
})
export default router;

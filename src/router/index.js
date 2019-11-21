import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import pageButton from '../pages/index'
import index from '../pages/index'
import index from '../pages/index'


//显示声明用到路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

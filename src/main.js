// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' /**引入App这个组件*/
import router from './router' /**引入路由配置*/
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',/**最后效果将会替换页面中id为app的div元素*/
  router, /**使用路由*/
  components: {App}, /**告知页面这个组件用这样的标签来包裹着,并且使用它*/
  template: '<App/>'/**告知当前页面想使用App这个组件*/
})

Vue.filter('formatDate', function (str) {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
})

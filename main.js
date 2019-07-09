// 程序的入口

// 这是ES6推出的模块化规范
// 加载vue模块 
import Vue from 'vue'
// 根组件
import App from './App.vue'


// 引入 bootstrap css
import './assets/crud-template/bootstrap/css/bootstrap.css'
import './assets/crud-template/css/index.css'
// 引入router
import router from './router'
// 提示当前处在开发模式下
Vue.config.productionTip = false

import axios from 'axios'
// 给vue实例的原型增加  让所有的共享
Vue.prototype.axios = axios

axios.defaults.baseURL = 'http://localhost:3000/heroes'

// vue处理app文件    并吧处理的结果返回给render   render把渲染结果挂载到#app下
//吧所有内容显示在app里面
new Vue({
  router,
  render: createElement => createElement(App),
}).$mount('#app')

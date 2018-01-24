// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'




Vue.config.productionTip = false

//全局引入插件,全局注册插件    原型继承
import axios from "axios";
Vue.prototype.axios = axios;

//导入头部公共组件
import Header from "@/components/Header";
//全局注册
Vue.component("x-header", Header)

//导入底部公共组件
import Footer from "@/components/Footer";
//全局注册
Vue.component("x-footer", Footer)

//导入内容公共组件
import Cont from "@/components/Content";
//全局注册
Vue.component("x-content", Cont)

//导入list公共组件
import Prolist from "@/components/Prolist";
//全局注册
Vue.component("x-prolist", Prolist)





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

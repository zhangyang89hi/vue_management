// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import router from './router'
import axios from './http.js'

import myAlert from './components/common/alert.js'
Vue.use(myAlert)

// Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-default/index.css'; 
Vue.use(ElementUI);

// // 引入组件
// import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui' // 使用驼峰方式书写组件名即
// // 使用组件
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>'
})

var bus = new Vue()

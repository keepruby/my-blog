import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import './mock'

import axios from '@/api'
import { showMessage } from './utils'
Vue.prototype.$showMessage = showMessage
Vue.prototype.$http = axios

import Vloading from '@/directives/loading'
Vue.directive('loading', Vloading)

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import routes from './routes.js'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const router = new VueRouter({
  routes // short for routes: routes
})


new Vue({
	router,
	el: '#app',
	data: {
	},
	components: {
		App
	},
	template: '<App></App>'
})

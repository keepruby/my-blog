import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Project from '@/views/Project'
import Message from '@/views/Message'

const router = new VueRouter({
	routes: [
		{ name: 'Home', path: '/', component: Home },
		{ name: 'About', path: '/about', component: About },
		{ name: 'Blog', path: '/article', component: Blog },
		{ name: 'Project', path: '/project', component: Project },
		{ name: 'Message', path: '/message', component: Message },
	],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../pages/AboutUs.vue'
import Main from '../pages/Main.vue'
import FormPage from '../pages/FormPage.vue'

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/aboutus',
		component: AboutUs
	},
	{
		path: '/form',
		component: FormPage
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router

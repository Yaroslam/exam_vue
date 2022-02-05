import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
	state: {
		aboutPage: '',
		mainPage: {},
		formPageForm: {},
		formPageItems: {},
		widgetData: {}
	},
	mutations: {
		async setAboutPage(state) {
			const resp = await axios.get(
				'https://demo-api.vsdev.space/api/farm/about_page'
			)
			state.aboutPage = resp.data.text
		},
		async setMainPage(state) {
			const resp = await axios.get(
				'https://demo-api.vsdev.space/api/farm/home_page'
			)
			state.mainPage = resp.data
		},
		async setformPageForm(state) {
			const resp = await axios.get(
				'https://demo-api.vsdev.space/api/farm/baby/form'
			)
			state.formPageForm = resp.data.fields
		},
		async setfromPageItems(state) {
			const resp = await axios.get('https://demo-api.vsdev.space/api/farm/baby')
			state.formPageItems = resp.data
		},
		async setWidget(state) {
			const resp = await axios.get(
				'https://demo-api.vsdev.space/api/farm/left_widget'
			)
			state.widgetData = resp.data
		}
	},
	actions: {
		setAboutPage(context) {
			context.commit('setAboutPage')
		},
		setMainPage(context) {
			context.commit('setMainPage')
		},
		setformPageForm(context) {
			context.commit('setformPageForm')
		},
		setfromPageItems(context) {
			context.commit('setfromPageItems')
		},
		setWidget(context) {
			context.commit('setWidget')
		}
	},
	getters: {
		getAboutPageInfo(state) {
			return state.aboutPage
		},
		getMainPageInfo(state) {
			return state.mainPage
		},
		getformPageForm(state) {
			return state.formPageForm
		},
		getformPageItems(state) {
			return state.formPageItems
		},
		getWidget(state) {
			return state.widgetData
		}
	}
})

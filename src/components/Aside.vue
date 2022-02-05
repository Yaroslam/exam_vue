<template>
	<a-layout-sider>
		<a-menu
			theme="dark"
			mode="vertical"
			v-model:selectedKeys="array"
			:style="{ lineHeight: '64px' }"
		>
			<a-menu-item key="/">
				<router-link to="/">Главная</router-link>
			</a-menu-item>
			<a-menu-item key="/aboutus">
				<router-link to="/aboutus">О нас</router-link>
			</a-menu-item>
			<a-menu-item key="/form">
				<router-link to="/form">Форма</router-link>
			</a-menu-item>
			<a-menu-item :style="{ height: '500px', width: '200px'}">
				<Widget></Widget>
			</a-menu-item>
		</a-menu>
	</a-layout-sider>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Widget from './Widget.vue'

const route = useRoute()
const array = ref(['/'])
watch(route, () => {
	array.value = [route.path]
})
</script>

<style lang="scss" scoped></style>

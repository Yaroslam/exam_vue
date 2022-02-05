<template>
	<div class="main">
		<a-row type="flex">
			<a-col flex="1 1 200px"
				><div>{{ content.text }}</div></a-col
			>
			<a-col flex="0 1 300px"
				><img :src="content.image" alt="" class="main__img"
			/></a-col>
		</a-row>
	</div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const content = computed(() => store.getters.getMainPageInfo)

onMounted(() => {
	store.dispatch('setMainPage')
})
</script>

<style lang="scss" scoped>
.main {
	&__img {
		border-radius: 10px;
		width: 500px;
	}
}
</style>

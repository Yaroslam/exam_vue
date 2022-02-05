<template>
	<a-card hoverable style="width: 160px">
		<template #cover>
			<img alt="example" src="../assets/rabbit_img.jpg" />
		</template>
		<div>
			<h3>У нас родилось</h3>
			<p>коров: {{ items.cows }}</p>
			<p>кроликов: {{ items.rabbits }}</p>
			<p>овцeц: {{ items.sheeps }}</p>
		</div>
	</a-card>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const items = computed(() => store.getters.getWidget)

onMounted(() => {
	store.dispatch('setWidget')
})
</script>

<style lang="scss" scoped></style>

<template>
	<div v-html="info"></div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const info = computed(() => store.getters.getAboutPageInfo)

onMounted(() => {
	store.dispatch('setAboutPage')
})
</script>

<style lang="scss" scoped></style>

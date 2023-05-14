<template>
	<div class="BlogTOC-container">
		<h2>目录</h2>
		<RightList :list="toc" />
	</div>
</template>

<script>
import RightList from './RightList.vue'
export default {
	components: {
		RightList,
	},
	props: {
		toc: {
			type: Array,
		},
	},
}
</script>

<style lang="less" scoped>
.BlogTOC-container h2 {
	font-weight: bold;
	letter-spacing: 2px;
	font-size: 1em;
	margin: 0;
}
</style>

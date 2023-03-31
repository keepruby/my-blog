<template>
	<div class="test-container">
		<siteAside />
	</div>
</template>

<script>
import siteAside from './'
export default {
	components: {
		siteAside,
	},
	mounted() {},

	methods: {},
}
</script>

<style lang="less" scoped>
.test-container {
	width: 250px;
	height: 100vh;
	background: #202020;
}
</style>

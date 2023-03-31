<template>
	<div class="test-container">
		<Menu />
	</div>
</template>

<script>
import Menu from './'
export default {
	components: {
		Menu,
	},
}
</script>

<style lang="less" scoped>
.test-container {
	width: 300px;
	height: 500px;
	border: 1px solid #999;
	margin: 0 auto;
	background: #202020;
}
</style>

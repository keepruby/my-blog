<template>
	<div class="test-container">
		<Empty />
	</div>
</template>

<script>
import Empty from './'
export default {
	components: {
		Empty,
	},
	data() {
		return {}
	},
}
</script>

<style lang="less" scoped>
.test-container {
	position: relative;
	width: 500px;
	height: 500px;
	border: 1px solid #999;
}
</style>

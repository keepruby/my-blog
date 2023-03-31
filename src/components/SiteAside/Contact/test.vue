<template>
	<div class="test-container">
		<Contact />
	</div>
</template>

<script>
import Contact from './'
export default {
	components: {
		Contact,
	},
}
</script>

<style lang="less" scoped>
.test-container {
	position: relative;
	width: 400px;
	height: 500px;
	border: 1px solid #999;
	background: #000;
	margin: 0 auto;
}
</style>

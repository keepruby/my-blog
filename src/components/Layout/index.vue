<template>
	<div class="layout-container">
		<header class="left">
			<slot name="left"></slot>
		</header>
		<main class="main">
			<slot></slot>
		</main>
		<footer class="right">
			<slot name="right"></slot>
		</footer>
	</div>
</template>

<script>
export default {
	components: {},
}
</script>

<style lang="less" scoped>
.layout-container {
	width: 100%;
	height: 100%;
	display: flex;
}
.left {
	flex: 0 0 auto;
	overflow: hidden;
}
.main {
	flex: 1 1 auto;
	overflow: hidden;
}
.right {
	flex: 0 0 auto;
	overflow: hidden;
}
</style>

<template>
	<div class="test-container">
		<Layout>
			<div>我是main</div>
			<template #footer>
				<div class="right">我是footer</div>
			</template>
		</Layout>
	</div>
</template>

<script>
// import SiteAside from '@/components/SiteAside'
import Layout from './'
export default {
	components: {
		Layout,
		// SiteAside,
	},
}
</script>

<style lang="less" scoped>
.test-container {
	width: 700px;
	height: 500px;
	border: 1px solid rgb(0, 0, 0);
	margin: 0 auto;
	.right {
		width: 150px;
	}
}
</style>

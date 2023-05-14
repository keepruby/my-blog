<template>
	<div class="app-container">
		<Layout>
			<template #left>
				<div class="aside">
					<SiteAside />
				</div>
			</template>
			<template>
				<router-view />
			</template>
			<!-- <template #right>
				<div class="right">我是footer</div>
			</template> -->
		</Layout>
	</div>
</template>

<script>
// import { getBlogs } from '@/api/blog.js'
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'
export default {
	components: {
		Layout,
		SiteAside,
	},
	// async created() {
	// 	const res = await getBlogs()
	// 	console.log(res)
	// },
	// mounted() {},
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.app-container {
	.self-fill(fixed);
}
.aside {
	width: 250px;
	height: 100%;
}
</style>

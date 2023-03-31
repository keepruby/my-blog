<template>
	<div class="app-container">
		<Layout>
			<template #left>
				<SiteAside />
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
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'
export default {
	components: {
		Layout,
		SiteAside,
	},
	mounted() {},
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.app-container {
	.self-fill(fixed);
}
</style>

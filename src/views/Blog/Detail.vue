<template>
	<Layout>
		<div class="main-container" v-loading="isLoading">
			<BlogDetail :blog="data" v-if="data" />
		</div>
		<template #right>
			<BlogTOC />
		</template>
	</Layout>
</template>

<script>
import axiosData from '@/mixins/axiosData'
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail'
import BlogTOC from './components/BlogTOC'

import { getBlog } from '@/api/blog'
export default {
	mixins: [axiosData(null)],
	components: {
		Layout,
		BlogTOC,
		BlogDetail,
	},
	methods: {
		async axiosData() {
			return await getBlog(this.$route.params.id)
		},
	},
}
</script>

<style lang="less" scoped></style>

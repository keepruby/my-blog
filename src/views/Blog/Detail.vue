<template>
	<Layout>
		<div class="main-container" v-loading="isLoading">
			<BlogDetail :blog="data" v-if="data" />
			<BlogComment v-if="!isLoading" />
		</div>
		<template #right>
			<div class="right-container" v-loading="isLoading">
				<BlogTOC :toc="data.toc" v-if="data" />
			</div>
		</template>
	</Layout>
</template>

<script>
import axiosData from '@/mixins/axiosData'
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail'
import BlogTOC from './components/BlogTOC'
import BlogComment from './components/BlogComment'

import { getBlog } from '@/api/blog'
export default {
	mixins: [axiosData(null)],
	components: {
		Layout,
		BlogTOC,
		BlogDetail,
		BlogComment,
	},
	methods: {
		async axiosData() {
			return await getBlog(this.$route.params.id)
		},
	},
}
</script>

<style lang="less" scoped>
.main-container {
	box-sizing: border-box;
	padding: 20px;
	position: relative;
	width: 100%;
	overflow-x: hidden;
	scroll-behavior: smooth;
	height: 100%;
	overflow-y: scroll;
}
.right-container {
	width: 300px;
	height: 100%;
	overflow-y: scroll;
	box-sizing: border-box;
	position: relative;
	padding: 20px;
}
</style>

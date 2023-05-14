<template>
	<div class="blog-list-container" v-loading="isLoading">
		<h2>文章分类</h2>
		<RightList :list="list" @selectTo="selectTo" />
	</div>
</template>

<script>
import RightList from './RightList.vue'
import { getCategory } from '@/api/blog'
import axiosData from '@/mixins/axiosData'
export default {
	mixins: [axiosData([])],
	computed: {
		categoryId() {
			return +this.$route.params.categoryId || -1
		},
		limit() {
			return +this.$route.params.limit || 10
		},
		list() {
			const totalArticleCount = this.data.reduce(
				(a, b) => a + b.articleCount,
				0
			)
			const result = [
				{ name: '全部', id: -1, articleCount: totalArticleCount },
				...this.data,
			]
			return result.map((i) => {
				return {
					...i,
					isSelect: i.id === this.categoryId,
					aside: `${i.articleCount}篇`,
				}
			})
		},
	},

	components: {
		RightList,
	},
	methods: {
		//点击分类跳转
		selectTo(item) {
			const query = {
				limit: this.limit,
				page: 1,
			}
			if (item.id === -1) {
				this.$router.push({
					name: 'Blog',
					query,
				})
			} else {
				this.$router.push({
					name: 'CategoryBlog',
					query,
					params: {
						categoryId: item.id,
					},
				})
			}
		},
		async axiosData() {
			return await getCategory()
		},
	},
}
</script>

<style lang="less" scoped>
.blog-list-container {
	position: relative;
	width: 300px;
	padding: 20px;
	height: 100%;
	overflow-y: auto;
	h2 {
		font-weight: bold;
		letter-spacing: 2px;
		font-size: 1em;
		margin: 0;
	}
}
</style>
